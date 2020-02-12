import isNil from 'lodash/isNil';
import { ContentType } from '../contentType';

const defaultHeaders = (_host = '') => ({
  'Accept': 'application/json,application/vnd.api+json',
  'Content-Type': ContentType.JSON,
});

const toUrlEncoded = (obj: object) => {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p) && !isNil(obj[p])) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
};

const sanitizeHeaders = (headers: Record<string, any>): Record<string, string> => {
  const result: Record<string, string> = {};
  for (const key in headers) {
    if (headers.hasOwnProperty(key) && !isNil(headers[key])) {
      result[key] = headers[key].toString();
    }
  }
  return result;
};

export const getHostname = (url: string): string => {
  const match = url && url.match(/^.+:\/\/([^/]+)/);
  return match ? match[1] : '';
};

export const HttpClientHelper = {
  defaultHeaders,
  toUrlEncoded,
  sanitizeHeaders,
  getHostname,
};
