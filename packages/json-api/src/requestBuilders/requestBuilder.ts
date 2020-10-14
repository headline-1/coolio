import { HttpClient } from '@coolio/http';
import isNil from 'lodash/isNil';
import { AnyData, ListMetaData, SortOrder } from '../types';
import { JsonApiOneSender } from '../senders/jsonApi.one-sender';
import { JsonApiManySender } from '../senders/jsonApi.many-sender';
import { JsonApiRequestData, RequestBuilderOptions } from '../requestData';

/**
 * RequestBuilder is responsible for setting request options part of API call.
 * You can configure filters, sorting methods, pagination and then call {@link expectMany} or {@link expectOne}
 * in order to send specify response processing params and finally send the request.
 */
export class RequestBuilder<D extends AnyData, M extends Record<string, unknown> = Record<never, never>> {
  protected readonly requestData: JsonApiRequestData;

  constructor(
    private readonly httpClient: HttpClient,
    options: RequestBuilderOptions,
    uri: string,
  ) {
    this.requestData = new JsonApiRequestData(uri, options);
  }

  parameter(
    key: string,
    value: any,
  ): this {
    if (key && !isNil(value)) {
      this.requestData.query[key] = value;
    }
    return this;
  }

  filter(
    key: string | string[],
    value: any,
  ): this {
    const queryKey = Array.isArray(key)
      ? (key.length ? `filter[${key.join('][')}]` : '')
      : `filter[${key}]`;
    return this.parameter(queryKey, value);
  }

  sort(key: string | undefined, order: SortOrder): this {
    if (!isNil(key)) {
      this.requestData.sort.push(order + key);
    }
    return this;
  }

  pageLimit(limit: number): this {
    this.requestData.limit = limit;
    return this;
  }

  pageOffset(offset: number): this {
    this.requestData.offset = offset;
    return this;
  }

  pageNumber(page: number | string | undefined): this {
    this.requestData.page = page ? Number(page) : 1;
    return this;
  }

  expectOne() {
    this.onBeforeExpect();
    return new JsonApiOneSender<D, M>(this.httpClient, this.requestData);
  }

  expectMany() {
    this.onBeforeExpect();
    return new JsonApiManySender<D, M & ListMetaData>(this.httpClient, this.requestData);
  }

  /**
   * Executed before {@link expectOne} and {@link expectMany}.
   * Can be overridden by inheriting classes.
   */
  protected onBeforeExpect() {
    // No-op. To be implemented by inheriting classes.
  }

}
