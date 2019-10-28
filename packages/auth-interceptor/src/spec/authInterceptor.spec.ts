import {
  bodyParser,
  bodySerializer,
  getHostname,
  handleRequest,
  HttpClient,
  HttpCode,
  mockRequestHandler,
  NormalizedHttpOptions
} from '@coolio/http';
import { createAuthInterceptor } from '../authInterceptor';

describe('AuthInterceptor', () => {
  const differentDomainHandler = (options: NormalizedHttpOptions) => handleRequest(HttpCode.OK, {
    authorization: options.headers && options.headers['Authorization'],
  });

  const storage: any = {};

  const client = new HttpClient({
    baseUrl: 'https://my-domain.org/',
    bodySerializer: bodySerializer(),
    responseParser: bodyParser(),
    requestHandler: mockRequestHandler({
      endpoints: [
        {
          match: /my-domain\.org\/auth\/token/,
          handler: ({ body }) => handleRequest(HttpCode.OK, {
            body,
          }),
        },
        {
          match: /example\.com/,
          handler: differentDomainHandler,
        },
      ]
    })
  }).addInterceptor(createAuthInterceptor({
    setAuthorizationData: (data) => {
      storage.auth = data;
    },
    reauthorize: () => storage.auth,
    onAuthorizationFailure: error => {
      throw error;
    },
    canAuthorize: (options) => getHostname(options.url) === 'my',
  }));

  it('passes Authorization header to authorized domain', () => {
    client.get('/');
  });

  it('does not pass Authorization header to unauthorized domain', () => {

  });
});
