import { HttpInterceptorFunction } from '../httpClient.types';
import { HttpResponseError } from '../httpResponseError';

export interface RedirectionInterceptorOptions {
  redirectionLimit?: number;
}

export const createRedirectionInterceptor = ({
  redirectionLimit = 30
}: RedirectionInterceptorOptions = {}): HttpInterceptorFunction => (request, options) => async () => {
  let response = await request();
  let redirectionCount = 0;
  while (response.status >= 300 && response.status < 400) {
    if (++redirectionCount > redirectionLimit) {
      throw new HttpResponseError(
        response,
        `Redirection limit (of ${redirectionLimit} redirections) has been exceeded.`,
      );
    }
    const location = response.headers.get('location');
    if (location) {
      options.url = location;
      response = await request();
    } else {
      throw new HttpResponseError(
        response,
        `A response does not provide redirection location header.`,
      );
    }
  }
  return response;
};
