import isString from 'lodash/isString';
import { HttpClientHelper } from './helpers';
import {
  HttpHeaders,
  HttpInterceptor,
  HttpMethod,
  HttpOptions,
  HttpRequestHandler,
  HttpResponse,
  ResponseParser,
} from './httpClient.types';

type HeadersProvider = (host: string) => Promise<HttpHeaders> | HttpHeaders;

export interface HttpClientConfig<T = HttpResponse> {
  requestHandler: HttpRequestHandler;
  defaultHeadersProvider?: HeadersProvider;
  parser?: ResponseParser<T>;
}

const passthroughParser = (response: HttpResponse) => response;

export class HttpClient<T = HttpResponse> {
  private readonly handle: HttpRequestHandler;
  private readonly defaultHeadersProvider?: HeadersProvider;
  private readonly interceptors: HttpInterceptor[] = [];
  private readonly parser: ResponseParser<T>;

  constructor(config: HttpClientConfig<T>) {
    this.handle = config.requestHandler;
    this.parser = config.parser || passthroughParser as any;
    this.defaultHeadersProvider = config.defaultHeadersProvider;
  }

  addInterceptor(interceptor: HttpInterceptor) {
    this.interceptors.push(interceptor);
    return this;
  }

  get = <Result = Response>(uri: string, options: HttpOptions) => this.request<Result>(uri, {
    ...options,
    body: undefined,
    method: HttpMethod.GET,
  });

  post = <Result = Response>(uri: string, options: HttpOptions) => this.request<Result>(uri, {
    ...options,
    method: HttpMethod.POST,
  });

  put = <Result = Response>(uri: string, options: HttpOptions) => this.request<Result>(uri, {
    ...options,
    method: HttpMethod.PUT,
  });

  patch = <Result = Response>(uri: string, options: HttpOptions) => this.request<Result>(uri, {
    ...options,
    method: HttpMethod.PATCH,
  });

  remove = <Result = Response>(uri: string, options: HttpOptions) => this.request<Result>(uri, {
    ...options,
    body: undefined,
    method: HttpMethod.DELETE,
  });

  request = <Result = Response>(url: string, options: HttpOptions): Promise<Result> => {
    const headers = HttpClientHelper.sanitizeHeaders({
      ...this.defaultHeadersProvider && this.defaultHeadersProvider(new URL(url).hostname),
      ...options.headers,
    });
    const chain = this.interceptors.reduce(
      (req, interceptor) => interceptor(req),
      () => this.handle({
        ...options,
        url,
        headers,
        // TODO extract body serialization out and add support for: form, urlencoded string & typed arrays
        body: isString(options.body) ? options.body : JSON.stringify(options.body),
      }),
    );
    return chain().then(response => this.parser(response) as any);
  };

}
