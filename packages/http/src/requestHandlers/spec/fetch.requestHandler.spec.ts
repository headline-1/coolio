import { HttpMethod } from '../../httpClient.types';
import { fetchRequestHandler, mergeRequestOptions } from '../fetch.requestHandler';
import { ContentType } from '../../contentType';

describe('fetch.requestHandler', () => {
  it('throws an exception during initialization if polyfills are missing', () => {
    expect(() => fetchRequestHandler())
      .toThrowError('Fetch API and/or AbortController are not present.');
  });

  describe('#mergeRequestOptions', () => {
    it('properly merges request options', () => {
      const defaultRequestOptions = {
        method: HttpMethod.GET,
        headers: {
          'content-type': ContentType.JSON,
          'connection': 'keep-alive',
          'accept-encoding': 'gzip',
        },
        keepalive: true,
      };

      const requestOptions = {
        url: '/',
        query: {},
        method: HttpMethod.PUT,
        headers: {
          'content-type': ContentType.TEXT,
          'accept-language': 'en-US',
        },
        timeout: 60 * 1000,
      };

      const result = mergeRequestOptions(defaultRequestOptions, requestOptions);

      expect(result).toEqual({
        ...defaultRequestOptions,
        ...requestOptions,
        headers: {
          'content-type': ContentType.TEXT,
          'accept-language': 'en-US',
          'connection': 'keep-alive',
          'accept-encoding': 'gzip',
        },
      });
    });
  });
});

