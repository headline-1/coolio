import { HttpInterceptorFunction } from '../httpClient.types';
import { HttpResponseError } from '../httpResponseError';

export const createErrorInterceptor = (): HttpInterceptorFunction => request => async () => {
  const response = await request();
  if(response.status>=400){
    throw new HttpResponseError(response);
  }
  return response;
};
