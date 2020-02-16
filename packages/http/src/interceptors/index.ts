import { createErrorInterceptor } from './errorInterceptor';
import { createLoggingInterceptor } from './loggingInterceptor';
import { createRedirectionInterceptor } from './redirectionInterceptor';

export const Interceptors = {
  createErrorInterceptor,
  createLoggingInterceptor,
  createRedirectionInterceptor,
};
