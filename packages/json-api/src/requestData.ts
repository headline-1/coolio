import isNil from 'lodash/isNil';
import { HttpMethod, HttpOptions } from '@coolio/http';
import { Headers } from './types';

export const DEFAULT_RESOURCE_LIMIT = 10;

export interface RequestBuilderOptions {
  method: HttpMethod;
  sorting?: boolean;
  pagination?: boolean;
}

export class JsonApiRequestData {
  query: Record<string, any> = {};
  sort: string[] = [];
  body: any;
  limit = DEFAULT_RESOURCE_LIMIT;
  offset?: number;
  page = 1;

  constructor(
    public readonly uri: string,
    public readonly options: RequestBuilderOptions
  ) {
    let params;
    [this.uri, params] = uri.split('?');
    if (params) {
      params.split('&').forEach(param => {
        const [key, value] = param.split('=');
        switch (key) {
          case'sort':
            this.sort.push(...value.split(','));
            break;
          case 'page[number]':
            this.page = parseInt(value, 10);
            break;
          case 'page[limit]':
            this.limit = parseInt(value, 10);
            break;
          case 'page[offset]':
            this.offset = parseInt(value, 10);
            break;
          default:
            this.query[key] = decodeURIComponent(value);
            break;
        }
      });
    }
  }

  getRequestOptions(options?: HttpOptions) {
    return {
      ...options,
      method: this.options.method,
      query: { ...this.getParameters(), ...options?.query },
      headers: { ...Headers, ...options?.headers },
      body: this.body,
    };
  }

  private getParameters(): Record<string, string> {
    const { options, query, sort, limit, offset, page } = this;
    const params = { ...query };
    if (options.sorting && sort.length) {
      params.sort = sort.join(',');
    }
    if (options.pagination) {
      params['page[limit]'] = limit.toString();

      if (isNil(offset)) {
        params['page[number]'] = page.toString();
      } else {
        params['page[offset]'] = (offset * limit).toString();
      }
    }
    return params;
  }
}
