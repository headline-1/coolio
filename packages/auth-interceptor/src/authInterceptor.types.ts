import { HttpInterceptor, NormalizedHttpOptions } from '@coolio/http';
import { Promisable } from './promisable';

export interface AuthInterceptorOptions {
  /**
   * Obtain authorization data. At this point previous token has expired or
   * Unauthorized response status code has been received. You can call refresh token endpoint.
   */
  reauthorize: () => Promisable;

  /**
   * Insert authorization data to the request.
   * @param data Authorization data obtained earlier by {#authorize}
   * @param options Request options
   */
  setAuthorizationData: (options: NormalizedHttpOptions) => Promisable;

  /**
   * This function is called when:
   * - authorize() function throws an error,
   * - a second call to an api endpoint results in 401.
   */
  onAuthorizationFailure: (err: Error) => Promisable;

  /**
   * Determine if request should be processed, by checking request's options (i.e. check for a domain match)
   * @param options Request options
   */
  canAuthorize: (options: NormalizedHttpOptions) => boolean;
}
