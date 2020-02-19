import * as qs from 'qs';
import { HttpClientHelper } from './helpers';
import {
  BodyParser,
  BodySerializer,
  HttpFetch,
  HttpHeaders,
  HttpInterceptor,
  HttpInterceptorInterface,
  HttpMethod,
  HttpOptions,
  HttpRequestHandler,
  HttpRequestOptions,
  HttpResponse,
  NormalizedHttpOptions,
  RawHttpResponse,
} from './httpClient.types';
import { bodySerializer } from './bodySerializer';
import { cacheParsedBody } from './helpers/parsedBodyCache.helper';
import { urlCombine, urlDestruct } from './helpers/urlEncoding.helper';

export const DEFAULT_REQUEST_TIMEOUT_MS = 5 * 60 * 1000;

type HeadersProvider = (host: string) => Promise<HttpHeaders> | HttpHeaders;

export interface HttpClientConfig<T = HttpResponse> {
  requestHandler: HttpRequestHandler;
  defaultHeadersProvider?: HeadersProvider;
  bodyParser?: BodyParser<T>;
  bodySerializer?: BodySerializer;
  baseUrl?: string;
  followRedirections?: boolean;
  queryParserOptions?: qs.IParseOptions;
  querySerializerOptions?: qs.IStringifyOptions;
  requestTimeout?: number;
}

const isHttpInterceptorInterface = (interceptor: HttpInterceptor): interceptor is HttpInterceptorInterface => {
  const method = (interceptor as any).onIntercept;
  return method !== null && method !== undefined;
};

const useInterceptor = (normalizedOptions: NormalizedHttpOptions) => <Body>(
  req: HttpFetch<Body>,
  interceptor: HttpInterceptor,
) => {
  if (isHttpInterceptorInterface(interceptor)) {
    return interceptor.onIntercept(req, normalizedOptions);
  }
  return interceptor(req, normalizedOptions);
};

const passthroughParser: BodyParser<any> = (response: RawHttpResponse) => ({
  ...response,
  parsedBody: (response as any).parsedBody || (() => response.arrayBuffer()),
});

export class HttpClient<T = unknown> {
  private readonly handle: HttpRequestHandler;
  private readonly defaultHeadersProvider?: HeadersProvider;
  private readonly interceptors: HttpInterceptor[] = [];
  private readonly bodyParser: BodyParser<T>;
  private readonly bodySerializer: BodySerializer;
  private readonly queryParserOptions?: qs.IParseOptions;
  private readonly querySerializerOptions?: qs.IStringifyOptions;
  private readonly followRedirections: boolean;
  private readonly baseUrl?: string;
  private readonly defaultRequestTimeout: number;

  constructor(config: HttpClientConfig<T>) {
    this.handle = config.requestHandler;
    this.bodyParser = config.bodyParser || passthroughParser as any;
    this.bodySerializer = config.bodySerializer || bodySerializer();
    this.defaultHeadersProvider = config.defaultHeadersProvider;
    this.baseUrl = config.baseUrl ? config.baseUrl.replace(/\/+$/, '') : undefined;
    this.followRedirections = config.followRedirections ?? true;
    this.queryParserOptions = config.queryParserOptions;
    this.querySerializerOptions = config.querySerializerOptions;
    this.defaultRequestTimeout = config.requestTimeout || DEFAULT_REQUEST_TIMEOUT_MS;
  }

  addInterceptor = (interceptor: HttpInterceptor) => {
    this.interceptors.push(interceptor);
    return this;
  };

  get = <Body extends T = any>(uri: string, options?: HttpOptions) => {
    return this.request<Body>(uri, {
      ...options,
      body: undefined,
      method: HttpMethod.GET,
    });
  };

  post = <Body extends T = any>(uri: string, options?: HttpOptions) => {
    return this.request<Body>(uri, {
      ...options,
      method: HttpMethod.POST,
    });
  };

  put = <Body extends T = any>(uri: string, options?: HttpOptions) => {
    return this.request<Body>(uri, {
      ...options,
      method: HttpMethod.PUT,
    });
  };

  patch = <Body extends T = any>(uri: string, options?: HttpOptions) => {
    return this.request<Body>(uri, {
      ...options,
      method: HttpMethod.PATCH,
    });
  };

  remove = <Body extends T = any>(uri: string, options?: HttpOptions) => {
    return this.request<Body>(uri, {
      ...options,
      body: undefined,
      method: HttpMethod.DELETE,
    });
  };

  request<Body extends T>(url: string, options: HttpRequestOptions): Promise<HttpResponse<Body>> {
    if (this.baseUrl && url.startsWith('/')) {
      url = `${this.baseUrl}${url}`;
    }

    const headers = HttpClientHelper.sanitizeHeaders({
      ...this.defaultHeadersProvider && this.defaultHeadersProvider(
        HttpClientHelper.getHostname(url),
      ),
      ...(options && options.headers),
    });

    const urlBreakdown = urlDestruct(urlCombine(url, options && options.query), this.queryParserOptions);

    const normalizedOptions: NormalizedHttpOptions = {
      ...options,
      timeout: options.timeout || this.defaultRequestTimeout,
      method: options.method,
      url: urlBreakdown.url,
      query: urlBreakdown.query,
      headers,
      body: options && options.body as any,
    };

    normalizedOptions.body = this.bodySerializer(normalizedOptions);

    const chain = this.interceptors.reduce(
      useInterceptor(normalizedOptions),
      async () => {
        // In the end, even if interceptors modify both URL & Query, it gets reconciled here
        normalizedOptions.url = urlCombine(normalizedOptions.url, normalizedOptions.query, this.querySerializerOptions);
        const response = await this.handle(normalizedOptions);
        const parsedResponse = this.bodyParser(response) as HttpResponse<Body>;
        parsedResponse.parsedBody = cacheParsedBody(parsedResponse.parsedBody);
        return parsedResponse;
      },
    );
    return chain();
  }

}
