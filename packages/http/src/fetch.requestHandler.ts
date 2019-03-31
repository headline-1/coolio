import { HttpRequestHandler, HttpResponse, NormalizedHttpOptions } from './httpClient.types';

export interface FetchOptions {
  defaultRequestOptions?: RequestInit;
}

export const fetchRequestHandler = (
  fetchOptions: FetchOptions = {},
): HttpRequestHandler => async (
  requestOptions: NormalizedHttpOptions,
): Promise<HttpResponse> => {
  return await fetch(requestOptions.url, {
    ...fetchOptions.defaultRequestOptions,
    ...requestOptions,
  }) as HttpResponse;
};
