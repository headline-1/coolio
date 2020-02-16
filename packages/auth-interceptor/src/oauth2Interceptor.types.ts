import { ContentType, HttpClientConfig, NormalizedHttpOptions } from '@coolio/http';
import { Promisable } from './promisable';
import { AuthStorage } from './storage/authStorage.types';
import { AuthError } from './authError';

export interface OAuth2TokenResponse {
  accessToken: string;
  tokenType: string;
  idToken?: string;
  expires?: string;
  expiresIn?: string;
  refreshToken: string;
  scope?: string;
}

export interface OAuth2InterceptorOptions {
  oauth: {
    /**
     * Options that are used in a HttpClient underneath, can be used for customization.
     * This HttpClient is used to call OAuth refresh token endpoint.
     */
    httpClientOptions: HttpClientConfig;

    /**
     * Content-Type used for refreshing token
     */
    contentType?: ContentType;

    /**
     * OAuth2 Client Id
     */
    clientId: string;

    /**
     * OAuth2 Client Secret
     */
    clientSecret?: string;

    /**
     * API endpoint used for refreshing token
     */
    refreshTokenUrl: string;
  };

  /**
   * Data storage for OAuth credentials. Uses InMemoryAuthStorage by default.
   * One can implement their own storage, i.e. backed by Redux or LocalStorage.
   */
  authStorage: AuthStorage<OAuth2TokenResponse>;

  /**
   * This function is called when:
   * - authorize() function throws an error,
   * - a second call to an api endpoint results in 401.
   */
  onAuthorizationFailure: (err: AuthError) => Promisable;

  /**
   * Determine if request should be processed, by checking request's options (i.e. check for a domain match)
   * @param options Request options
   */
  canAuthorize: (options: NormalizedHttpOptions) => boolean;
}
