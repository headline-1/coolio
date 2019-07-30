import { HttpResponse } from '@coolio/http';
import { mergeElementData } from './jsonApi.common';
import { MergedData, RawResponse } from './jsonApi.interface';

export class JsonResponse<Raw extends RawResponse<any, any>> {

  constructor(public readonly raw: Raw, public readonly response: HttpResponse<Raw>) {
  }

  get element(): MergedData<Raw['data']> {
    return this.raw && mergeElementData(this.raw.data);
  }

  get meta(): Raw['meta'] {
    return this.raw && this.raw.meta;
  }
}
