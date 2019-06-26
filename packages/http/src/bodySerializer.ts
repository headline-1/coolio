import isString from 'lodash/isString';
import isBuffer from 'lodash/isBuffer';
import { NormalizedHttpBody } from './httpClient.types';

export const serializeBody = (body: any): NormalizedHttpBody => {
  if (isString(body) || isBuffer(body)) {
    return body;
  }
  if (typeof body === 'object') {
    return JSON.stringify(body);
  }
  return undefined;
};
