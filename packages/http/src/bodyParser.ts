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
  return (response: HttpResponse) => {
    switch (response.headers.get('content-type')) {
      case ContentType.JSON:
      case ContentType.VND_JSON:
        return response.json()
          .then(caseConverter);
      case ContentType.URL_ENCODED:
        return response.text()
          .then(parseUrlEncodedBody)
          .then(caseConverter);
      case ContentType.TEXT:
        return response.text();
      default:
        return response;
    }
  };
};
