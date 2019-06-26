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
import { serializeBody } from './bodySerializer';

type HeadersProvider = (host: string) => Promise<HttpHeaders> | HttpHeaders;

export interface HttpClientConfig<T = HttpResponse> {
  requestHandler: HttpRequestHandler;
  defaultHeadersProvider?: HeadersProvider;
  parser?: ResponseParser<T>;
}

const passthroughParser = (response: HttpResponse) => {
  response.parsedBody = response.parsedBody || (() => response.arrayBuffer());
  return response;
};

export class HttpClient<T = unknown> {
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

  get<Body extends T = any>(uri: string, options?: HttpOptions) {
    return this.request<Body>(uri, {
      ...options,
      body: undefined,
      method: HttpMethod.GET,
    });
  }

  post<Body extends T = any>(uri: string, options?: HttpOptions) {
    return this.request<Body>(uri, {
      ...options,
      method: HttpMethod.POST,
    });
  }

  put<Body extends T = any>(uri: string, options?: HttpOptions) {
    return this.request<Body>(uri, {
      ...options,
      method: HttpMethod.PUT,
    });
  }

  patch<Body extends T = any>(uri: string, options?: HttpOptions) {
    return this.request<Body>(uri, {
      ...options,
      method: HttpMethod.PATCH,
    });
  }

  remove<Body extends T = any>(uri: string, options?: HttpOptions) {
    return this.request<Body>(uri, {
      ...options,
      body: undefined,
      method: HttpMethod.DELETE,
    });
  }

  request<Body extends T>(url: string, options?: HttpOptions): Promise<HttpResponse<Body>> {
    const sanitizeHeaders = () => HttpClientHelper.sanitizeHeaders({
      ...this.defaultHeadersProvider && this.defaultHeadersProvider(
        HttpClientHelper.getHostname(url),
      ),
      ...(options && options.headers),
    });
    const chain = this.interceptors.reduce(
      (req, interceptor) => interceptor(req),
      () => this.handle({
        ...options,
        url,
        headers: sanitizeHeaders(),
        body: serializeBody(options && options.body),
      }).then(response => this.parser(response) as HttpResponse<Body>),
    );
    return chain();
  }

}
