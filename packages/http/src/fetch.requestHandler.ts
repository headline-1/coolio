import { HttpRequestHandler, NormalizedHttpOptions, RawHttpResponse } from './httpClient.types';
import { HttpResponseHeaders } from './httpResponseHeaders';

export interface FetchOptions {
  defaultRequestOptions?: RequestInit;
}

export const fetchRequestHandler = (
  fetchOptions: FetchOptions = {},
): HttpRequestHandler => async (
  requestOptions: NormalizedHttpOptions,
): Promise<RawHttpResponse> => {
  const abortController = new AbortController();
  const response = await fetch(requestOptions.url, {
    ...fetchOptions.defaultRequestOptions,
    ...requestOptions,
    signal: abortController.signal,
  });

  return {
    arrayBuffer: () => response.arrayBuffer(),
    text: () => response.text(),
    ok: response.ok,
    headers: new HttpResponseHeaders(response.headers),
    redirected: response.redirected,
    status: response.status,
    statusText: response.statusText,
    url: response.url,
    abort: () => abortController.abort(),
  };
};
