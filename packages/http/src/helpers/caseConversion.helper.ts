import { isArray, isPlainObject } from 'lodash';

export const splitWords = (text: string): string[] => {
  return text.split(/(?:[ _-]+)|(?=[A-Z]+)/);
};

export const deepKeyMap = (object: any, mapper: (key: string) => string): any => {
  if (isArray(object)) {
    return object.map(value => deepKeyMap(value, mapper));
  }
  if (isPlainObject(object)) {
    const result = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        result[mapper(key)] = deepKeyMap(object[key], mapper);
      }
    }
    return result;
  }
  return object;
};

export const toCamelCase = (object: any) => deepKeyMap(object, key => splitWords(key)
  .map((word, index) => index > 0
    ? word[0].toUpperCase() + word.slice(1).toLowerCase()
    : word.toLowerCase())
  .join(''));

export const toPascalCase = (object: any) => deepKeyMap(object, key => splitWords(key)
  .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(''));

export const toSnakeCase = (object: any) => deepKeyMap(object, key => splitWords(key)
  .map(word => word.toLowerCase())
  .join('_'));

export const toKebabCase = (object: any) => deepKeyMap(object, key => splitWords(key)
  .map(word => word.toLowerCase())
  .join('-'));

export const noConversion = (object: any) => object;
