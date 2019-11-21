import { HttpRequestHandler, NormalizedHttpOptions, RawHttpResponse } from './httpClient.types';
import { HttpResponseHeaders } from './httpResponseHeaders';
import { encodeText } from './helpers/encoder.helper';

const HEADERS_RECEIVED = 2;
const DONE = 4;

const getEncodingFromHeaders = (headers: HttpResponseHeaders | undefined, fallback = 'utf-8') => (
  headers?.get('content-type')
    ?.split(';')
    ?.find(element => element.trim().startsWith('charset'))
    ?.split('=')[1]
  ?? fallback
).trim().toLowerCase();

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

export const xhrRequestHandler = (): HttpRequestHandler => async (
  requestOptions: NormalizedHttpOptions,
): Promise<RawHttpResponse> => new Promise((resolve, reject) => {
  const isCors = requestOptions.mode === 'cors';
  const req = new XMLHttpRequest();
  if (isCors) {
    req.withCredentials = true;
  }
  req.open(requestOptions.method!, requestOptions.url, true);
  req.responseType = 'arraybuffer';

  for (const key in requestOptions.headers) {
    if (requestOptions.headers.hasOwnProperty(key)) {
      req.setRequestHeader(key, requestOptions.headers[key]);
    }
  }

  const arrayBufferBodyHandler = createAsyncBodyHandler<ArrayBuffer>();
  const textBodyHandler = createAsyncBodyHandler<string>();

  req.onerror = () => {
    const error = new Error('XHR request error');
    reject(error);
    arrayBufferBodyHandler.onBodyFailure(() => error);
    textBodyHandler.onBodyFailure(() => error);
  };
  req.onreadystatechange = () => {
    let response: RawHttpResponse | undefined;
    switch (req.readyState) {
      case HEADERS_RECEIVED:
        resolve(response = {
          arrayBuffer: arrayBufferBodyHandler.call,
          text: textBodyHandler.call,
          abort: () => req.abort(),
          url: requestOptions.url,
          headers: new HttpResponseHeaders(req.getAllResponseHeaders()),
          ok: req.status < 400,
          status: req.status,
          statusText: req.statusText,
          redirected: false,
        });
        break;
      case DONE:
        arrayBufferBodyHandler.onBodyReceived(() => req.response);
        textBodyHandler.onBodyReceived(() => encodeText(req.response, getEncodingFromHeaders(response?.headers)));
        break;
    }
  };
  req.send(requestOptions.body);
});
