import { ContentType, HttpClientConfig, NormalizedHttpOptions } from '@coolio/http';
import { Promisable } from './authInterceptor.types';

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
   * This function should persist the data argument, so it can be retrieved when
   * @param data response from OAuth2 refresh token endpoint
   */
  setAuthorizationData: (data: OAuth2RefreshTokenResponse) => Promisable;
  /**
   * This function should return data stored by `setAuthorizationData` function.
   * It should also return data initially set when logging in,
   * so that `access_token` and `token_type` can be used in requests.
   */
  getAuthorizationData: () => Promisable<OAuth2RefreshTokenResponse>;
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
  canAuthorize: (options: NormalizedHttpOptions) => Promisable<boolean>;
}
