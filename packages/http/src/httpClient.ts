import * as qs from 'qs';
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
} from './httpClient.types';
import { bodySerializer } from './bodySerializer';
import { cacheParsedBody } from './helpers/parsedBodyCache.helper';
import { urlCombine, urlDestruct } from './helpers/urlEncoding.helper';
import { sanitizeHeaders } from './helpers';
import { bodyParser } from './bodyParser';

/**
 * Default request timeout - 5 minutes.
 */
export const DEFAULT_REQUEST_TIMEOUT_MS = 5 * 60 * 1000;

/**
 * A set of configuration options, which allows {@link HttpClient} to perform requests and process responses.
 *
 * @typeparam T Common body shape defined by {@link bodyParser}.
 */
export interface HttpClientConfig<T = HttpResponse> {
  /**
   * An implementation of request handler, which handles "low-level" HTTP communication.
   * Result of executing a request via RequestHandler is a normalized object,
   * which can be further processed by interceptors and HttpClient.
   *
   * - For Node.js environment, use {@link httpRequestHandler}
   * - For browser environments, use {@link fetchRequestHandler}
   * - For React Native and any other environment, use {@link xhrRequestHandler}
   */
  requestHandler: HttpRequestHandler;

  /**
   * Headers that will be passed to all requests.
   * To add headers dynamically, you can use an interceptor instead.
   */
  headers?: HttpHeaders;

  /**
   * A utility that parses and normalizes body of a response received from server.
   * Can be used to decode JSON object, URL-encoded body or plain text.
   * Built-in {@link bodyParser} supports case-conversion.
   */
  bodyParser?: BodyParser<T>;

  /**
   * A utility that parses and normalizes body of a request sent to server.
   * Can be used to encode JSON object, URL-encoded body or plain text.
   * Built-in {@link bodySerializer} supports case-conversion.
   */
  bodySerializer?: BodySerializer;

  /**
   * URL that is applied to all requests without specified protocol and domain.
   */
  baseUrl?: string;

  /**
   * Allow to parse query options in a different way than the standard one.
   */
  queryParserOptions?: qs.IParseOptions;

  /**
   * Allow to serialize query options in a different way than the standard one.
   */
  querySerializerOptions?: qs.IStringifyOptions;

  /**
   * Standard timeout, triggered when server does not respond with headers within specified period of time.
   *
   * @default {@link DEFAULT_REQUEST_TIMEOUT_MS}
   */
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

/**
 * Base class in Coolio http package, which allows to perform API calls.
 *
 * @typeparam T Common body shape defined by bodyParser passed in {@link HttpClientConfig}.
 */
export class HttpClient<T = unknown> {
  private readonly handle: HttpRequestHandler;
  private readonly headers?: HttpHeaders;
  private readonly interceptors: HttpInterceptor[] = [];
  private readonly bodyParser: BodyParser<T>;
  private readonly bodySerializer: BodySerializer;
  private readonly queryParserOptions?: qs.IParseOptions;
  private readonly querySerializerOptions?: qs.IStringifyOptions;
  private readonly baseUrl?: string;
  private readonly defaultRequestTimeout: number;

  constructor(config: HttpClientConfig<T>) {
    this.handle = config.requestHandler;
    this.bodyParser = config.bodyParser || bodyParser();
    this.bodySerializer = config.bodySerializer || bodySerializer();
    this.headers = config.headers;
    this.baseUrl = config.baseUrl ? config.baseUrl.replace(/\/+$/, '') : undefined;
    this.queryParserOptions = config.queryParserOptions;
    this.querySerializerOptions = config.querySerializerOptions;
    this.defaultRequestTimeout = config.requestTimeout || DEFAULT_REQUEST_TIMEOUT_MS;
  }

  /**
   * Adds an interceptor to the client. Interceptor can be written either as class or as a function,
   * which may mutate request options and post-process response from server.
   * Multiple interceptors can be added to a single HttpClient. They can perform as:
   * - cache
   * - error handler
   * - authorizer
   * - logger
   * - auto-retry
   * - redirection handler
   *
   * @param interceptor Interceptor that will process every request/response in this HttpClient.
   */
  addInterceptor = (interceptor: HttpInterceptor) => {
    this.interceptors.push(interceptor);
    return this;
  };

  /**
   * Performs a GET request.
   *
   * @param uri Address of HTTP endpoint
   * @param options Additional {@link HttpOptions} passed with request
   */
  get = <Body extends T = any>(uri: string, options?: HttpOptions) => {
    return this.request<Body>(uri, {
      ...options,
      body: undefined,
      method: HttpMethod.GET,
    });
  };

  /**
   * Performs a POST request.
   *
   * @param uri Address of HTTP endpoint
   * @param options Additional {@link HttpOptions} passed with request
   */
  post = <Body extends T = any>(uri: string, options?: HttpOptions) => {
    return this.request<Body>(uri, {
      ...options,
      method: HttpMethod.POST,
    });
  };

  /**
   * Performs a PUT request.
   *
   * @param uri Address of HTTP endpoint
   * @param options Additional {@link HttpOptions} passed with request
   */
  put = <Body extends T = any>(uri: string, options?: HttpOptions) => {
    return this.request<Body>(uri, {
      ...options,
      method: HttpMethod.PUT,
    });
  };

  /**
   * Performs a PATCH request.
   *
   * @param uri Address of HTTP endpoint
   * @param options Additional {@link HttpOptions} passed with request
   */
  patch = <Body extends T = any>(uri: string, options?: HttpOptions) => {
    return this.request<Body>(uri, {
      ...options,
      method: HttpMethod.PATCH,
    });
  };

  /**
   * Performs a DELETE request.
   *
   * @param uri Address of HTTP endpoint
   * @param options Additional {@link HttpOptions} passed with request
   */
  delete = <Body extends T = any>(uri: string, options?: HttpOptions) => {
    return this.request<Body>(uri, {
      ...options,
      body: undefined,
      method: HttpMethod.DELETE,
    });
  };

  /**
   * Performs a DELETE request.
   * @deprecated Use delete instead of remove, since it matches HTTP request method.
   *
   * @param uri Address of HTTP endpoint
   * @param options Additional {@link HttpOptions} passed with request
   */
  remove = <Body extends T = any>(uri: string, options?: HttpOptions) => this.delete(uri, options);

  async request<Body extends T>(url: string, options: HttpRequestOptions): Promise<HttpResponse<Body>> {
    if (this.baseUrl && url.startsWith('/')) {
      url = `${this.baseUrl}${url}`;
    }

    const urlBreakdown = urlDestruct(urlCombine(url, options && options.query), this.queryParserOptions);

    const normalizedOptions: NormalizedHttpOptions = {
      ...options,
      timeout: options.timeout || this.defaultRequestTimeout,
      method: options.method,
      url: urlBreakdown.url,
      query: urlBreakdown.query,
      headers: sanitizeHeaders(this.headers, options && options.headers),
      body: options && options.body as any,
    };

    normalizedOptions.body = await this.bodySerializer(normalizedOptions);

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
