import { createSimpleServer, SimpleServer } from '../testing/createSimpleServer.helper';
import { ContentType } from '../httpClient.types';
import { HttpClient } from '../httpClient';
import { httpRequestHandler } from './http.requestHandler';

describe('http.requestHandler', () => {
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
      requestHandler: httpRequestHandler(),
      baseUrl: server.fullAddress,
    });
    const result = await client.get('/');
    expect(result.status).toBe(200);
    expect(result.headers.map).toEqual({
      'access-control-allow-origin': '*',
      'connection': 'close',
      'date': expect.any(String),
      'content-type': ContentType.TEXT,
      'transfer-encoding': 'chunked',
    });
    expect(await result.text()).toEqual('test body');
  });
});
