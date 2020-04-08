import { HttpResponse } from '@coolio/http';
import { mergeElementData } from '../helpers';
import { MergedData, RawResponse } from '../types';

export class JsonResponse<Raw extends RawResponse<any, any>> {

  constructor(
    public readonly raw: Raw,
    public readonly response: HttpResponse<Raw>,
    ) {
  }

  get element(): MergedData<Raw['data']> {
    return this.raw && mergeElementData(this.raw.data);
  }

  get meta(): Raw['meta'] {
    return this.raw && this.raw.meta;
  }
}
