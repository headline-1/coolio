import { HttpClient, HttpOptions, HttpResponse } from '@coolio/http';
import isNil from 'lodash/isNil';
import mapValues from 'lodash/mapValues';
import { RequestBuilder } from './jsonApi.builder';
import { mergeElementData, resolveRelationships } from './jsonApi.common';
import { Headers, IncludedGroups, IncludedGroupsSchema, MergedData, RawListResponse } from './jsonApi.interface';

export class JsonListResponse<Raw extends RawListResponse<any, any>, I extends IncludedGroups = {}> {

  constructor(
    readonly raw: Raw,
    readonly limit: number,
    readonly offset: number | undefined,
    private readonly rawIncludedGroups: I,
    readonly response: HttpResponse<Raw>,
  ) {
  }

  get elements(): MergedData<Raw['data']> {
    return this.raw.data.map(mergeElementData) as any;
  }

  get meta(): Raw['meta'] {
    return this.raw.meta;
  }

  get included(): { [k in keyof I]: MergedData<I[k]> } {
    return mapValues(this.rawIncludedGroups, data => data.map(mergeElementData)) as any;
  }
}

export class GetListBuilder<Raw extends RawListResponse<any, any>, I extends IncludedGroups = {}>
  extends RequestBuilder<JsonListResponse<Raw, I>> {

  private previousResponse?: JsonListResponse<Raw, I>;
  private includedGroups: IncludedGroupsSchema = {};

  constructor(private readonly httpClient: HttpClient, uri: string) {
    super(uri, { sort: true, pagination: true });
  }

  addToResponse(response: JsonListResponse<Raw, I> | undefined): this {
    this.previousResponse = response;
    return this;
  }

  groupIncluded<Groups extends IncludedGroupsSchema>(
    groups: Groups,
  ): GetListBuilder<Raw, IncludedGroups<Groups>> {
    this.includedGroups = groups;
    return this as any;
  }

  resolveIncluded(resolveIncluded?: boolean): this {
    this.resolveIncludedRelationships = resolveIncluded === undefined ? true : resolveIncluded;
    return this;
  }

  send(options?: HttpOptions): Promise<JsonListResponse<Raw, I>> {
    return this.httpClient.get<Raw>(this.requestUriString, {
      ...options,
      headers: { ...Headers, ...options && options.headers },
    })
      .then(async response => {
        const { limit, offset } = this;
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

        const includedGroups: I = {} as any;
        if (body.included) {
          const groups = Object.entries(this.includedGroups);
          for (const [name, { type }] of groups) {
            includedGroups[name as keyof I] = body.included.filter(i => i.type === type) as any;
          }
        }

        return new JsonListResponse<Raw, I>(body, limit, offset, includedGroups, response);
      });
  }
}
