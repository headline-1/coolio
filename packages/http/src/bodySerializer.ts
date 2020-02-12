import isNil from 'lodash/isNil';
import isString from 'lodash/isString';
import isBuffer from 'lodash/isBuffer';
import { BodySerializer, HttpOptions, NormalizedHttpBody } from './httpClient.types';
import { BodyCasing, getCaseConverter, getHeader } from './helpers';
import { urlEncode } from './helpers/urlEncoding.helper';
import { ContentTypeMap, switchContentType } from './contentType';

export interface BodySerializerOptions {
  bodyCasing?: BodyCasing;
}

export const bodySerializer = ({
  bodyCasing,
}: BodySerializerOptions = {}): BodySerializer => {
  const caseConverter = getCaseConverter(bodyCasing);

  const bodySerializers: ContentTypeMap<(body: any) => any> = {
    JSON: (body) => JSON.stringify(caseConverter(body)),
    URL_ENCODED: (body) => urlEncode(caseConverter(body)),
    TEXT: (body) => String(body),
  };

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
        const serializedBody = switchContentType(type, bodySerializers);
        if (serializedBody) {
          return serializedBody(body);
        }
      }
    }
    throw new Error(`Can not serialize request body. Content-Type "${contentTypeHeader}"`);
  };
};
