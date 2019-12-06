import { createSimpleServer, SimpleServer } from '../testing/createSimpleServer.helper';
import { ContentType } from '../httpClient.types';
import { HttpClient } from '../httpClient';
import { xhrRequestHandler } from './xhr.requestHandler';

describe('xhr.requestHandler', () => {
  let server: SimpleServer;
  beforeAll(() => {
    server = createSimpleServer({
      status: 200,
      body: 'test body',
      headers: { 'content-type': ContentType.TEXT, },
    });
  });

  afterAll(async () => {
    await server.close();
  });

  it('handles a request', async () => {
    const client = new HttpClient({
      requestHandler: xhrRequestHandler(),
      baseUrl: server.fullAddress,
    });
    const result = await client.get('/');
    expect(result.status).toBe(200);
    expect(result.headers.map).toEqual({
      'content-type': ContentType.TEXT,
    });
    expect(await result.text()).toEqual('test body');
  });
});
