import TypedArray = NodeJS.TypedArray;
import { HttpResponseHeaders } from '../httpResponseHeaders';
import { Buffer } from 'buffer';

/* TextEncoder is not available on every environment, hence in this utility
 * we use "buffer" module (the npm one, not Node.js).
 */

export const getEncodingFromHeaders = (headers: HttpResponseHeaders | undefined, fallback = 'utf-8') => (
  headers?.get('content-type')
    ?.split(';')
    ?.find(element => element.trim().startsWith('charset'))
    ?.split('=')[1]
  ?? fallback
).trim().toLowerCase();

export const encodeArrayBuffer = (data: TypedArray | string | undefined = '') =>
  typeof data === 'string'
    ? new Uint8Array(Buffer.from(data, 'utf8'))
    : new Uint8Array(Buffer.from(data));

export const encodeText = (buffer: ArrayBuffer, charset = 'utf-8') => {
  return Buffer.from(buffer).toString(charset);
};
