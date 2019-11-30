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
import { OAuth2InterceptorOptions, OAuth2TokenResponse } from './oauth2Interceptor.types';
import { AuthError } from './authError';

export const createOAuth2Interceptor = ({
  oauth: {
    clientId,
    clientSecret,
    contentType,
    refreshTokenUrl,
    httpClientOptions,
  },
  authStorage,
  canAuthorize,
  onAuthorizationFailure,
}: OAuth2InterceptorOptions) => {
  const authHttpClient = new HttpClient({
    requestHandler: fetchRequestHandler(),
    bodyParser: bodyParser({ bodyCasing: BodyCasing.CAMEL_CASE }),
    bodySerializer: bodySerializer({ bodyCasing: BodyCasing.SNAKE_CASE }),
    ...httpClientOptions,
  });

  const getAuthData = async () => {
    const authData = await Promise.resolve(authStorage.getData());
    if (!authData) {
      throw new AuthError('Data received from AuthStorage is undefined.');
    }
    return authData;
  };

  return createAuthInterceptor({
    reauthorize: async () => {
      const response = await authHttpClient.post(refreshTokenUrl, {
        headers: {
          'Content-Type': contentType || ContentType.URL_ENCODED,
        },
        body: {
          clientId,
          clientSecret,
          grantType: 'refresh_token',
          refreshToken: (await getAuthData()).refreshToken,
        },
      });
      const oauth2Data: OAuth2TokenResponse = await response.parsedBody();

      await Promise.resolve(authStorage.setData(oauth2Data));
    },
    setAuthorizationData: async (options: NormalizedHttpOptions) => {
      // Get previously stored tokens
      const { accessToken, tokenType } = await getAuthData();
      options.headers['Authorization'] = `${tokenType} ${accessToken}`;
    },
    onAuthorizationFailure,
    canAuthorize,
  });
};
