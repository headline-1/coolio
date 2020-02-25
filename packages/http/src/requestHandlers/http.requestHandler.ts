import FormData from 'form-data';
import * as http from 'http';
import { ClientRequestArgs, IncomingMessage } from 'http';
import * as url from 'url';
import * as https from 'https';
import { HttpRequestHandler, NormalizedHttpOptions, RawHttpResponse } from '../httpClient.types';
import { encodeText, getEncodingFromHeaders } from '../helpers/encoder.helper';
import { HttpResponseHeaders } from '../httpResponseHeaders';
import { HttpStatusText } from '../httpCodes';
import { HttpRequestError } from '../httpRequestError';
import { isFormData } from '../helpers';

export interface HttpRequestHandlerOptions {
  defaultRequestOptions?: ClientRequestArgs;
}

const readBlob = (blob: Blob): Promise<ArrayBuffer> => {
  const reader = new FileReader();
  return new Promise<ArrayBuffer>((resolve, reject) => {
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

/**
 * Creates a new {@link HttpRequestHandler} that uses native Node.js [HTTP]{@link https://nodejs.org/api/http.html} & [HTTPS]{@link https://nodejs.org/api/https.html} modules underneath.
 * Does not support *mode* property.

 * @param requestHandlerOptions - default native options attached to all requests
 */
export const httpRequestHandler = (
  requestHandlerOptions: HttpRequestHandlerOptions = {},
): HttpRequestHandler => {

  return (requestOptions: NormalizedHttpOptions): Promise<RawHttpResponse> => new Promise((resolve, reject) => {
    const {
      url: urlString,
      method,
      headers,
      body,
      timeout,
    } = requestOptions;

    const {
      protocol,
      auth,
      hostname,
      port,
      path,
    } = url.parse(urlString);

    const requestModule = protocol === 'https:' ? https : http;
    const request = requestModule.request({
      ...requestHandlerOptions.defaultRequestOptions,
      path,
      method,
      port,
      hostname,
      protocol,
      auth,
      timeout,
    }, (response: IncomingMessage) => {
      const status = response.statusCode || -1;
      const statusText = response.statusMessage || HttpStatusText[status] || '';
      const ok = status > 0 && status < 400;
      const headers = new HttpResponseHeaders(response.headers);

      const bodyPromise = new Promise<ArrayBuffer>((resolve, reject) => {
        const chunks: any[] = [];
        response.on('data', data => chunks.push(data));
        response.on('error', error => reject(error));
        response.on('end', () => {
          const body = Buffer.concat(chunks);
          resolve(body);
        });
      });

      resolve({
        arrayBuffer: () => bodyPromise,
        text: () => bodyPromise.then(buffer => encodeText(buffer, getEncodingFromHeaders(headers))),
        ok,
        headers,
        redirected: false,
        status,
        statusText,
        url: response.url || urlString,
        abort: () => request.abort(),
      });
    }).once('error', (error: Error) => {
      reject(error);
    }).once('timeout', () => {
      reject(new HttpRequestError(requestOptions, `Request timed out after ${timeout}ms.`));
    });

    for (const key in headers) {
      if (headers.hasOwnProperty(key)) {
        request.setHeader(key, headers[key]);
      }
    }

    if (isFormData(body)) {
      return (async () => {
        const form = new FormData();
        const entries: [string, FormDataEntryValue][] = [];
        body.forEach((value, key) => entries.push([key, value]));
        for (const [key, value] of entries) {
          if (value instanceof Blob) {
            const buffer = await readBlob(value);
            form.append(key, buffer, {
              contentType: value.type,
              filename: value.name,
              knownLength: value.size,
            });
          } else {
            form.append(key, value);
          }
        }
        const formHeaders = form.getHeaders();
        for (const key in formHeaders) {
          if (formHeaders.hasOwnProperty(key)) {
            request.setHeader(key, formHeaders[key]);
          }
        }
        form.pipe(request);
      })().catch(reject);
    }

    if (body) {
      if (typeof body === 'string') {
        request.write(body);
      } else {
        request.write(Buffer.from(body));
      }
    }

    request.end();
  });
};
