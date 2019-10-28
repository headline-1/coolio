import {
  HttpCode,
  HttpFetch,
  HttpInterceptor,
  HttpResponse,
  HttpResponseError,
  isHttpResponseError,
  NormalizedHttpOptions
} from '@coolio/http';
import { AuthInterceptorOptions } from './authInterceptor.types';

export const isUnauthorizedError = (error: HttpResponseError) => error.response.status === HttpCode.UNAUTHORIZED;

export const createAuthInterceptor = ({
  reauthorize,
  onAuthorizationFailure,
  canAuthorize,
  setAuthorizationData,
}: AuthInterceptorOptions): HttpInterceptor => {
  const pendingRequests: (() => void)[] = [];
  let isAuthInProgress = false;
  let isRequestInProgress = false;

  const deferRequest = <T extends any>(promise: () => Promise<T>): Promise<T> =>
    new Promise((resolve, reject) => {
      pendingRequests.push(() => {
        promise().then(resolve, reject);
      });
    });

  const requestAuth = async () => {
    try {
      isAuthInProgress = true;
      await reauthorize();
      isAuthInProgress = false;
    } catch (err) {
      pendingRequests.splice(0, pendingRequests.length);
      isAuthInProgress = isRequestInProgress = false;
      await onAuthorizationFailure(err);
    }
  };

  const resume = () => {
    if (isRequestInProgress) {
      return;
    }
    const pendingRequest = pendingRequests.shift();
    if (pendingRequest) {
      pendingRequest();
    }
  };

  const processRequest = async <T extends any>(
    promise: HttpFetch<T>,
    options: NormalizedHttpOptions,
  ): Promise<HttpResponse<T>> => {
    if (isAuthInProgress || isRequestInProgress) {
      return deferRequest(() => processRequest(promise, options));
    }
    isRequestInProgress = true;
    try {
      if (await Promise.resolve(canAuthorize(options))) {
        await Promise.resolve(setAuthorizationData(options));
      }
      const response = await promise();

      // Resume pending requests
      isRequestInProgress = false;
      resume();
      return response;
    } catch (error) {
      // Mark request not in progress on failure
      isRequestInProgress = false;
      throw error;
    }
  };

  return <T extends any>(
    promise: HttpFetch<T>,
    options: NormalizedHttpOptions,
  ): HttpFetch<T> => async () => {
    try {
      return await processRequest(promise, options);
    } catch (error) {
      if (!isHttpResponseError(error) || !isUnauthorizedError(error)) {
        resume();
        throw error;
      }
      await requestAuth();
    }
    return await processRequest(promise, options);
  };
};
