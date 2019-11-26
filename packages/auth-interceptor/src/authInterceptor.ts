import {
  HttpCode,
  HttpFetch,
  HttpInterceptorInterface,
  HttpResponse,
  HttpResponseError,
  isHttpResponseError,
  NormalizedHttpOptions
} from '@coolio/http';
import { AuthInterceptorOptions } from './authInterceptor.types';
import { SimpleQueue } from './simpleQueue';

export const hasUnauthorizedResponseCode = (response: HttpResponse) => response.status === HttpCode.UNAUTHORIZED;
export const isUnauthorizedError = (error: any) => isHttpResponseError(error) && hasUnauthorizedResponseCode(
  error.response);

export class AuthInterceptor implements HttpInterceptorInterface {
  private readonly queue = new SimpleQueue();

  constructor(private readonly options: AuthInterceptorOptions) {
  }

  get pendingRequestCount() {
    return this.queue.length;
  }

  async requestReauthorization() {
    try {
      await Promise.resolve(this.options.reauthorize());
    } catch (err) {
      this.queue.clean();
      await this.options.onAuthorizationFailure(err);
    }
  };

  onIntercept<Body>(request: HttpFetch<Body>, options: NormalizedHttpOptions): HttpFetch<Body> {
    if (this.options.canAuthorize(options)) {
      return () => this.queue.put(async () => {
        await Promise.resolve(this.options.setAuthorizationData(options));
        try {
          const response = await request();
          if (hasUnauthorizedResponseCode(response)) {
            throw new HttpResponseError(response);
          }
          return response;
        } catch (error) {
          if (!isUnauthorizedError(error)) {
            throw error;
          }
          await this.requestReauthorization();
          await Promise.resolve(this.options.setAuthorizationData(options));
          return await request();
        }
      });
    }
    // Don't queue anything if request is not "authorizable"
    return request;
  }
}

export const createAuthInterceptor = (options: AuthInterceptorOptions) => new AuthInterceptor(options);
