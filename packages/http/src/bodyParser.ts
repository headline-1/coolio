import { BodyCasing, getCaseConverter } from './helpers';
import { ContentType, HttpResponse } from './httpClient.types';
import { urlDecode } from './helpers/urlEncoding.helper';

export interface BodyParserOptions {
  bodyCasing?: BodyCasing;
}

export const bodyParser = ({
  bodyCasing,
}: BodyParserOptions = {}) => {
  const caseConverter = getCaseConverter(bodyCasing);
  return (response: HttpResponse): HttpResponse => {
    const contentType = (response.headers.get('content-type') || '')
      .split(';')[0]
      .trim()
      .toLowerCase();

    switch (contentType) {
      case ContentType.JSON:
      case ContentType.VND_JSON:
        response.parsedBody = () => response.text()
          .then(body => body ? caseConverter(JSON.parse(body)) : null)
          .catch((err) => {
            throw new Error(`Response body that was passed to bodyParser is invalid. ${err}`);
          });
        break;
      case ContentType.URL_ENCODED:
        response.parsedBody = () => response.text()
          .then(urlDecode)
          .then(caseConverter);
        break;
      case ContentType.TEXT:
        response.parsedBody = () => response.text();
        break;
      default:
        response.parsedBody = () => response.arrayBuffer();
        break;
    }
    return response;
  };
};
