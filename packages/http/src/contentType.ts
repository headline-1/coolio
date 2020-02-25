export enum ContentType {
  BINARY = 'application/octet-stream',
  JSON = 'application/json',
  MULTIPART_FORM = 'multipart/form-data',
  TEXT = 'text/plain',
  URL_ENCODED = 'application/x-www-form-urlencoded',
  VND_JSON = 'application/vnd.api+json',
}

export const ContentTypeRegex = {
  JSON: /^application\/(json|.+\+json)$/,
  MULTIPART: /^multipart\//,
  TEXT: /^text\//,
  URL_ENCODED: /^application\/x-www-form-urlencoded$/,
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
