import { urlCombine, urlDestruct } from '../urlEncoding.helper';

describe('urlEncoding.helper', () => {
  describe('urlCombine', () => {
    it('combines "http://example.com/path" URL with "{ test: 1, values: 2 }" query params', () => {
      const combinedUrl = urlCombine('http://example.com/path', { test: 1, values: 2 });
      expect(combinedUrl).toEqual('http://example.com/path?test=1&values=2');
    });

    it('overrides and merges nested parameters in URL by query params object', () => {
      const combinedUrl = urlCombine('http://example.com/path?obj[a]=a&obj[b]=b', {
        obj: { b: 'override', c: 'c' },
        d: 1
      });
      expect(combinedUrl).toEqual('http://example.com/path?obj[a]=a&obj[b]=override&obj[c]=c&d=1');
    });
    it('doesn\'t add query string when query is empty', () => {
      const combinedUrl = urlCombine('http://example.com', {});
      expect(combinedUrl).toEqual('http://example.com');
    });
  });

  describe('urlDestruct', () => {
    it('breaks down url with query params to a path and query params object', () => {
      const breakdown = urlDestruct('http://example.com/path?obj[a]=a&obj[b]=b');
      expect(breakdown).toEqual({
        url: 'http://example.com/path',
        query: {
          obj: {
            a: 'a',
            b: 'b',
          },
        },
      });
    });
    it('returns empty query object when there is no query', () => {
      expect(urlDestruct('http://example.com/path').query).toEqual({});
      expect(urlDestruct('http://example.com/path?').query).toEqual({});
    });
  });
});
