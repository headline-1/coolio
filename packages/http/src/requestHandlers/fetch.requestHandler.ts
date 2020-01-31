import merge from 'lodash/merge';
import { HttpRequestHandler, NormalizedHttpOptions, RawHttpResponse } from '../httpClient.types';
import { HttpResponseHeaders } from '../httpResponseHeaders';

export interface FetchRequestHandlerOptions {
  defaultRequestOptions?: RequestInit;
}

// TODO Extract to '@coolio/fetch-request-handler'
/**
 * Creates a new {@link HttpRequestHandler} that uses [Fetch API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API} underneath.
 * Does not support *timeout* property.
 * Abort is possible only after headers were received.
 * @param fetchRequestHandlerOptions - default Fetch API options attached to all requests
 */
export const fetchRequestHandler = (
  fetchRequestHandlerOptions: FetchRequestHandlerOptions = {},
): HttpRequestHandler => {
  if ((typeof AbortController === 'undefined') || (typeof fetch === 'undefined') || (typeof Headers === 'undefined')) {
    throw new Error(
      'Fetch API and/or AbortController are not present. ' +
      'Prior to using fetchRequestHandler, make sure that you included necessary polyfills, ' +
      'which are required for old browsers and Node.js.'
    );
  }
  return async (
    requestOptions: NormalizedHttpOptions,
  ): Promise<RawHttpResponse> => {
    const abortController = new AbortController();
    const response = await fetch(requestOptions.url, {
      ...mergeRequestOptions(fetchRequestHandlerOptions.defaultRequestOptions, requestOptions),
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
};

export const mergeRequestOptions = (
  defaultRequestOptions: RequestInit | undefined,
  requestOptions: NormalizedHttpOptions
) => {
  return merge({}, defaultRequestOptions, requestOptions);
};
