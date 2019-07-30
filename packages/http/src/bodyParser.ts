import * as qs from 'qs';
import { BodyCasing, getCaseConverter } from './helpers';
import { ContentType, HttpResponse } from './httpClient.types';

export interface BodyParserOptions {
  bodyCasing?: BodyCasing;
}

const parseUrlEncodedBody = (body: string) => qs.parse(body);

export const bodyParser = ({
  bodyCasing,
}: BodyParserOptions = {}) => {
  const caseConverter = getCaseConverter(bodyCasing);
  return (response: HttpResponse): HttpResponse => {
    const contentType = (response.headers.get('content-type') || '')
      .split(';')
      .map(type => type.trim().toLowerCase());

    const contentLength = parseInt(response.headers.get('content-length')!, 10) || 0;

    for (const type of contentType) {
      if (response.parsedBody) {
        return response;
      }
      switch (type) {
        case ContentType.JSON:
        case ContentType.VND_JSON:
          response.parsedBody = () => contentLength
            ? response.json()
              .catch((err) => new Error(`Response body that was passed to bodyParser is invalid. ${err}`))
              .then(caseConverter)
            : Promise.resolve(null);
          break;
        case ContentType.URL_ENCODED:
          response.parsedBody = () => contentLength
            ? response.text()
              .then(parseUrlEncodedBody)
              .then(caseConverter)
            : Promise.resolve({});
          break;
        case ContentType.TEXT:
          response.parsedBody = () => response.text();
          break;
        default:
          response.parsedBody = () => response.arrayBuffer();
          break;
      }
    }
    return response;
  };
};
