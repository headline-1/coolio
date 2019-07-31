import isObject from 'lodash/isObject';
import isNil from 'lodash/isNil';
import { ContentType, HttpRequestHandler, HttpResponse, NormalizedHttpOptions } from './httpClient.types';
import { HttpStatusText } from './httpCodes';

export const handleRequest = (code: number, body: any, contentType: string = ContentType.TEXT): Promise<Response> => {
  if (isObject(body)) {
    body = JSON.stringify(body);
    contentType = contentType || ContentType.JSON;
  } else if (!isNil(body)) {
    body = String(body);
  }
  return Promise.resolve(new Response(body, {
    headers: {
      'X-Is-Mock': 'true',
      'Content-Type': contentType,
      'Content-Length': String(body && body.length),
    },
    status: code,
    statusText: HttpStatusText[code],
  }));
};

export interface Endpoint {
  match: string | RegExp;
  handler: (request: NormalizedHttpOptions) => Promise<Response>;
}

export interface MockOptions {
  endpoints: Endpoint[];
}

export type MockHttpRequestHandler = HttpRequestHandler & {
  lastRequest: () => NormalizedHttpOptions;
};

export const mockRequestHandler = (
  mockOptions: MockOptions,
): MockHttpRequestHandler => {
  let lastRequest: NormalizedHttpOptions;
  const handler = async (
    requestOptions: NormalizedHttpOptions,
  ): Promise<HttpResponse> => {
    lastRequest = requestOptions;
    const endpoint = mockOptions.endpoints.find(endpoint => new RegExp(endpoint.match).test(requestOptions.url));
    if (!endpoint) {
      return Promise.reject(new Error(`Mock not provided for URI: ${requestOptions.url}`));
    }
    return await endpoint.handler(requestOptions) as HttpResponse;
  };
  handler.lastRequest = () => lastRequest;
  return handler;
};
