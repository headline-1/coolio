import { ContentType, createHttpResponse, DEFAULT_REQUEST_TIMEOUT_MS, HttpCode } from '@coolio/http';
import {  JsonApiClient, SortOrder } from '..';
import { Data } from '../types';
import { JsonResponse } from '../responses';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { DEFAULT_HEADERS_MOCK, GET_MOCK } from './jsonApi.mocks';

describe('JSON API Get', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('should correctly parse Get JSON API response', () => {
    const { raw, element } = new JsonResponse(GET_MOCK.RAW, createHttpResponse({
      headers: { 'content-type': ContentType.VND_JSON },
      status: HttpCode.OK,
      body: JSON.stringify(GET_MOCK.RAW),
    }));
    expect(raw).toEqual(GET_MOCK.RAW);
    expect(element).toEqual(GET_MOCK.PARSED);
  });

  it('should produce correct request with GetBuilder', async () => {
    const client = new JsonApiClient(mock.httpClient);
    const getBuilder = client.get<Data<{}>>(GET_MOCK.URI);

    getBuilder
      .filter('element', 'value')
      .filter(['elementEq', 'EQ'], 'valueEq')
      .filter(['elementNeq', 'NEQ'], 'valueNeq')
      .filter(['elementGt', 'GT'], 3)
      .filter(['elementGt', 'GT'], -3)
      .sort('sortAsc', SortOrder.ASCENDING)
      .sort('sortDesc', SortOrder.DESCENDING);

    const result = await getBuilder.expectOne().send();
    expect(result.raw).toEqual(GET_MOCK.RAW);
    expect(mock.requestHandler.lastRequest()).toEqual({
      url: 'https://example.com/list/123?filter[element]=value&filter[elementEq][EQ]=valueEq&filter[elementNeq][NEQ]=valueNeq&filter[elementGt][GT]=-3&sort=sortAsc%2C-sortDesc',
      query: {
        filter: {
          element: 'value',
          elementEq: {
            EQ: 'valueEq'
          },
          elementGt: {
            GT: '-3'
          },
          elementNeq: {
            NEQ: 'valueNeq'
          }
        },
        sort: 'sortAsc,-sortDesc'
      },
      method: 'GET',
      timeout: DEFAULT_REQUEST_TIMEOUT_MS,
      headers: DEFAULT_HEADERS_MOCK,
    });
  });
});
