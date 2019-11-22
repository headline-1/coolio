import isObject from 'lodash/isObject';
import isNil from 'lodash/isNil';
import {
  ContentType,
  HttpRequestHandler,
  HttpResponse,
  NormalizedHttpOptions,
  RawHttpResponse
} from './httpClient.types';
import { createHttpResponse } from './httpResponse';

export const handleRequest = (code: number, body: any, contentType: string = ContentType.TEXT): Promise<HttpResponse> => {
  if (isObject(body)) {
    body = JSON.stringify(body);
    contentType = contentType || ContentType.JSON;
  } else if (!isNil(body)) {
    body = String(body);
  }
  return Promise.resolve(createHttpResponse({
    body,
    headers: {
      'X-Is-Mock': 'true',
      'Content-Type': contentType,
      'Content-Length': String(body && body.length),
    },
    status: code,
  }));
};

export interface Endpoint {
  match: string | RegExp;
  handler: (request: NormalizedHttpOptions) => Promise<RawHttpResponse>;
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
  ): Promise<RawHttpResponse> => {
    lastRequest = requestOptions;
    const endpoint = mockOptions.endpoints.find(endpoint => new RegExp(endpoint.match).test(requestOptions.url));
    if (!endpoint) {
      return Promise.reject(new Error(`Mock not provided for URI: ${requestOptions.url}`));
    }
    return await endpoint.handler(requestOptions);
  };
  handler.lastRequest = () => lastRequest;
  return handler;
};
