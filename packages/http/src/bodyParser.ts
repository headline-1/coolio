import { BodyCasing, getBoundaryFromContentTypeHeader, getCaseConverter, processMultipartBody } from './helpers';
import { BodyParser, HttpResponse, RawHttpResponse } from './httpClient.types';
import { urlDecode } from './helpers/urlEncoding.helper';
import { ContentTypeMap, switchContentType } from './contentType';

type BodyParserImplementation = (rawResponse: RawHttpResponse) => Promise<any>;

export interface BodyParserOptions {
  bodyCasing?: BodyCasing;
  defaultParser?: BodyParserImplementation;
}

export const bodyParser = ({
  bodyCasing,
  defaultParser = raw => raw.arrayBuffer(),
}: BodyParserOptions = {}): BodyParser<any> => {
  const caseConverter = getCaseConverter(bodyCasing);

  const getContentType = (rawResponse: RawHttpResponse) => (rawResponse.headers.get('content-type') || '')
    .split(';')
    .map(part => part.trim().toLowerCase())
    .filter(Boolean);

  const bodyParsers: ContentTypeMap<BodyParserImplementation> = {
    TEXT: raw => raw.text(),
    JSON: raw => raw.text()
      .then(body => body ? caseConverter(JSON.parse(body)) : null)
      .catch((err) => {
        throw new Error(`Response body that was passed to bodyParser is invalid. ${err}`);
      }),
    MULTIPART: raw => raw.text()
      .then(body => processMultipartBody(body, getBoundaryFromContentTypeHeader(getContentType(raw)))),
    URL_ENCODED: raw => raw.text()
      .then(urlDecode)
      .then(caseConverter),
  };

  return (rawResponse: RawHttpResponse): HttpResponse => {
    const contentType = getContentType(rawResponse)[0];

    const parsedBody = switchContentType(contentType, bodyParsers, defaultParser);

    return {
      ...rawResponse,
      parsedBody: () => parsedBody(rawResponse),
    };
  };
};
