import cloneDeep from 'lodash/cloneDeep';
import { HttpClient } from '../httpClient';
import { handleRequest, mockRequestHandler } from '../mock.requestHandler';
import { bodyParser } from '../bodyParser';
import { parseHeaders } from '../helpers';
import { ContentType } from '../httpClient.types';

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

  describe('interceptor', () => {
    const log = jest.fn();
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
    }).addInterceptor((request, options) => {
      log(cloneDeep(options));
      return async () => {
        const result = await request();
        log(cloneDeep(options));
        log(await result.parsedBody());
        return result;
      };
    });

    it('intercepts a call', async () => {
      const result = await client.get('/endpoint?param=value');
      expect(result.status).toEqual(200);
      expect(await result.parsedBody()).toEqual('1');
      expect(log).toHaveBeenCalledTimes(3);
      expect(log).toHaveBeenNthCalledWith(1, {
        body: undefined,
        headers: {},
        query: { param: 'value' },
        method: 'GET',
        // URL is stripped down from query parameters before making a request
        url: 'https://fakeland.com/endpoint',
      });

      expect(log).toHaveBeenNthCalledWith(2, {
        body: undefined,
        headers: {},
        query: { param: 'value' },
        method: 'GET',
        // URL contains all query parameters after making a request
        url: 'https://fakeland.com/endpoint?param=value',
      });
      expect(log).toHaveBeenNthCalledWith(3, '1');
    });
  });

  describe('response parsing', () => {
    const client = new HttpClient({
      requestHandler: mockRequestHandler({
        endpoints: [
          {
            match: 'https://fakeland.com/endpoint',
            handler: () => handleRequest(200, {
              test: 'abc',
            }, ContentType.JSON),
          },
        ],
      }),
      baseUrl: 'https://fakeland.com/',
      responseParser: bodyParser(),
    });

    const expectedBody = {
      test: 'abc',
    };
    const expectedHeaders = {
      'content-length': '14',
      'content-type': 'application/json',
      'x-is-mock': 'true',
    };

    it('processes GET request', async () => {
      const result = await client.get('/endpoint');
      expect(result.status).toEqual(200);
      expect(await result.parsedBody()).toEqual(expectedBody);
      expect(parseHeaders(result.headers)).toEqual(expectedHeaders);
    });

    it('processes PATCH request', async () => {
      const result = await client.patch('/endpoint');
      expect(result.status).toEqual(200);
      expect(await result.parsedBody()).toEqual(expectedBody);
      expect(parseHeaders(result.headers)).toEqual(expectedHeaders);
    });

    it('processes POST request', async () => {
      const result = await client.post('/endpoint');
      expect(result.status).toEqual(200);
      expect(await result.parsedBody()).toEqual(expectedBody);
      expect(parseHeaders(result.headers)).toEqual(expectedHeaders);
    });

    it('processes PUT request', async () => {
      const result = await client.put('/endpoint');
      expect(result.status).toEqual(200);
      expect(await result.parsedBody()).toEqual(expectedBody);
      expect(parseHeaders(result.headers)).toEqual(expectedHeaders);
    });

    it('processes DELETE request', async () => {
      const result = await client.remove('/endpoint');
      expect(result.status).toEqual(200);
      expect(await result.parsedBody()).toEqual(expectedBody);
      expect(parseHeaders(result.headers)).toEqual(expectedHeaders);
    });

  });

});
