import { HttpHeaders } from '../httpClient.types';

export const getHeader = (headers: HttpHeaders | undefined, header: string): string | undefined => {
  if (!headers) {
    return undefined;
  }
  const lowercaseHeader = header.toLowerCase();
  const foundKey = Object.keys(headers).find(key => key.toLowerCase() === lowercaseHeader);
  return foundKey ? String(headers[foundKey]) : undefined;
};
