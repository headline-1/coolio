import { ContentType, HttpClientConfig, NormalizedHttpOptions } from '@coolio/http';
import { Promisable } from './promisable';
import { AuthStorage } from './storage/authStorage.types';

export interface OAuth2RefreshTokenResponse {
  accessToken: string;
  tokenType: string;
  expires?: string;
  expiresIn?: string;
  refreshToken: string;
  scope?: string;
}

export interface OAuth2InterceptorOptions {
  httpClientOptions?: HttpClientConfig;

  /**
   * OAuth2 Client Id
   */
  clientId: string;

  /**
   * OAuth2 Client Secret
   */
  clientSecret?: string;

  /**
   * Content-Type used for refreshing token
   */
  contentType?: ContentType;

  /**
   * API endpoint used for refreshing token
   */
  refreshTokenUrl: string;

  /**
   * Data storage for OAuth credentials. Uses InMemoryAuthStorage by default.
   * One can implement their own storage, i.e. backed by Redux or LocalStorage.
   */
  authStorage?: AuthStorage<OAuth2RefreshTokenResponse>;

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
