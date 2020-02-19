import { NormalizedHttpOptions } from './httpClient.types';

const symbol = Symbol('HttpRequestError');

export class HttpRequestError<T = any> extends Error {
  private readonly __symbol = symbol;

  constructor(public readonly options: NormalizedHttpOptions, message?: string) {
    super(`${options.method} ${options.url}${message ? `: ${message}` : ''}`);
    this.name = 'HttpRequestError';
  }
}

export const isHttpRequestError = (error: any): error is HttpRequestError => error?.__symbol === symbol;
