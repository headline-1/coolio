import { HttpRequestHandler, NormalizedHttpOptions } from './httpClient.types';

export interface FetchOptions {
  defaultRequestOptions?: RequestInit;
}

export const fetchRequestHandler = (
  fetchOptions: FetchOptions = {},
): HttpRequestHandler => (
  requestOptions: NormalizedHttpOptions,
): Promise<Response> =>
  fetch(requestOptions.url, { ...fetchOptions.defaultRequestOptions, ...requestOptions });
