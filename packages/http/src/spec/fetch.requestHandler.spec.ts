import { createSimpleServer, SimpleServer } from '../testing/createSimpleServer.helper';
import { ContentType } from '../httpClient.types';
import { HttpClient } from '../httpClient';
import { fetchRequestHandler } from '../fetch.requestHandler';
import { parseHeaders } from '../helpers';

describe('fetch.requestHandler', () => {
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
      requestHandler: fetchRequestHandler(),
      baseUrl: server.fullAddress,
    });
    const result = await client.get('/');
    expect(result.status).toBe(200);
    expect(parseHeaders(result.headers)).toEqual({
      'content-type': ContentType.TEXT,
    });
    expect(await result.text()).toEqual('test body');
  });
});
