import { createSimpleServer, SimpleServer } from '../testing/createSimpleServer.helper';
import { ContentType } from '../httpClient.types';
import { HttpClient } from '../httpClient';
import { fetchRequestHandler } from './fetch.requestHandler';

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

  it('throws an exception during initialization if polyfills are missing', () => {
    expect(() => fetchRequestHandler())
      .toThrowError('Fetch API and/or AbortController are not present.');
  });

  it('handles a request', async () => {
    require('whatwg-fetch'); // TODO Use another polyfill and add an option to pass fetch directly to handler

    const client = new HttpClient({
      requestHandler: fetchRequestHandler(),
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
