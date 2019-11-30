/* eslint-disable @typescript-eslint/camelcase */
import {
  bodyParser,
  bodySerializer,
  ContentType,
  handleRequest,
  HttpClient,
  HttpCode,
  HttpRequestHandler,
  mockRequestHandler
} from '@coolio/http';
import { isEqual } from 'lodash';
import { createOAuth2Interceptor } from '../oauth2Interceptor';
import { OAuth2TokenResponse } from '../oauth2Interceptor.types';
import { InMemoryAuthStorage } from '../storage/inMemory.authStorage';
import { AuthError } from '../authError';

interface MockHandlerParams {
  accessToken: string;
  refreshToken: string;
  clientId: string;
  clientSecret: string;
}

const createMockHandler = (params: MockHandlerParams) => {
  return mockRequestHandler({
    endpoints: [
      {
        match: /test\.com\/oauth\/token\/refresh/,
        handler: async (request) => {
          if (typeof request.body !== 'string') {
            throw new Error('Invalid body.');
          }
          const body = JSON.parse(request.body);
          if (isEqual(body, {
            grant_type: 'refresh_token',
            client_id: params.clientId,
            client_secret: params.clientSecret,
            refresh_token: params.refreshToken,
          })) {
            return handleRequest(HttpCode.OK, {
              access_token: params.accessToken,
              expires_in: 86400,
              scope: 'scope',
              token_type: 'Bearer'
            }, ContentType.JSON);
          } else {
            return handleRequest(HttpCode.UNAUTHORIZED, {
              message: 'Invalid credentials',
            }, ContentType.JSON);
          }
        },
      },
      {
        match: /test\.com\/endpoint/,
        handler: (options) => {
          if (`Bearer ${params.accessToken}` !== options.headers['Authorization']) {
            return handleRequest(HttpCode.UNAUTHORIZED, {}, ContentType.JSON);
          }
          return handleRequest(HttpCode.OK, '', ContentType.TEXT);
        },
      },
    ]
  });
};

interface HttpClientParams {
  clientId: string;
  clientSecret: string;
  requestHandler: HttpRequestHandler;
}

const createHttpClient = (params: HttpClientParams) => {
  const authStorage = new InMemoryAuthStorage<OAuth2TokenResponse>();
  const authInterceptor = createOAuth2Interceptor({
    oauth: {
      clientId: params.clientId,
      clientSecret: params.clientSecret,
      refreshTokenUrl: 'http://test.com/oauth/token/refresh',
      contentType: ContentType.JSON,
      httpClientOptions: {
        requestHandler: params.requestHandler,
      }
    },
    authStorage,
    canAuthorize: () => true,
    onAuthorizationFailure: err => console.error(err.cause),
  });

  const client = new HttpClient({
    baseUrl: 'http://test.com/',
    bodySerializer: bodySerializer(),
    bodyParser: bodyParser(),
    requestHandler: params.requestHandler,
  });

  return {
    client: client.addInterceptor(authInterceptor),
    authInterceptor,
    storage: authStorage,
  };
};

describe('OAuth2 Interceptor', () => {
  it('passes authorization token correctly', async () => {
    const clientId = 'abcdef';
    const clientSecret = 'ghijkl';
    const requestHandler = createMockHandler({
      clientId,
      clientSecret,
      accessToken: 'token token token',
      refreshToken: 'doesnt matter',
    });
    const { client, storage } = createHttpClient({
      clientId,
      clientSecret,
      requestHandler,
    });

    storage.setData({
      accessToken: 'token token token',
      refreshToken: 'should not be used here',
      tokenType: 'Bearer',
    });

    const response = await client.get('/endpoint');
    expect(response.status).toEqual(200);
  });

  it('reauthorizes correctly', async () => {
    const clientId = 'abcdef';
    const clientSecret = 'ghijkl';
    const requestHandler = createMockHandler({
      clientId,
      clientSecret,
      accessToken: '123',
      refreshToken: 'test',
    });
    const { client, storage } = createHttpClient({
      clientId,
      clientSecret,
      requestHandler,
    });

    storage.setData({
      accessToken: 'aaa',
      refreshToken: 'test',
      tokenType: 'Bearer',
    });

    const response = await client.get('/endpoint');
    expect(response.status).toEqual(200);
  });

  it('throws an error when auth data is missing', ()=> {
    const clientId = 'abcdef';
    const clientSecret = 'ghijkl';
    const requestHandler = createMockHandler({
      clientId,
      clientSecret,
      accessToken: '123',
      refreshToken: 'test',
    });
    const { client, storage } = createHttpClient({
      clientId,
      clientSecret,
      requestHandler,
    });

    storage.setData(undefined as any);

    expect(client.get('/endpoint')).rejects.toEqual(new AuthError('Data received from AuthStorage is undefined.'));
  });
});
