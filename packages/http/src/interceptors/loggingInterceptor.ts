import { HttpInterceptorFunction, HttpRequestOptions, HttpResponse } from '../httpClient.types';

export interface Log {
  request: HttpRequestOptions;
  response?: HttpResponse;
  error?: any;
  duration: number;
}

export interface LoggingInterceptorOptions {
  logger: (log: Log) => void;
}

export const createLoggingInterceptor = ({
  logger,
}: LoggingInterceptorOptions): HttpInterceptorFunction => (request, options) => async () => {
  const start = Date.now();
  try {
    const response = await request();
    logger({
      request: options,
      response,
      duration: Date.now() - start,
    });
    return response;
  } catch (error) {
    logger({
      request: options,
      error,
      duration: Date.now() - start,
    });
    throw error;
  }
};
