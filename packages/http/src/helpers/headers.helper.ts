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
