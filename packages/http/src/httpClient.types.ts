import { HttpCode } from './httpCodes';
import TypedArray = NodeJS.TypedArray;

export enum ContentType {
  TEXT = 'text/plain',
  JSON = 'application/json',
  VND_JSON = 'application/vnd.api+json',
  URL_ENCODED = 'application/x-www-form-urlencoded',
}

export class HttpError<T = any> extends Error {
  constructor(
    public readonly message: string,
    public readonly status?: HttpCode,
    public readonly response?: T,
  ) {
    super(`HttpError: ${message}`);
  }
}

export interface HttpResponse extends Response {
}

export type ResponseParser<T> = (response: HttpResponse) => T;

export type HttpFetch<Body> = () => Promise<HttpResponse>;

export type HttpBody = object | TypedArray | string;

export type HttpHeaders = Record<string, string | number | boolean | undefined | null>;

export type HttpInterceptor = <Body>(request: HttpFetch<Body>) => HttpFetch<Body>;

export enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';

export interface HttpOptions {
  mode?: RequestMode;
  method?: HttpMethod;
  headers?: HttpHeaders;
  body?: HttpBody;
  bypassResponseHandler?: boolean;
}

export interface NormalizedHttpOptions {
  url: string;
  body?: string | TypedArray;
  method?: HttpMethod;
  headers?: Record<string, string>;
  mode?: RequestMode;
  bypassResponseHandler?: boolean;
}

export type HttpRequestHandler = (requestOptions: NormalizedHttpOptions) => Promise<Response>;
