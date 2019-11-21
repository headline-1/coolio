import { BodyCasing, getCaseConverter } from './helpers';
import { ContentType, HttpResponse, RawHttpResponse } from './httpClient.types';
import { urlDecode } from './helpers/urlEncoding.helper';

export interface BodyParserOptions {
  bodyCasing?: BodyCasing;
}

export const bodyParser = ({
  bodyCasing,
}: BodyParserOptions = {}) => {
  const caseConverter = getCaseConverter(bodyCasing);
  return (rawResponse: RawHttpResponse): HttpResponse => {
    const contentType = (rawResponse.headers.get('content-type') || '')
      .split(';')[0]
      .trim()
      .toLowerCase();

    switch (contentType) {
      case ContentType.JSON:
      case ContentType.VND_JSON:
        return {
          ...rawResponse,
          parsedBody: () => rawResponse.text()
            .then(body => body ? caseConverter(JSON.parse(body)) : null)
            .catch((err) => {
              throw new Error(`Response body that was passed to bodyParser is invalid. ${err}`);
            }),
        };
      case ContentType.URL_ENCODED:
        return {
          ...rawResponse,
          parsedBody: () => rawResponse.text()
            .then(urlDecode)
            .then(caseConverter),
        };
      case ContentType.TEXT:
        return { ...rawResponse, parsedBody: () => rawResponse.text() };
      default:
        return { ...rawResponse, parsedBody: () => rawResponse.arrayBuffer() };
    }
  };
};
