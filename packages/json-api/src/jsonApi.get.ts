import { HttpClient, HttpOptions } from '@coolio/http';
import { RequestBuilder } from './jsonApi.builder';
import { resolveRelationships } from './jsonApi.common';
import { Headers, RawResponse } from './jsonApi.interface';
import { JsonResponse } from './jsonApi.response';

export class GetBuilder<Raw extends RawResponse<any, any>> extends RequestBuilder<JsonResponse<Raw>> {

  private resolveIncludedRelationships = false;

  constructor(private httpClient: HttpClient, uri: string) {
    super(uri, { sort: true });
  }

  resolveIncluded = (resolveIncluded?: boolean): this => {
    this.resolveIncludedRelationships = resolveIncluded === undefined ? true : resolveIncluded;
    return this;
  };

  send(options?: HttpOptions): Promise<JsonResponse<Raw>> {
    return this.httpClient.get<Raw>(this.requestUriString, {
      ...options,
      headers: { ...Headers, ...options && options.headers },
    })
      .then((response: Raw) => {
        const { included } = response;
        let responseData = response.data;

        if (this.resolveIncludedRelationships && included) {
          responseData = resolveRelationships(responseData, included);
        }

        return new JsonResponse(response);
      });
  }
}
