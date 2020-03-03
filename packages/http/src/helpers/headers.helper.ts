import isNil from 'lodash/isNil';
import { HttpHeaders } from '../httpClient.types';

export const getHeader = (headers: HttpHeaders | undefined, header: string): string | undefined => {
  if (!headers) {
    return undefined;
  }
  const lowercaseHeader = header.toLowerCase();
  const foundKey = Object.keys(headers).find(key => key.toLowerCase() === lowercaseHeader);
  return foundKey ? String(headers[foundKey]) : undefined;
};

export const parseHeaders = (headers: Headers): Record<string, string> => {
  const result: Record<string, string> = {};
  headers.forEach((value, key) => result[key.toLowerCase()] = value);
  return result;
};

export const sanitizeHeaders = (...multipleHeaders: (Record<string, any> | undefined)[]): Record<string, string> => {
  const result: Record<string, string> = {};
  const keys: Record<string, string> = {};
  for (const headers of multipleHeaders) {
    if (!headers) {
      continue;
    }
    for (const key in headers) {
      if (headers.hasOwnProperty(key)) {
        // Normalize key
        const matchKey = key.toLowerCase();
        // If a header already exists, assure that we'll use the right casing with it
        const originalKey = keys[matchKey];
        const value = headers[key];

        // Remove any existing headers
        if (originalKey) {
          delete result[originalKey];
        }

        if (isNil(value)) {
          delete keys[matchKey];
        } else {
          keys[matchKey] = key;
          result[key] = value.toString();
        }
      }
    }
  }
  return result;
};
