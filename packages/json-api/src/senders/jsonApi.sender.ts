import { HttpClient, HttpOptions } from '@coolio/http';
import { JsonApiRequestData } from '../requestData';

export abstract class JsonApiSender {
  resolveIncludedRelationships = false;

  protected constructor(private httpClient: HttpClient, protected requestData: JsonApiRequestData) {
  }

  request<T>(options?: HttpOptions) {
    return this.httpClient.request<T>(this.requestData.uri, this.requestData.getRequestOptions(options));
  }

  resolveIncluded(resolveIncluded?: boolean): this {
    this.resolveIncludedRelationships = resolveIncluded === undefined || resolveIncluded;
    return this;
  }

  abstract send(options?: HttpOptions): Promise<any>;
}
