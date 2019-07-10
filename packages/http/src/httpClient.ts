import { HttpClientHelper } from './helpers';
import {
  BodySerializer,
  HttpHeaders,
  HttpInterceptor,
  HttpMethod,
  HttpOptions,
  HttpRequestHandler,
  HttpResponse, NormalizedHttpOptions,
  ResponseParser,
} from './httpClient.types';
import { bodySerializer } from './bodySerializer';

type HeadersProvider = (host: string) => Promise<HttpHeaders> | HttpHeaders;

export interface HttpClientConfig<T = HttpResponse> {
  requestHandler: HttpRequestHandler;
  defaultHeadersProvider?: HeadersProvider;
  responseParser?: ResponseParser<T>;
  bodySerializer?: BodySerializer;
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
  private readonly bodySerializer: BodySerializer;

  constructor(config: HttpClientConfig<T>) {
    this.handle = config.requestHandler;
    this.parser = config.responseParser || passthroughParser as any;
    this.bodySerializer = config.bodySerializer || bodySerializer();
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

    const normalizedOptions: NormalizedHttpOptions = {
      ...options,
      url,
      headers: sanitizeHeaders(),
      body: options && this.bodySerializer(options),
    };

    const chain = this.interceptors.reduce(
      (req, interceptor) => interceptor(req, normalizedOptions),
      () => this.handle(normalizedOptions).then(response => this.parser(response) as HttpResponse<Body>),
    );
    return chain();
  }

}
