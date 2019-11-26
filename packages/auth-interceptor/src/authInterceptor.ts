import {
  HttpCode,
  HttpFetch,
  HttpInterceptorInterface,
  HttpResponse, HttpResponseError,
  isHttpResponseError,
  NormalizedHttpOptions
} from '@coolio/http';
import { AuthInterceptorOptions } from './authInterceptor.types';
import { SimpleQueue } from './simpleQueue';
import { AuthError } from './authError';

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

  onIntercept<Body>(request: HttpFetch<Body>, options: NormalizedHttpOptions): HttpFetch<Body> {
    if (this.options.canAuthorize(options)) {
      return () => this.queue.put(async () => {
        // Authorize a regular request
        await Promise.resolve(this.options.setAuthorizationData(options));
        // Perform request and handle failures with retry
        return await this.handleUnauthorizedResponse(request, async () => {
          // Authorize one more time, refreshing the token before
          await this.requestReauthorization();
          await Promise.resolve(this.options.setAuthorizationData(options));
          // Perform request and handle failures by throwing AuthorizationError
          return this.handleUnauthorizedResponse(request, error => this.handleAuthorizationError(error));
        });
      });
    }
    // Don't queue anything if request is not "authorizable"
    return request;
  }

  private async requestReauthorization() {
    try {
      await Promise.resolve(this.options.reauthorize());
    } catch (error) {
      this.handleAuthorizationError(error);
    }
  };

  /**
   * Called when:
   * - reauthorization fails,
   * - a second request fails after reauthorization
   */
  private async handleAuthorizationError(error: any): Promise<never> {
    const authError = new AuthError('Reauthorization failed or credentials are invalid.', error);
    this.queue.clean(authError);
    await this.options.onAuthorizationFailure(authError);
    throw authError;
  }

  private async handleUnauthorizedResponse<Body>(
    request: HttpFetch<Body>,
    onUnauthorizedResponse: (error: HttpResponseError) => Promise<HttpResponse<Body>>,
  ): Promise<HttpResponse<Body>> {
    try {
      const response = await request();
      if (hasUnauthorizedResponseCode(response)) {
        return await onUnauthorizedResponse(new HttpResponseError(response));
      }
      return response;
    } catch (error) {
      if (!isUnauthorizedError(error)) {
        throw error;
      }
      return await onUnauthorizedResponse(error);
    }
  }
}

export const createAuthInterceptor = (options: AuthInterceptorOptions) => new AuthInterceptor(options);
