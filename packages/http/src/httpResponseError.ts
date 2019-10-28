import { HttpResponse } from './httpClient.types';
import { HttpCode } from './httpCodes';

export class HttpResponseError<T = HttpResponse<any>> extends Error {
  public readonly status: HttpCode;

  constructor(public readonly response: HttpResponse<T>) {
    super(`${response.status} ${response.statusText}: ${response.url}`);
    this.status = response.status;
    this.name = 'HttpResponseError';
  }
}

export const isHttpResponseError = (error: any): error is HttpResponseError => error instanceof HttpResponseError;
