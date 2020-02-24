export enum ContentType {
  TEXT = 'text/plain',
  JSON = 'application/json',
  VND_JSON = 'application/vnd.api+json',
  MULTIPART_FORM = 'multipart/form-data',
  URL_ENCODED = 'application/x-www-form-urlencoded',
}

export const ContentTypeRegex = {
  TEXT: /^text\//,
  JSON: /^application\/(json|.+\+json)$/,
  URL_ENCODED: /^application\/x-www-form-urlencoded$/,
  MULTIPART: /^multipart\//,
};

export type ContentTypeMap<T> = Record<keyof typeof ContentTypeRegex, T>;

export function switchContentType<T>(contentType: string, map: ContentTypeMap<T>, defaultResult: T): T;
export function switchContentType<T>(contentType: string, map: ContentTypeMap<T>): T | undefined;
export function switchContentType<T>(
  contentType: string,
  map: ContentTypeMap<T>,
  defaultResult?: T,
) {
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      if (ContentTypeRegex[key].test(contentType)) {
        return map[key];
      }
    }
  }
  return defaultResult;
}
