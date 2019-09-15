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

export interface HttpResponse<T = any> extends Response {
  parsedBody: () => Promise<T>;
}

export type ResponseParser<T = unknown> = (response: HttpResponse) => HttpResponse<T>;

export type BodySerializer = (request: HttpOptions) => NormalizedHttpBody;

export type HttpFetch<Body> = () => Promise<HttpResponse<Body>>;

export type HttpBody = object | TypedArray | string;

export type HttpHeaders = Record<string, string | number | boolean | undefined | null>;

export type HttpInterceptor = <Body>(request: HttpFetch<Body>, options: NormalizedHttpOptions) => HttpFetch<Body>;

export enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';

export interface HttpOptions {
  query?: object;
  mode?: RequestMode;
  method?: HttpMethod;
  headers?: HttpHeaders;
  body?: HttpBody;
  bypassResponseHandler?: boolean;
}

export type NormalizedHttpBody = string | TypedArray | undefined;

export interface NormalizedHttpOptions {
  url: string;
  query: any;
  body?: NormalizedHttpBody;
  method?: HttpMethod;
  headers?: Record<string, string>;
  mode?: RequestMode;
  bypassResponseHandler?: boolean;
}

export type HttpRequestHandler = (requestOptions: NormalizedHttpOptions) => Promise<HttpResponse>;
