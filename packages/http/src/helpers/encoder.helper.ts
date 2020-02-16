import TypedArray = NodeJS.TypedArray;
import { HttpResponseHeaders } from '../httpResponseHeaders';
import { Buffer } from 'buffer';

export type BufferEncoding =
  | 'ascii'
  | 'utf8'
  | 'utf-8'
  | 'utf16le'
  | 'ucs2'
  | 'ucs-2'
  | 'base64'
  | 'latin1'
  | 'binary'
  | 'hex'
  ;

/*
 * TextEncoder is not available on every environment, hence in this utility
 * we use "buffer" module (the npm one, not Node.js).
 */

export const getEncodingFromHeaders = (headers: HttpResponseHeaders | undefined, fallback = 'utf8') => (
  headers?.get('content-type')
    ?.split(';')
    ?.find(element => element.trim().startsWith('charset'))
    ?.split('=')[1]
  ?? fallback
).trim().toLowerCase();

export const encodeArrayBuffer = (data: TypedArray | string | undefined = '', encoding: BufferEncoding = 'utf8') =>
  typeof data === 'string'
    ? new Uint8Array(Buffer.from(data, encoding as BufferEncoding))
    : new Uint8Array(Buffer.from(data));

export const encodeText = (buffer: ArrayBuffer, encoding = 'utf8') => {
  return Buffer.from(buffer).toString(encoding);
};
