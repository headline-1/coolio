import { HttpClientHelper } from '../httpClient.helper';

describe('httpClient.helper ', () => {

  describe('#getHostname', () => {
    it('resolves a hostname from url correctly', () => {
      expect(HttpClientHelper.getHostname('http://google.com')).toBe('google.com');
      expect(HttpClientHelper.getHostname('ws://some-website.tld/path/path/path?x=1')).toBe('some-website.tld');
      expect(HttpClientHelper.getHostname('file:///xxx/')).toBe('');
    });

    it('returns an empty hostname if url is not valid', () => {
      expect(HttpClientHelper.getHostname('this is not an url')).toBe('');
      expect(HttpClientHelper.getHostname(null as any)).toBe('');
    });
  });

  describe('#sanitizeHeaders', () => {
    it('removes null or undefined headers', () => {
      expect(HttpClientHelper.sanitizeHeaders({
        value: null,
        value2: undefined,
        value3: '',
      })).toEqual({
        value3: '',
      });
    });

    it('converts all headers to strings', () => {
      expect(HttpClientHelper.sanitizeHeaders({
        n: 1,
        b: false,
        o: {},
        a: ['abc', 'def'],
        s: 'string',
      })).toEqual({
        n: '1',
        b: 'false',
        o: '[object Object]',
        a: 'abc,def',
        s: 'string',
      });
    });

    it('does not convert "not-own" properties', () => {
      const x = () => ({});
      x.test = 'value';
      expect(HttpClientHelper.sanitizeHeaders(x)).toEqual({
        test: 'value',
      });
    });
  });

  describe('#toUrlEncoded', () => {
    it('encodes a simple object ', () => {
      expect(HttpClientHelper.toUrlEncoded({
        a: 1.33,
        b: 'b test',
      })).toEqual('a=1.33&b=b%20test');
    });
  });
});
