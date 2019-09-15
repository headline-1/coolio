import isNil from 'lodash/isNil';
import isString from 'lodash/isString';
import isBuffer from 'lodash/isBuffer';
import { BodySerializer, ContentType, HttpOptions, NormalizedHttpBody } from './httpClient.types';
import { BodyCasing, getCaseConverter, getHeader } from './helpers';
import { urlEncode } from './helpers/urlEncoding.helper';


export interface BodySerializerOptions {
  bodyCasing?: BodyCasing;
}

export const bodySerializer = ({
  bodyCasing,
}: BodySerializerOptions = {}): BodySerializer => {
  const caseConverter = getCaseConverter(bodyCasing);
  return (options: HttpOptions): NormalizedHttpBody => {
    const contentTypeHeader = getHeader(options.headers, 'content-type') || '';
    const contentType = contentTypeHeader.split(';')
      .map(type => type.trim().toLowerCase());
    const body = options.body;

    if (isNil(body) || isString(body) || isBuffer(body)) {
      return body as NormalizedHttpBody;
    }
    if (typeof body === 'object') {
      for (const type of contentType) {
        switch (type) {
          case ContentType.JSON:
          case ContentType.VND_JSON:
            return JSON.stringify(caseConverter(options.body));
          case ContentType.URL_ENCODED:
            return urlEncode(caseConverter(options.body));
          case ContentType.TEXT:
            return String(body);
          default:
            break;
        }
      }
    }
    throw new Error(`Can not serialize request body. Content-Type "${contentTypeHeader}"`);
  };
};
