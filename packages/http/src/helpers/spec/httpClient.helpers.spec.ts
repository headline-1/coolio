import { HttpClientHelper } from '../httpClient.helper';

describe('HttpClient Helpers #getHostname', () => {
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
