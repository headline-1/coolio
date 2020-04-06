import { HttpRequestHandler, NormalizedHttpOptions, RawHttpResponse } from '../httpClient.types';
import { HttpResponseHeaders } from '../httpResponseHeaders';
import { HttpRequestError } from '../httpRequestError';
import { sanitizeHeaders } from '../helpers';
import { CFormData } from '../formData';

export interface FetchRequestHandlerOptions {
  defaultRequestOptions?: RequestInit;
}

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
    const response = await new Promise<Response>((resolve, reject) => {
      const timer = setTimeout(() => {
        abortController.abort();
        reject(new HttpRequestError(requestOptions, `Request timed out after ${requestOptions.timeout}ms.`));
      }, requestOptions.timeout);

      // Normalization of FormData options
      // Make sure that we use native browser FormData with fetch and reset content-type header
      const isFormData = CFormData.isFormData(requestOptions.body);
      const body: any = isFormData
        ? CFormData.from(requestOptions.body, { forceImplementation: 'native' })
        : requestOptions.body;
      const formDataHeaderOverride = isFormData ? { 'content-type': undefined } : undefined;

      fetch(requestOptions.url, {
        ...fetchRequestHandlerOptions.defaultRequestOptions,
        ...requestOptions,
        body,
        headers: sanitizeHeaders(
          fetchRequestHandlerOptions.defaultRequestOptions?.headers,
          requestOptions.headers,
          formDataHeaderOverride,
        ),
        signal: abortController.signal,
      }).then(response => {
        clearTimeout(timer);
        resolve(response);
      }, error => {
        clearTimeout(timer);
        reject(error);
      });
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
