import { createRedirectionInterceptor } from './redirectionInterceptor';
import { HttpClient } from '../httpClient';
import { handleRequest, mockRequestHandler } from '../requestHandlers/mock.requestHandler';
import { HttpCode } from '../httpCodes';

const BASE_URL = 'http://localhost';

const createMockHandler = () => {
  return mockRequestHandler({
    endpoints: [
      {
        match: `${BASE_URL}/2xx`,
        handler: () => handleRequest(HttpCode.OK, ''),
      },
      {
        match: `${BASE_URL}/3xx-no-location`,
        handler: () => handleRequest(HttpCode.MOVED_PERMANENTLY, ''),
      },
      {
        match: `${BASE_URL}/3xx-loop`,
        handler: async (options) => {
          const response = await handleRequest(HttpCode.TEMPORARY_REDIRECT, '');
          const { redirections } = options.query;
          if (redirections > 1) {
            response.headers.set('Location', `${BASE_URL}/3xx-loop?redirections=${redirections - 1}`);
          } else {
            response.headers.set('Location', `${BASE_URL}/2xx`);
          }
          return response;
        },
      },
      {
        match: `${BASE_URL}/3xx`,
        handler: async () => {
          const response = await handleRequest(HttpCode.PERMANENT_REDIRECT, '');
          response.headers.set('Location', `${BASE_URL}/2xx`);
          return response;
        },
      },
      {
        match: `${BASE_URL}/4xx`,
        handler: () => handleRequest(HttpCode.BAD_REQUEST, ''),
      },
      {
        match: `${BASE_URL}/5xx`,
        handler: () => handleRequest(HttpCode.BAD_GATEWAY, ''),
      },
    ]
  });
};
describe('Redirection Interceptor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('is a passthrough when http code is not redirection', async () => {
    const client = new HttpClient({
      baseUrl: BASE_URL,
      requestHandler: createMockHandler(),
    })
      .addInterceptor(createRedirectionInterceptor({
        redirectionLimit: 0,
      }));

    await expect(client.get('/2xx').then(x => x.status)).resolves.toEqual(200);
    await expect(client.get('/4xx').then(x => x.status)).resolves.toEqual(400);
    await expect(client.get('/5xx').then(x => x.status)).resolves.toEqual(502);
  });

  it('follows redirections', async () => {
    const client = new HttpClient({
      baseUrl: BASE_URL,
      requestHandler: createMockHandler(),
    })
      .addInterceptor(createRedirectionInterceptor({
        redirectionLimit: 10,
      }));

    await expect(client.get('/3xx').then(x => x.status)).resolves.toEqual(200);
    await expect(client.get('/3xx-loop?redirections=10').then(x => x.status)).resolves.toEqual(200);
  });

  it('throws an error when there is too many redirections', async () => {
    const client = new HttpClient({
      baseUrl: BASE_URL,
      requestHandler: createMockHandler(),
    })
      .addInterceptor(createRedirectionInterceptor({
        redirectionLimit: 5,
      }));

    await expect(client.get('/3xx-loop?redirections=6')).rejects.toThrowError(
      'Redirection limit (of 5 redirections) has been exceeded.'
    );
    await expect(client.get('/3xx-loop?redirections=100')).rejects.toThrowError(
      'Redirection limit (of 5 redirections) has been exceeded.'
    );

  });

  it('throws an error when redirection does not have location header', async () => {
    const client = new HttpClient({
      baseUrl: BASE_URL,
      requestHandler: createMockHandler(),
    })
      .addInterceptor(createRedirectionInterceptor({
        redirectionLimit: 5,
      }));

    await expect(client.get('/3xx-no-location')).rejects.toThrowError(
      'A response does not provide redirection location header.'
    );
  });
});
