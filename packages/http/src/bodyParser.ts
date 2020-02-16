import { BodyCasing, getCaseConverter } from './helpers';
import { HttpResponse, RawHttpResponse } from './httpClient.types';
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
}: BodyParserOptions = {}) => {
  const caseConverter = getCaseConverter(bodyCasing);

  const bodyParsers: ContentTypeMap<BodyParserImplementation> = {
    TEXT: raw => raw.text(),
    JSON: raw => raw.text()
      .then(body => body ? caseConverter(JSON.parse(body)) : null)
      .catch((err) => {
        throw new Error(`Response body that was passed to bodyParser is invalid. ${err}`);
      }),
    URL_ENCODED: raw => raw.text()
      .then(urlDecode)
      .then(caseConverter),
  };

  return (rawResponse: RawHttpResponse): HttpResponse => {
    const contentType = (rawResponse.headers.get('content-type') || '')
      .split(';')[0]
      .trim()
      .toLowerCase();

    const parsedBody = switchContentType(contentType, bodyParsers, defaultParser);

    return {
      ...rawResponse,
      parsedBody: () => parsedBody(rawResponse),
    };
  };
};
