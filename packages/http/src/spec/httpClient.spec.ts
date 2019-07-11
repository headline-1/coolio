import { HttpClient } from '../httpClient';
import { handleRequest, mockRequestHandler } from '../mock.requestHandler';
import { bodyParser } from '../bodyParser';

describe('HttpClient', () => {
  describe('baseUrl support', () => {
    const client = new HttpClient({
      requestHandler: mockRequestHandler({
        endpoints: [
          {
            match: 'https://fakeland.com/endpoint',
            handler: () => handleRequest(200, '1'),
          },
          {
            match: 'https://fakeland2.com/endpoint',
            handler: () => handleRequest(200, '2'),
          }
        ],
      }),
      baseUrl: 'https://fakeland.com/',
      responseParser: bodyParser(),
    });

    it('uses baseUrl when URL is relative', async () => {
      const result = await client.get('/endpoint');
      expect(result.status).toEqual(200);
      expect(await result.parsedBody()).toEqual('1');
    });

    it('does not use baseUrl when URL is not relative', async () => {
      const result = await client.get('https://fakeland2.com/endpoint');
      expect(result.status).toEqual(200);
      expect(await result.parsedBody()).toEqual('2');
    });
  });
});
