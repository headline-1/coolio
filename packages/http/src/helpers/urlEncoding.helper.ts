import * as qs from 'qs';
import merge from 'lodash/merge';

export const urlDestruct = (url: string): {
  url: string;
  query: any;
} => {
  const [path, query] = url.split('?');
  return {
    url: path,
    query: query ? urlDecode(query) : {},
  };
};

export const urlCombine = (sourceUrl: string, sourceQuery?: object) => {
  const { url, query } = urlDestruct(sourceUrl);
  const queryString = urlEncode(merge(query, sourceQuery), {
    addQueryPrefix: false,
  });
  return url + (queryString ? `?${queryString}` : '');
};

export const urlEncode = (value: any, options?: qs.IStringifyOptions) => qs.stringify(value, {
  encodeValuesOnly: true,
  ...options,
});
export const urlDecode = <T = any>(value: string, options?: qs.IParseOptions): T => qs.parse(value, options);
