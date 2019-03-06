import { HttpClient } from '@coolio/http';
import { GetBuilder } from './jsonApi.get';
import { GetListBuilder } from './jsonApi.getList';
import { AnyData, ListMetaData, RawListResponse, RawResponse } from './jsonApi.interface';
import { PostBuilder } from './jsonApi.post';
import { RemoveBuilder } from './jsonApi.remove';
import { UpdateBuilder } from './jsonApi.update';

export class JsonApiClient {
  constructor(public readonly httpClient: HttpClient) {
  }

  get<D extends AnyData, M extends {} = {}>(uri: string) {
    return new GetBuilder<RawResponse<D, M>>(this.httpClient, uri);
  }

  getList<D extends AnyData, M extends ListMetaData = ListMetaData>(uri: string) {
    return new GetListBuilder<RawListResponse<D, M>>(this.httpClient, uri);
  }

  post<D extends AnyData, M extends {} = {}>(uri: string) {
    return new PostBuilder<RawResponse<D, M>>(this.httpClient, uri);
  }

  remove<D extends AnyData, M extends {} = {}>(uri: string) {
    return new RemoveBuilder<RawResponse<D, M>>(this.httpClient, uri);
  }

  put<D extends AnyData, M extends {} = {}>(uri: string) {
    return new UpdateBuilder<RawResponse<D, M>>(this.httpClient, uri, 'PUT');
  }

  patch<D extends AnyData, M extends {} = {}>(uri: string) {
    return new UpdateBuilder<RawResponse<D, M>>(this.httpClient, uri, 'PATCH');
  }
}
