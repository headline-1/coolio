import { HttpResponse } from './httpClient.types';
import { HttpCode } from './httpCodes';

const symbol = Symbol('HttpResponseError');

export class HttpResponseError<T = any> extends Error {
  readonly status: HttpCode;
  private readonly __symbol = symbol;

  constructor(public readonly response: HttpResponse<T>, message?: string) {
    super(`${response.status} ${response.statusText}: ${response.url}${message ? `, ${message}` : ''}`);
    this.status = response.status;
    this.name = 'HttpResponseError';
  }
}

export const isHttpResponseError = (error: any): error is HttpResponseError => error?.__symbol === symbol;
