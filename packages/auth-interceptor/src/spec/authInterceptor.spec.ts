import {
  bodyParser,
  bodySerializer,
  ContentType,
  getHostname,
  handleRequest,
  HttpClient,
  HttpCode,
  mockRequestHandler,
  NormalizedHttpOptions
} from '@coolio/http';
import { AuthInterceptor, createAuthInterceptor } from '../authInterceptor';

describe('AuthInterceptor', () => {
  let lastRequest = 0;
  let requiredAuthorization = '';
  let reauthorize: () => void;

  const authHeaderHandler = (options: NormalizedHttpOptions) => {
    if (requiredAuthorization !== options.headers['Authorization']) {
      return handleRequest(HttpCode.UNAUTHORIZED, {}, ContentType.JSON);
    }
    return handleRequest(HttpCode.OK, {
      lastRequest: lastRequest++,
      ...options.headers,
    }, ContentType.JSON);
  };


  let storage: any = {};
  let authInterceptor; AuthInterceptor;
  const client: HttpClient;

  const makeAuthRequest = async (url: string, header: string) => {
    requiredAuthorization = storage.auth = header;
    const response = await client.get(url);
    const body = await response.parsedBody();
    return body['Authorization'];
  };

  beforeEach(() => {
    jest.clearAllMocks();
    lastRequest = 0;
    requiredAuthorization = '';
    reauthorize = jest.fn(() => {
      storage.auth = requiredAuthorization;
    });
    storage = {};
    authInterceptor = createAuthInterceptor({
      setAuthorizationData: (options) => {
        options.headers['Authorization'] = storage.auth;
      },
      reauthorize,
      onAuthorizationFailure: error => {
        throw error;
      },
      canAuthorize: (options) => getHostname(options.url) === 'my-domain.org',
    });
    client = new HttpClient({
      baseUrl: 'http://my-domain.org/',
      bodySerializer: bodySerializer(),
      bodyParser: bodyParser(),
      requestHandler: mockRequestHandler({
        endpoints: [
          {
            match: /my-domain\.org/,
            handler: authHeaderHandler,
          },
          {
            match: /example\.com/,
            handler: authHeaderHandler,
          },
        ]
      })
    })
      .addInterceptor(authInterceptor)
  });

  it('passes Authorization header to authorized domain', async () => {
    const receivedHeader = await makeAuthRequest('/', 'abcdef');
    expect(receivedHeader).toEqual('abcdef');
  });

  it('does not pass Authorization header to unauthorized domain', async () => {
    const receivedHeader = await makeAuthRequest('http://example.com/', 'abcdef');
    expect(receivedHeader).toEqual(undefined);
  });

  it('queues requests to avoid multiple auth errors', async () => {
    lastRequest = 0;
    requiredAuthorization = storage.auth = 'abcdef';

    const promises = new Array(50)
      .fill(null)
      .map(() => client
        .get('/')
        .then(response => response.parsedBody())
        .then(body => body.lastRequest),
      );

    expect(authInterceptor.pendingRequestCount).toEqual(promises.length - 1);
    expect(await Promise.all(promises)).toEqual(
      new Array(50)
        .fill(null)
        .map((_, index) => index)
    );
  });

  it('calls reauthorize when server rejects request', async () => {
    requiredAuthorization = storage.auth = 'abc';

    const results = await Promise.all([
      client.get('/').then(res => {
        requiredAuthorization = '123';
        return res.status;
      }),
      client.get('/').then(res => res.status),
      client.get('/').then(res => {
        requiredAuthorization = 'xyz';
        return res.status;
      }),
      client.get('/').then(res => res.status),
    ]);

    expect(reauthorize).toHaveBeenCalledTimes(2);
    expect(results).toEqual([
      200, 200, 200, 200,
    ]);
  });

  it('removes all queued requests with an error and calls onAuthorizationFailure when reauthorization error occurs', async () => {
    reauthorize
  });

  it('passes all unrelated, non-unauthorized errors further', async () => {

  })
});
