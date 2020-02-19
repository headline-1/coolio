import { fetchRequestHandler } from '../fetch.requestHandler';
import { httpRequestHandler } from '../http.requestHandler';
import { xhrRequestHandler } from '../xhr.requestHandler';
import { HttpMethod, HttpRequestHandler } from '../../httpClient.types';
import { createSimpleServer, SimpleServer } from '../../testing/createSimpleServer.helper';
import { ContentType } from '../../contentType';
import { HttpClient } from '../../httpClient';

require('whatwg-fetch');

const describeRequestHandlers = describe.each([
  ['fetch', fetchRequestHandler()],
  ['http', httpRequestHandler()],
  ['xhr', xhrRequestHandler()],
] as [string, HttpRequestHandler][]);

describeRequestHandlers('%s.requestHandler', (_, requestHandler) => {
  let server: SimpleServer;
  beforeAll(() => {
    server = createSimpleServer({
      status: 200,
      endpoints: [
        {
          method: HttpMethod.GET,
          route: '/',
          response: 'test body',
        },
        {
          method: HttpMethod.GET,
          route: '/timeout',
          response: (_, res) => {
            setTimeout(() => {
              // In timeout tests we expect to get response in less than 500ms, this is just a cleanup.
              res.destroy();
            }, 2000);
          },
        },
      ],
      headers: { 'content-type': ContentType.TEXT, },
    });
  });

  afterAll(async () => {
    await server.close();
  });

  it('handles a request', async () => {
    const client = new HttpClient({
      requestHandler,
      baseUrl: server.fullAddress,
    });
    const result = await client.get('/');
    expect(result.status).toBe(200);
    expect(result.headers.map).toMatchObject({
      'content-type': ContentType.TEXT,
    });
    expect(await result.text()).toEqual('test body');
  });

  it('handles a timeout gracefully', async () => {
    const client = new HttpClient({
      requestHandler,
      baseUrl: server.fullAddress,
      requestTimeout: 500, // Just 500ms timeout
    });
    await expect(client.get('/timeout'))
      .rejects.toThrowError('Request timed out after 500ms.');
    await expect(client.get('/timeout', { timeout: 30 }))
      .rejects.toThrowError('Request timed out after 30ms.');
  });

});
