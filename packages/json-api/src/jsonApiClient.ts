import { HttpClient, HttpMethod } from '@coolio/http';
import { AnyData } from './types';
import { CreationalRequestBuilder, RequestBuilder } from './requestBuilders';

export class JsonApiClient {
  constructor(public readonly httpClient: HttpClient) {
  }

  get<D extends AnyData, M extends {} = {}>(uri: string) {
    return new RequestBuilder<D, M>(this.httpClient, { method: HttpMethod.GET, sorting: true }, uri);
  }

  post<D extends AnyData, M extends {} = {}>(uri: string) {
    return new CreationalRequestBuilder<D, M>(this.httpClient, { method: HttpMethod.POST }, uri);
  }

  delete<D extends AnyData, M extends {} = {}>(uri: string) {
    return new RequestBuilder<D, M>(this.httpClient, { method: HttpMethod.DELETE }, uri);
  }

  put<D extends AnyData, M extends {} = {}>(uri: string) {
    return new CreationalRequestBuilder<D, M>(this.httpClient, { method: HttpMethod.PUT }, uri);
  }

  patch<D extends AnyData, M extends {} = {}>(uri: string) {
    return new CreationalRequestBuilder<D, M>(this.httpClient, { method: HttpMethod.PATCH }, uri);
  }
}
