import { HttpRequestHandler, NormalizedHttpOptions, RawHttpResponse } from '../httpClient.types';
import { HttpResponseHeaders } from '../httpResponseHeaders';
import { encodeText, getEncodingFromHeaders } from '../helpers/encoder.helper';
import { HttpRequestError } from '../httpRequestError';
import { CFormData } from '../formData';
import { sanitizeHeaders } from '../helpers';

const HEADERS_RECEIVED = 2;
const DONE = 4;

export interface XhrRequestHandlerOptions {
}

const createAsyncBodyHandler = <T>() => {
  let isCalled = false;

  let onBodyReceived: (body: T) => void;
  let bodyGetter: () => T;

  let onBodyFailure: (error: any) => void;
  let bodyFailer: () => T;

  const promise = new Promise<T>((resolve, reject) => {
    onBodyReceived = resolve;
    onBodyFailure = reject;
  });

  return {
    call: () => {
      isCalled = true;
      if (bodyGetter) {
        onBodyReceived(bodyGetter());
      } else if (bodyFailer) {
        onBodyFailure(bodyFailer());
      }
      return promise;
    },
    onBodyReceived: (getter: () => T) => {
      if (isCalled) {
        onBodyReceived(getter());
      } else {
        bodyGetter = getter;
      }
    },
    onBodyFailure: (failer: () => any) => {
      if (isCalled) {
        onBodyFailure(failer());
      } else {
        bodyFailer = failer;
      }
    },
  };
};

export const xhrRequestHandler = (_?: XhrRequestHandlerOptions): HttpRequestHandler => async (
  requestOptions: NormalizedHttpOptions,
): Promise<RawHttpResponse> => {
  if (typeof XMLHttpRequest === 'undefined') {
    throw new Error(
      'XMLHttpRequest is not present. Prior to using xhrRequestHandler, make sure that you included necessary polyfills.'
    );
  }

  return new Promise((resolve, reject) => {
    const isCors = requestOptions.mode === 'cors';
    const req = new XMLHttpRequest();
    if (isCors) {
      req.withCredentials = true;
    }
    req.open(requestOptions.method!, requestOptions.url, true);
    req.responseType = 'arraybuffer';
    req.timeout = requestOptions.timeout;
    req.ontimeout = () => {
      reject(new HttpRequestError(requestOptions, `Request timed out after ${requestOptions.timeout}ms.`));
    };

    // Normalization of FormData options
    // Make sure that we use native browser FormData with fetch and reset content-type header
    const isFormData = CFormData.isFormData(requestOptions.body);
    const body: any = isFormData
      ? CFormData.from(requestOptions.body, { forceImplementation: 'native' })
      : requestOptions.body;
    const formDataHeaderOverride = isFormData ? { 'content-type': undefined } : undefined;

    const headers = sanitizeHeaders(
      requestOptions.headers,
      formDataHeaderOverride,
    );

    for (const key in headers) {
      if (headers.hasOwnProperty(key)) {
        req.setRequestHeader(key, headers[key]);
      }
    }

    const bodyHandler = createAsyncBodyHandler<ArrayBuffer>();

    req.onerror = () => {
      const error = new Error('XHR Request Error');
      reject(error);
      bodyHandler.onBodyFailure(() => error);
    };
    req.onreadystatechange = () => {
      let response: RawHttpResponse | undefined;
      switch (req.readyState) {
        case HEADERS_RECEIVED:
          resolve(response = {
            arrayBuffer: bodyHandler.call,
            text: () => bodyHandler.call()
              .then(buffer => encodeText(buffer, getEncodingFromHeaders(response?.headers))),
            abort: () => req.abort(),
            url: requestOptions.url,
            headers: new HttpResponseHeaders(req.getAllResponseHeaders()),
            ok: req.status > 0 && req.status < 400,
            status: req.status,
            statusText: req.statusText,
            redirected: false,
          });
          break;
        case DONE:
          bodyHandler.onBodyReceived(() => req.response);
          break;
      }
    };

    req.send(body);
  });
};
