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

export const createOAuth2Interceptor = ({
  clientId,
  clientSecret,
  contentType,
  getAuthorizationData,
  setAuthorizationData,
  canAuthorize,
  refreshTokenUrl,
  onAuthorizationFailure,
  httpClientOptions,
}: OAuth2InterceptorOptions) => {
  const authHttpClient = new HttpClient({
    requestHandler: fetchRequestHandler(),
    responseParser: bodyParser({ bodyCasing: BodyCasing.CAMEL_CASE }),
    bodySerializer: bodySerializer({ bodyCasing: BodyCasing.SNAKE_CASE }),
    ...httpClientOptions,
  });

  return createAuthInterceptor({
    reauthorize: async () => {
      const { refreshToken } = await Promise.resolve(getAuthorizationData());
      const response = await authHttpClient.post(refreshTokenUrl, {
        headers: {
          'Content-Type': contentType || ContentType.URL_ENCODED,
        },
        body: {
          clientId,
          clientSecret,
          grantType: 'refresh_token',
          refreshToken,
        },
      });
      const oauth2Data: OAuth2RefreshTokenResponse = await response.parsedBody();

      await Promise.resolve(setAuthorizationData(oauth2Data));
    },
    setAuthorizationData: async (options: NormalizedHttpOptions) => {
      // Get previously stored tokens
      const { accessToken, tokenType } = await Promise.resolve(getAuthorizationData());
      if (!options.headers) {
        options.headers = {};
      }
      options.headers['Authorization'] = `${tokenType} ${accessToken}`;
    },
    onAuthorizationFailure,
    canAuthorize,
  });
};
