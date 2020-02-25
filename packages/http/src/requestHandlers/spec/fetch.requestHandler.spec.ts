import { fetchRequestHandler } from '../fetch.requestHandler';

describe('fetch.requestHandler', () => {
  it('throws an exception during initialization if polyfills are missing', () => {
    expect(() => fetchRequestHandler())
      .toThrowError('Fetch API and/or AbortController are not present.');
  });
});

