import { mergeElementData } from './jsonApi.common';
import { MergedData, RawResponse } from './jsonApi.interface';

export class JsonResponse<Raw extends RawResponse<any, any>> {

  constructor(public raw: Raw) {
  }

  get element(): MergedData<Raw['data']> {
    return mergeElementData(this.raw.data);
  }

  get meta(): Raw['meta'] {
    return this.meta;
  }
}
