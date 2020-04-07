import { HttpClient, HttpOptions } from '@coolio/http';
import isNil from 'lodash/isNil';
import { AnyData, IncludedGroups, IncludedGroupsSchema, RawListResponse } from '../types';
import { JsonListResponse } from '../responses';
import { resolveRelationships } from '../helpers';
import { JsonApiSender } from './jsonApi.sender';
import { JsonApiRequestData } from '../requestData';

export class JsonApiManySender<D extends AnyData, M, I extends IncludedGroups = {}> extends JsonApiSender {
  private previousResponse?: JsonListResponse<RawListResponse<D, M>, I>;
  private includedGroups: IncludedGroupsSchema = {};

  constructor(httpClient: HttpClient, requestData: JsonApiRequestData) {
    super(httpClient, requestData);
    requestData.options.pagination = true;
  }

  addToResponse(response: JsonListResponse<RawListResponse<D, M>, I> | undefined): this {
    this.previousResponse = response;
    return this as any;
  }

  groupIncluded<Groups extends IncludedGroupsSchema>(groups: Groups): JsonApiManySender<D, M, IncludedGroups<Groups>> {
    this.includedGroups = groups;
    return this as any;
  }

  async send(options?: HttpOptions): Promise<JsonListResponse<RawListResponse<D, M>, I>> {
    const response = await this.request<RawListResponse<D, M>>(options);
    const { limit, offset } = this.requestData;
    const body = await response.parsedBody();
    let newData = body.data;

    if (this.resolveIncludedRelationships && body.included) {
      newData = resolveRelationships(newData, body.included);
    }

    if (this.previousResponse && !isNil(offset)) {
      // Clone the old data array and replace the part of results with fresh data we've just downloaded
      const data = this.previousResponse.raw.data.slice(0);

      data.splice(offset * limit, limit, ...newData);
      body.data = data;

      // Join included parts
      const oldIncluded = this.previousResponse.raw.included;
      if (oldIncluded) {
        body.included = (body.included || []).concat(oldIncluded);
      }
    }

    const groups: I = {} as any;
    if (body.included) {
      for (const name in this.includedGroups) {
        if (this.includedGroups.hasOwnProperty(name)) {
          const { type } = this.includedGroups[name];
          groups[name as keyof I] = body.included.filter(included => included.type === type) as any;
        }
      }
    }

    return new JsonListResponse<RawListResponse<D, M>, I>(body, response, limit, offset, groups);
  }
}
