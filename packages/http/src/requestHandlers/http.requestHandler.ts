/* eslint-disable @typescript-eslint/no-var-requires */
import {
  HttpRequestHandler,
  HttpResponseHeaders,
  HttpStatusText,
  NormalizedHttpOptions,
  RawHttpResponse
} from '@coolio/http';
import { encodeText, getEncodingFromHeaders } from '@coolio/http/dist/cjs/helpers/encoder.helper';
import { ClientRequestArgs, IncomingMessage } from 'http';

export interface HttpRequestHandlerOptions {
  defaultRequestOptions?: ClientRequestArgs;
}

/**
 * Creates a new {@link HttpRequestHandler} that uses native Node.js [HTTP]{@link https://nodejs.org/api/http.html} & [HTTPS]{@link https://nodejs.org/api/https.html} modules underneath.
 * Does not support *mode* property.

 * @param requestHandlerOptions - default native options attached to all requests
 */
export const httpRequestHandler = (
  requestHandlerOptions: HttpRequestHandlerOptions = {},
): HttpRequestHandler => {

  const url = require('url');
  const http = require('http');
  const https = require('https');

  return ({
    url: urlString,
    method,
    headers,
    body,
    timeout,
  }: NormalizedHttpOptions): Promise<RawHttpResponse> => new Promise((resolve, reject) => {

    const {
      protocol,
      auth,
      hostname,
      port,
      path,
    } = url.parse(urlString);

    const requestModule = protocol === 'https:' ? https : http;
    const request = requestModule.request({
      ...requestHandlerOptions.defaultRequestOptions,
      path,
      method,
      port,
      hostname,
      protocol,
      auth,
      timeout,
    }, (response: IncomingMessage) => {
      const status = response.statusCode || -1;
      const statusText = response.statusMessage || HttpStatusText[status] || '';
      const ok = status > 0 && status < 400;
      const headers = new HttpResponseHeaders(response.headers);

      const bodyPromise = new Promise<ArrayBuffer>((resolve, reject) => {
        const chunks: any[] = [];
        response.on('data', data => chunks.push(data));
        response.on('error', error => reject(error));
        response.on('end', () => {
          const body = Buffer.concat(chunks);
          resolve(body);
        });
      });

      resolve({
        arrayBuffer: () => bodyPromise,
        text: () => bodyPromise.then(buffer => encodeText(buffer, getEncodingFromHeaders(headers))),
        ok,
        headers,
        redirected: false,
        status,
        statusText,
        url: response.url || urlString,
        abort: () => request.abort(),
      });
    }).once('error', (error: Error) => {
      reject(error);
    });

    for (const key in headers) {
      if (headers.hasOwnProperty(key)) {
        request.setHeader(key, headers[key]);
      }
    }

    if (body) {
      if (typeof body === 'string') {
        request.write(body);
      } else {
        request.write(Buffer.from(body));
      }
    }

    request.end();
  });
};
