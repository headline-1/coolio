import {
  BodyCasing,
  bodyParser,
  bodySerializer,
  ContentType,
  fetchRequestHandler,
  HttpClient,
  NormalizedHttpOptions
} from '@coolio/http';
import { createAuthInterceptor } from './authInterceptor';
import { OAuth2InterceptorOptions, OAuth2RefreshTokenResponse } from './oauth2Interceptor.types';
import { InMemoryAuthStorage } from './storage/inMemory.authStorage';
import { AuthError } from './authError';

export const createOAuth2Interceptor = ({
  clientId,
  clientSecret,
  contentType,
  authStorage = new InMemoryAuthStorage(),
  canAuthorize,
  refreshTokenUrl,
  onAuthorizationFailure,
  httpClientOptions,
}: OAuth2InterceptorOptions) => {
  const authHttpClient = new HttpClient({
    requestHandler: fetchRequestHandler(),
    bodyParser: bodyParser({ bodyCasing: BodyCasing.CAMEL_CASE }),
    bodySerializer: bodySerializer({ bodyCasing: BodyCasing.SNAKE_CASE }),
    ...httpClientOptions,
  });

  return createAuthInterceptor({
    reauthorize: async () => {
      const authData = await Promise.resolve(authStorage.getData());
      if (!authData) {
        throw new AuthError('Reauthorize: Data received from AuthStorage is undefined.');
      }
      const response = await authHttpClient.post(refreshTokenUrl, {
        headers: {
          'Content-Type': contentType || ContentType.URL_ENCODED,
        },
        body: {
          clientId,
          clientSecret,
          grantType: 'refresh_token',
          refreshToken: authData.refreshToken,
        },
      });
      const oauth2Data: OAuth2RefreshTokenResponse = await response.parsedBody();

      await Promise.resolve(authStorage.setData(oauth2Data));
    },
    setAuthorizationData: async (options: NormalizedHttpOptions) => {
      // Get previously stored tokens
      const authData = await Promise.resolve(authStorage.getData());
      if (!authData) {
        throw new AuthError('setAuthorizationData: Data received from AuthStorage is undefined.');
      }
      const { accessToken, tokenType } = authData;
      if (!options.headers) {
        options.headers = {};
      }
      options.headers['Authorization'] = `${tokenType} ${accessToken}`;
    },
    onAuthorizationFailure,
    canAuthorize,
  });
};
