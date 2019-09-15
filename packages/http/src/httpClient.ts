import { HttpClientHelper } from './helpers';
import {
  BodySerializer,
  HttpHeaders,
  HttpInterceptor,
  HttpMethod,
  HttpOptions,
  HttpRequestHandler,
  HttpResponse,
  NormalizedHttpOptions,
  ResponseParser,
} from './httpClient.types';
import { bodySerializer } from './bodySerializer';
import { cacheParsedBody } from './helpers/parsedBodyCache.helper';
import { urlCombine, urlDestruct } from './helpers/urlEncoding.helper';

type HeadersProvider = (host: string) => Promise<HttpHeaders> | HttpHeaders;

export interface HttpClientConfig<T = HttpResponse> {
  requestHandler: HttpRequestHandler;
  defaultHeadersProvider?: HeadersProvider;
  responseParser?: ResponseParser<T>;
  bodySerializer?: BodySerializer;
  baseUrl?: string;
}

const passthroughParser = (response: HttpResponse) => {
  response.parsedBody = response.parsedBody || (() => response.arrayBuffer());
  return response;
};

export class HttpClient<T = unknown> {
  private readonly handle: HttpRequestHandler;
  private readonly defaultHeadersProvider?: HeadersProvider;
  private readonly interceptors: HttpInterceptor[] = [];
  private readonly responseParser: ResponseParser<T>;
  private readonly bodySerializer: BodySerializer;
  private readonly baseUrl?: string;

  constructor(config: HttpClientConfig<T>) {
    this.handle = config.requestHandler;
    this.responseParser = config.responseParser || passthroughParser as any;
    this.bodySerializer = config.bodySerializer || bodySerializer();
    this.defaultHeadersProvider = config.defaultHeadersProvider;
    this.baseUrl = config.baseUrl ? config.baseUrl.replace(/\/+$/, '') : undefined;
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
    if (this.baseUrl && url.startsWith('/')) {
      url = `${this.baseUrl}${url}`;
    }

    const sanitizeHeaders = () => HttpClientHelper.sanitizeHeaders({
      ...this.defaultHeadersProvider && this.defaultHeadersProvider(
        HttpClientHelper.getHostname(url),
      ),
      ...(options && options.headers),
    });

    const urlBreakdown = urlDestruct(urlCombine(url, options && options.query));

    const normalizedOptions: NormalizedHttpOptions = {
      ...options,
      url: urlBreakdown.url,
      query: urlBreakdown.query,
      headers: sanitizeHeaders(),
      body: options && options.body as any,
    };

    normalizedOptions.body = this.bodySerializer(normalizedOptions);

    const chain = this.interceptors.reduce(
      (req, interceptor) => interceptor(req, normalizedOptions),
      async () => {
        // In the end, even if interceptors modify both URL & Query, it gets reconciled here
        normalizedOptions.url = urlCombine(normalizedOptions.url, normalizedOptions.query);
        const response = await this.handle(normalizedOptions);
        const parsedResponse = this.responseParser(response) as HttpResponse<Body>;
        parsedResponse.parsedBody = cacheParsedBody(parsedResponse.parsedBody);
        return parsedResponse;
      },
    );
    return chain();
  }

}
