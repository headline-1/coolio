import * as qs from 'qs';
import { noConversion, toCamelCase, toKebabCase, toPascalCase, toSnakeCase } from './helpers/caseConversion.helper';
import { ContentType, HttpResponse } from './httpClient.types';

export enum BodyCasing {
  CAMEL_CASE,
  SNAKE_CASE,
  PASCAL_CASE,
  KEBAB_CASE,
}

const getCaseConverter = (bodyCasing?: BodyCasing) => {
  switch (bodyCasing) {
    case BodyCasing.CAMEL_CASE:
      return toCamelCase;
    case BodyCasing.PASCAL_CASE:
      return toPascalCase;
    case BodyCasing.SNAKE_CASE:
      return toSnakeCase;
    case BodyCasing.KEBAB_CASE:
      return toKebabCase;
    default:
      return noConversion;
  }
};

export interface BodyParserOptions {
  bodyCasing?: BodyCasing;
}

const parseUrlEncodedBody = (body: string) => qs.parse(body);

export const bodyParser = ({
  bodyCasing,
}: BodyParserOptions) => {
  const caseConverter = getCaseConverter(bodyCasing);
  return (response: HttpResponse): HttpResponse => {
    const contentType = (response.headers.get('content-type') || '')
      .split(';')
      .map(type => type.trim().toLowerCase());

    for (const type of contentType) {
      if (response.parsedBody) {
        return response;
      }
      switch (type) {
        case ContentType.JSON:
        case ContentType.VND_JSON:
          response.parsedBody = () => response.json()
            .then(caseConverter);
          break;
        case ContentType.URL_ENCODED:
          response.parsedBody = () => response.text()
            .then(parseUrlEncodedBody)
            .then(caseConverter);
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
