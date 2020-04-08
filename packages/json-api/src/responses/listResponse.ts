import { HttpResponse } from '@coolio/http';
import mapValues from 'lodash/mapValues';
import { mergeElementData } from '../helpers';
import { IncludedGroups, MergedData, RawListResponse } from '../types';

export class JsonListResponse<Raw extends RawListResponse<any, any>, I extends IncludedGroups = {}> {

  constructor(
    readonly raw: Raw,
    readonly response: HttpResponse<Raw>,
    readonly limit: number,
    readonly offset: number | undefined,
    private readonly rawIncludedGroups: I,
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
