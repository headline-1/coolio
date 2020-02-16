import {
  bodyParser,
  bodySerializer,
  ContentType,
  getHostname,
  handleRequest,
  HttpClient,
  HttpCode,
  HttpInterceptor,
  HttpRequestHandler,
  Interceptors,
  mockRequestHandler,
  NormalizedHttpOptions
} from '@coolio/http';
import { createAuthInterceptor } from '../authInterceptor';
import { Promisable } from '../promisable';
import { AuthError } from '../authError';

interface MockHandlerParams {
  token: string;
}

const createMockHandler = (params: MockHandlerParams) => {
  let requestCount = 0;
  const verboseAuthHandler = (options: NormalizedHttpOptions) => {
    if (params.token !== options.headers['Authorization']) {
      return handleRequest(HttpCode.UNAUTHORIZED, {}, ContentType.JSON);
    }
    return handleRequest(HttpCode.OK, {
      requestCount: requestCount++,
      ...options.headers,
    }, ContentType.JSON);
  };

  return mockRequestHandler({
    endpoints: [
      {
        match: /my-domain\.org\/error/,
        handler: () => handleRequest(HttpCode.BAD_GATEWAY, { message: 'Boom! It exploded.' }, ContentType.JSON),
      },
      {
        match: /my-domain\.org/,
        handler: verboseAuthHandler,
      },
      {
        match: /example\.com/,
        handler: verboseAuthHandler,
      },
    ]
  });
};

interface HttpClientParams {
  requestHandler: HttpRequestHandler;
  reauthorize: () => Promisable;
  token: string;
  onAuthorizationFailure?: (error: AuthError) => Promisable;
  preAuthInterceptors?: HttpInterceptor[];
}

const createHttpClient = (params: HttpClientParams) => {
  const authInterceptor = createAuthInterceptor({
    setAuthorizationData: (options) => {
      options.headers['Authorization'] = params.token;
    },
    reauthorize: params.reauthorize,
    onAuthorizationFailure: params.onAuthorizationFailure || (() => void 0),
    canAuthorize: options => getHostname(options.url) === 'my-domain.org',
  });

  const client = new HttpClient({
    baseUrl: 'http://my-domain.org/',
    bodySerializer: bodySerializer(),
    bodyParser: bodyParser(),
    requestHandler: params.requestHandler,
  });
  params.preAuthInterceptors?.forEach(client.addInterceptor);

  return {
    client: client.addInterceptor(authInterceptor),
    authInterceptor,
  };
};

describe('Auth Interceptor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('passes Authorization header to authorized domain', async () => {
    const requestHandler = createMockHandler({
      token: 'abcdef'
    });
    const { client } = createHttpClient({
      requestHandler,
      reauthorize: jest.fn(),
      token: 'abcdef',
    });

    const response = await client.get('/');
    expect((await response.parsedBody())['Authorization']).toEqual('abcdef');
  });

  it('calls reauthorize and retries the API call if first response is Unauthorized', async () => {
    const requestHandler = createMockHandler({
      token: 'defghi'
    });
    const httpClientParams: HttpClientParams = {
      requestHandler,
      reauthorize: jest.fn(() => {
        httpClientParams.token = 'defghi';
      }),
      token: 'abcdef',
    };
    const { client } = createHttpClient(httpClientParams);

    const response = await client.get('/');
    expect(httpClientParams.reauthorize).toHaveBeenCalledTimes(1);
    expect((await response.parsedBody())['Authorization']).toEqual('defghi');
  });

  it('fails with AuthError if second response is also Unauthorized', async () => {
    const requestHandler = createMockHandler({
      token: '123456'
    });
    const httpClientParams: HttpClientParams = {
      requestHandler,
      reauthorize: jest.fn(),
      token: 'abcdef',
    };
    const { client } = createHttpClient(httpClientParams);

    await expect(client.get('/')).rejects.toEqual(new AuthError('Reauthorization failed or credentials are invalid.'));
    expect(httpClientParams.reauthorize).toHaveBeenCalledTimes(1);
  });

  it('fails with AuthError if reauthorization fails & custom global reauthorization handler is not present',
    async () => {
      const requestHandler = createMockHandler({
        token: '123456'
      });
      const error = new Error('This is too much... I just can\'t! 😭😭😭');
      const httpClientParams: HttpClientParams = {
        requestHandler,
        reauthorize: jest.fn(() => {
          throw error;
        }),
        token: 'abcdef',
      };
      const { client } = createHttpClient(httpClientParams);

      await expect(client.get('/')).rejects
        .toEqual(new AuthError('Reauthorization failed or credentials are invalid.', error));
    }
  );

  it('fails with custom error if reauthorization fails & custom global reauthorization handler is provided',
    async () => {
      const requestHandler = createMockHandler({
        token: '123456',
      });
      const httpClientParams: HttpClientParams = {
        requestHandler,
        reauthorize: jest.fn(async () => {
          throw new Error('This is too much... I just can\'t! 😭😭😭');
        }),
        onAuthorizationFailure: jest.fn(async error => {
          throw new Error(`CustomError: ${error.cause?.message}`);
        }),
        token: 'abcdef',
      };
      const { client } = createHttpClient(httpClientParams);

      await expect(client.get('/'))
        .rejects
        .toEqual(new Error('CustomError: This is too much... I just can\'t! 😭😭😭'));
    }, 999999
  );

  it('does not pass Authorization header to unauthorized domain', async () => {
    const requestHandler = createMockHandler({
      token: 'abcdef'
    });
    const httpClientParams: HttpClientParams = {
      requestHandler,
      reauthorize: jest.fn(),
      token: 'abcdef',
    };
    const { client } = createHttpClient(httpClientParams);

    const response = await client.get('https://example.com/');
    expect(response.status).toEqual(401);
  });

  it('queues requests to avoid multiple auth errors', async () => {
    const mockHandlerParams: MockHandlerParams = {
      token: 'defghi'
    };
    const requestHandler = createMockHandler(mockHandlerParams);

    const httpClientParams: HttpClientParams = {
      requestHandler,
      reauthorize: jest.fn(() => {
        httpClientParams.token = 'defghi';
      }),
      token: 'abcdef',
    };
    const { client, authInterceptor } = createHttpClient(httpClientParams);

    const promises = new Array(50)
      .fill(null)
      .map(() => client
        .get('/')
        .then(response => response.parsedBody())
        .then(body => body.requestCount),
      );

    expect(authInterceptor.pendingRequestCount).toEqual(promises.length - 1);
    expect(await Promise.all(promises)).toEqual(
      new Array(50)
        .fill(null)
        .map((_, index) => index)
    );
  });

  it('calls reauthorize when server rejects request', async () => {
    let token = 'abc';
    const mockHandlerParams: MockHandlerParams = {
      token,
    };
    const requestHandler = createMockHandler(mockHandlerParams);

    const httpClientParams: HttpClientParams = {
      requestHandler,
      reauthorize: jest.fn(() => {
        httpClientParams.token = token;
      }),
      token,
    };
    const { client } = createHttpClient(httpClientParams);

    const results = await Promise.all([
      client.get('/').then(res => {
        mockHandlerParams.token = token = '123';
        return res.status;
      }),
      client.get('/').then(res => res.status),
      client.get('/').then(res => {
        mockHandlerParams.token = token = 'xyz';
        return res.status;
      }),
      client.get('/').then(res => res.status),
    ]);

    expect(httpClientParams.reauthorize).toHaveBeenCalledTimes(2);
    expect(results).toEqual([
      200, 200, 200, 200,
    ]);
  });

  it('removes all queued requests with an error and calls onAuthorizationFailure when reauthorization error occurs',
    async () => {
      const requestHandler = createMockHandler({
        token: '123',
      });

      const httpClientParams: HttpClientParams = {
        requestHandler,
        reauthorize: jest.fn(() => {
          throw new Error('I don\'t care!');
        }),
        token: '456',
      };
      const { client } = createHttpClient(httpClientParams);

      const results = await Promise.all([
        client.get('/').catch(err => err),
        client.get('/').catch(err => err),
        client.get('/').catch(err => err),
        client.get('/').catch(err => err),
      ]);

      expect(httpClientParams.reauthorize).toHaveBeenCalledTimes(1);
      const error = new AuthError(
        'Reauthorization failed or credentials are invalid.',
        new Error('I don\'t care!'),
      );

      expect(results).toEqual([
        error, error, error, error,
      ]);
    }
  );

  it('passes all unrelated, non-unauthorized errors further', async () => {
    const requestHandler = createMockHandler({
      token: '123'
    });

    const httpClientParams: HttpClientParams = {
      requestHandler,
      reauthorize: jest.fn(() => {
        httpClientParams.token = '123';
      }),
      token: 'abcdef',
      preAuthInterceptors: [Interceptors.createErrorInterceptor()],
    };
    const { client } = createHttpClient(httpClientParams);

    const error = await client.get('/error').catch(error => error);
    expect(httpClientParams.reauthorize).toHaveBeenCalledTimes(0);
    expect(error.status).toEqual(HttpCode.BAD_GATEWAY);
    expect(await error.response.parsedBody()).toEqual({ message: 'Boom! It exploded.' });
  });
});
