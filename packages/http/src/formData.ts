import * as mime from 'mime-types';
import CombinedStream from 'combined-stream';
import { Readable, Writable } from 'stream';

export const SUPPORTS_BROWSER_FORM_DATA = (() => {
  try {
    return !({} instanceof FormData);
  } catch {
    return false;
  }
})();

export const isBrowserFormData = (value: any): value is FormData =>
  SUPPORTS_BROWSER_FORM_DATA && value instanceof FormData;

export const isBlob = (value: any): value is Blob => {
  try {
    return value instanceof Blob;
  } catch {
    return false;
  }
};

export const readBlob = (blob: Blob): Promise<Buffer> => {
  const reader = new FileReader();
  return new Promise<Buffer>((resolve, reject) => {
    const onEnd = (e: ProgressEvent<FileReader>) => {
      reader.removeEventListener('loadend', onEnd);
      if ((e as any).error) {
        reject((e as any).error);
      } else {
        resolve(Buffer.from(reader.result as ArrayBuffer));
      }
    };
    reader.addEventListener('loadend', onEnd);
    reader.readAsArrayBuffer(blob);
  });
};

export const getFileMeta = (value: Blob | Readable, existingMeta?: CFormDataEntryMetadata) => {
  const anyValue = value as any;
  const isHttpRequest = anyValue.readable && anyValue.hasOwnProperty('httpVersion');

  const path: string = (
    existingMeta?.filename
    || existingMeta?.filepath
    || anyValue.name
    || anyValue.path
    || (isHttpRequest && anyValue.client._httpMessage.path)
    || ''
  );
  const filename = path.substring(Math.max(path.lastIndexOf('/'), path.lastIndexOf('\\')) + 1);

  const contentType = anyValue.type
    || mime.lookup(path)
    || (isHttpRequest && anyValue.headers['content-type'])
    || CFormData.DEFAULT_CONTENT_TYPE;

  return {
    contentType,
    knownLength: anyValue.size,
    ...existingMeta,
    filename,
  };
};

export interface CFormDataEntryMetadata {
  header?: string | Record<string, string | string[]>;
  filepath?: string;
  filename?: string;
  name?: string;
  contentType?: string;
  knownLength?: number;
}

export type CFormDataValue = string | Blob | Readable;

export interface CFormDataEntryValue {
  value: CFormDataValue;
  meta?: CFormDataEntryMetadata;
}

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 */
export class CFormData {
  public static LINE_BREAK = '\r\n';
  public static DEFAULT_CONTENT_TYPE = 'application/octet-stream';

  private data = new Map<string, CFormDataEntryValue[]>();
  private boundary?: string;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    if (CFormData.isFormData(data)) {
      data.forEach((value: FormDataEntryValue | CFormDataValue, key: string) => this.append(key, value));
      return;
    }
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        this.append(key, data[key]);
      }
    }
  }

  static from(data: any): FormData | CFormData {
    if (isBrowserFormData(data) || data instanceof CFormData) {
      return data;
    }
    const formData = new CFormData(data);
    if (!SUPPORTS_BROWSER_FORM_DATA) {
      return formData;
    }
    const browserFormData = new FormData();
    formData.forEach((value, name) => browserFormData.append(name, value as any));
    return browserFormData;
  }

  static isFormData(data: any): data is FormData | CFormData {
    return isBrowserFormData(data) || data instanceof CFormData;
  }

  append(name: string, value: any, meta?: CFormDataEntryMetadata) {
    this.insert(name, value, true, meta);
  }

  delete(name: string) {
    this.data.delete(name);
  }

  getAll(name: string): CFormDataValue[] {
    return this.data.get(name)?.map(e => e.value) || [];
  }

  set(name: string, value: CFormDataValue | Blob, meta?: CFormDataEntryMetadata): void {
    this.insert(name, value, false, meta);
  }

  get(name: string): CFormDataValue | null {
    return this.data.get(name)?.[0]?.value ?? null;
  }

  has(name: string): boolean {
    return this.data.has(name);
  }

  forEach(callbackfn: (value: CFormDataValue, key: string, parent: CFormData) => void) {
    this.data.forEach((value, key) => value.forEach(entry => callbackfn(entry.value, key, this)));
  }

  getBoundary() {
    let boundary = this.boundary;
    if (!boundary) {
      boundary = '--------------------------';
      for (let i = 0; i < 24; i++) {
        boundary += Math.floor(Math.random() * 10).toString(16);
      }
      this.boundary = boundary;
    }
    return boundary;
  };

  getHeaders() {
    return {
      'content-type': 'multipart/form-data; boundary=' + this.getBoundary(),
    };
  }

  pipe(writable: Writable) {
    const stream = CombinedStream.create();
    this.data.forEach((entries, name) => {
      for (const entry of entries) {
        stream.append(this.multiPartHeader(name, entry?.meta));
        const value = entry.value;
        if (value instanceof Readable) {
          stream.append(writable);
        } else if (isBlob(value)) {
          stream.append(next => readBlob(value).then(next));
        } else {
          stream.append(value);
        }
        stream.append(CFormData.LINE_BREAK);
      }
    });
    stream.append(this.lastBoundary());
    stream.pipe(writable);
  }

  getBuffer(): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      let buffer = Buffer.alloc(0);
      const writable = new Writable({
        write: (chunk, encoding: BufferEncoding, callback) => {
          buffer = Buffer.concat([buffer, Buffer.from(chunk, encoding)]);
          callback();
        }
      });
      writable.on('error', reject);
      writable.on('finish', () => resolve(buffer));
      this.pipe(writable);
    });
  }

  toString() {
    return '[object FormData]';
  }

  private insert(name: string, value: any, append: boolean, meta?: CFormDataEntryMetadata) {
    if (value === undefined) {
      return;
    }
    if (value instanceof Date) {
      value = value.toISOString();
    }
    if (Array.isArray(value)) {
      for (let index = 0; index < value.length; index++) {
        this.insert(`${name}[${index}]`, value[index], append);
      }
      return;
    }
    if (typeof value === 'object' && !isBlob(value)) {
      for (const objectKey in value) {
        if (!value.hasOwnProperty(objectKey) || value[objectKey] === undefined) {
          continue;
        }
        this.append(`${name}[${objectKey}]`, value[objectKey]);
      }
      return;
    }
    if (isBlob(value)) {
      meta = getFileMeta(value, meta);
    }

    // Insert
    if (!append) {
      this.data.set(name, [{ value, meta }]);
      return;
    }
    const existingEntries = this.data.get(name);
    const newEntry = { value, meta };
    this.data.set(name, existingEntries ? [...existingEntries, newEntry] : [newEntry]);
  }

  private multiPartHeader(name: string, meta: CFormDataEntryMetadata = {}) {
    if (typeof meta.header === 'string') {
      return meta.header;
    }

    const contentDisposition = meta.filename ? `filename="${meta.filename}"` : '';
    const contentType = meta.contentType;

    let contents = '';
    const headers = {
      'Content-Disposition': ['form-data', `name="${name}"`, contentDisposition],
      'Content-Type': [contentType],
    };

    if (typeof meta.header === 'object') {
      Object.assign(headers, meta.header);
    }

    for (const prop in headers) {
      let header = headers[prop];
      if (!headers.hasOwnProperty(prop) || !header) {
        continue;
      }
      if (!Array.isArray(header)) {
        header = [header];
      }
      header = header.filter(Boolean);
      if (header.length) {
        contents += prop + ': ' + header.join('; ') + CFormData.LINE_BREAK;
      }
    }

    return '--' + this.getBoundary() + CFormData.LINE_BREAK + contents + CFormData.LINE_BREAK;
  };

  private lastBoundary() {
    return '--' + this.getBoundary() + '--' + CFormData.LINE_BREAK;
  }
}
