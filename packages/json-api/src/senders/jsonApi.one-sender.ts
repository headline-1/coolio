import { HttpClient, HttpOptions } from '@coolio/http';
import { AnyData, RawResponse } from '../types';
import { JsonResponse } from '../responses';
import { resolveRelationships } from '../helpers';
import { JsonApiRequestData } from '../requestData';
import { JsonApiSender } from './jsonApi.sender';

export class JsonApiOneSender<D extends AnyData, M extends Record<string, unknown>> extends JsonApiSender {
  constructor(httpClient: HttpClient, requestData: JsonApiRequestData) {
    super(httpClient, requestData);
  }

  async send(options?: HttpOptions): Promise<JsonResponse<RawResponse<D, M>>> {
    const response = await this.request<RawResponse<D, M>>(options);
    const body = (await response.parsedBody()) || undefined;
    if (body) {
      let responseData = body.data;

      if (this.resolveIncludedRelationships && body.included) {
        responseData = resolveRelationships(responseData, body.included);
      }

      body.data = responseData;
    }
    return new JsonResponse(body, response);
  }
}
