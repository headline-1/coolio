import { ContentType, createHttpResponse, DEFAULT_REQUEST_TIMEOUT_MS, HttpCode } from '@coolio/http';
import { JsonApiClient, SortOrder } from '../';
import { JsonListResponse } from '../responses';
import { Data } from '../types';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { DEFAULT_HEADERS_MOCK, GET_LIST_MOCK } from './jsonApi.mocks';

describe('JSON API Get List', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('should correctly parse List JSON API response', () => {
    const { raw, elements, offset, limit } = new JsonListResponse(GET_LIST_MOCK.RAW, createHttpResponse({
      headers: { 'content-type': ContentType.VND_JSON },
      status: HttpCode.OK,
      body: JSON.stringify(GET_LIST_MOCK.RAW),
    }), 10, 15, {});
    expect(raw).toEqual(GET_LIST_MOCK.RAW);
    expect(elements).toEqual(GET_LIST_MOCK.PARSED);
    expect(offset).toEqual(15);
    expect(limit).toEqual(10);
  });

  it('should produce correct request with GetListBuilder', async () => {
    const result =await new JsonApiClient(mock.httpClient).get<Data<{}>>(GET_LIST_MOCK.URI)
      .filter('element', 'value')
      .filter(['elementEq', 'EQ'], 'valueEq')
      .filter(['elementNeq', 'NEQ'], 'valueNeq')
      .filter(['elementGt', 'GT'], 3)
      .filter(['elementGt', 'GT'], -3)
      .sort('sortAsc', SortOrder.ASCENDING)
      .sort('sortDesc', SortOrder.DESCENDING)
      .pageNumber(2)
      .pageOffset(3)
      .pageLimit(10)
      .expectMany()
      .send();
    expect(result.raw).toEqual(GET_LIST_MOCK.RAW);
    expect(mock.requestHandler.lastRequest()).toEqual({
      url: 'https://example.com/list?filter[element]=value&filter[elementEq][EQ]=valueEq&filter[elementNeq][NEQ]=valueNeq&filter[elementGt][GT]=-3&sort=sortAsc%2C-sortDesc&page[limit]=10&page[offset]=30',
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
        page: {
          limit: '10',
          offset: '30'
        },
        sort: 'sortAsc,-sortDesc'
      },
      method: 'GET',
      timeout: DEFAULT_REQUEST_TIMEOUT_MS,
      headers: DEFAULT_HEADERS_MOCK,
    });
  });

  it('should correctly merge previous results with GetListBuilder when #addToResponse is used', async () => {
    const responseWithOneElement = new JsonListResponse(GET_LIST_MOCK.RAW, createHttpResponse({
      headers: { 'content-type': ContentType.VND_JSON },
      status: HttpCode.OK,
      body: JSON.stringify(GET_LIST_MOCK.RAW),
    }), 1, 0, {});
    const result = await new JsonApiClient(mock.httpClient).get<Data<{}, {}>>(GET_LIST_MOCK.URI)
      .pageLimit(1)
      .pageOffset(1)
      .expectMany()
      .addToResponse(responseWithOneElement)
      .send();
    expect(result.raw.data).toHaveLength(2);
  });
});
