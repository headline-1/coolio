import { ContentType, HttpClient, HttpMethod } from '@coolio/http';
import { createSimpleServer, SimpleServer } from '@coolio/http/dist/cjs/testing/createSimpleServer.helper';
import { httpRequestHandler } from './http.requestHandler';

describe('http.requestHandler', () => {
  let server: SimpleServer;
  beforeAll(() => {
    server = createSimpleServer({
      status: 200,
      endpoints: [
        {
          method: HttpMethod.POST,
          route: '/test-route',
          response: 'post',
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
      requestHandler: httpRequestHandler(),
      baseUrl: server.fullAddress,
    });
    const result = await client.post('/test-route?query=param');
    expect(result.status).toBe(200);
    expect(result.headers.map).toEqual({
      'access-control-allow-origin': '*',
      'connection': 'close',
      'date': expect.any(String),
      'content-type': ContentType.TEXT,
      'transfer-encoding': 'chunked',
    });
    expect(await result.text()).toEqual('post');
  });
});
