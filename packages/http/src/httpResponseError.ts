import { HttpResponse } from './httpClient.types';
import { HttpCode } from './httpCodes';

const symbol = Symbol('HttpResponseError');

export class HttpResponseError<T = HttpResponse<any>> extends Error {
  readonly status: HttpCode;
  private readonly __symbol = symbol;

  constructor(public readonly response: HttpResponse<T>) {
    super(`${response.status} ${response.statusText}: ${response.url}`);
    this.status = response.status;
    this.name = 'HttpResponseError';
  }
}

export const isHttpResponseError = (error: any): error is HttpResponseError => error?.__symbol === symbol;
