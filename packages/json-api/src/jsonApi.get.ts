import { HttpClient, HttpOptions } from '@coolio/http';
import { RequestBuilder } from './jsonApi.builder';
import { Headers, RawResponse } from './jsonApi.interface';
import { JsonResponse } from './jsonApi.response';

export class GetBuilder<Raw extends RawResponse<any, any>> extends RequestBuilder<JsonResponse<Raw>> {

  constructor(private httpClient: HttpClient, uri: string) {
    super(uri, { sort: true });
  }

  send(options?: HttpOptions): Promise<JsonResponse<Raw>> {
    return this.httpClient.get<Raw>(this.uri, {
      ...options,
      query: this.parameters,
      headers: { ...Headers, ...options && options.headers },
    })
      .then(response => this.parseResponse(response));
  }
}
