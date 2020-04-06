import { HttpResponseHeaders } from './httpResponseHeaders';
import TypedArray = NodeJS.TypedArray;

export interface RawHttpResponse {
  readonly headers: HttpResponseHeaders;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly url: string;

  arrayBuffer(): Promise<ArrayBuffer>;

  text(): Promise<string>;

  abort(): void;
}

export interface HttpResponse<T = any> extends RawHttpResponse {
  parsedBody(): Promise<T>;
}

export type BodyParser<T = unknown> = (response: RawHttpResponse) => HttpResponse<T>;

export type BodySerializer = (request: HttpOptions) => Promise<NormalizedHttpBody>;

export type HttpFetch<Body> = () => Promise<HttpResponse<Body>>;

export type HttpBody = object | TypedArray | string;

export type HttpHeaders = Record<string, string | number | boolean | undefined | null>;

export interface HttpInterceptorInterface {
  onIntercept<Body>(request: HttpFetch<Body>, options: NormalizedHttpOptions): HttpFetch<Body>;
}

export type HttpInterceptorFunction = <Body>(
  request: HttpFetch<Body>,
  options: NormalizedHttpOptions,
) => HttpFetch<Body>;

export type HttpInterceptor = HttpInterceptorFunction | HttpInterceptorInterface;

export enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';

export interface HttpRequestOptions {
  method: HttpMethod;
  query?: object;
  mode?: RequestMode;
  headers?: HttpHeaders;
  body?: HttpBody;
  bypassResponseHandler?: boolean;
  timeout?: number;
}

export type HttpOptions = Partial<HttpRequestOptions>;

export type NormalizedHttpBody = TypedArray | string | undefined;

export interface NormalizedHttpOptions {
  url: string;
  query: any;
  body?: NormalizedHttpBody;
  method: HttpMethod;
  headers: Record<string, string>;
  mode?: RequestMode;
  bypassResponseHandler?: boolean;
  timeout: number;
}

export type HttpRequestHandler = (requestOptions: NormalizedHttpOptions) => Promise<RawHttpResponse>;
