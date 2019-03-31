import { HttpResponse } from './httpClient.types';

export class HttpResponseError<T = HttpResponse<any>> extends Error {
  constructor(public readonly response: HttpResponse<T>) {
    super(`${response.status} ${response.statusText}: ${response.url}`);
    this.name = 'HttpResponseError';
  }
}
