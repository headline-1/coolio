import { HttpClient, HttpOptions } from '@coolio/http';
import { RequestBuilder } from './jsonApi.builder';
import { Headers, RawResponse } from './jsonApi.interface';
import { JsonResponse } from './jsonApi.response';

export class RemoveBuilder<Raw extends RawResponse<any, any>> extends RequestBuilder<JsonResponse<Raw>> {

  constructor(private httpClient: HttpClient, uri: string) {
    super(uri, {});
  }

  send(options: HttpOptions = {}): Promise<JsonResponse<Raw>> {
    return this.httpClient.remove<Raw>(this.requestUriString, {
      ...options,
      headers: { ...Headers, ...options.headers },
    })
      .then((body: Raw) => new JsonResponse(body));
  }
}
