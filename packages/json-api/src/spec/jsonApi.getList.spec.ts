import { ContentType, createHttpResponse, HttpCode } from '@coolio/http';
import { FilterOperator, JsonApiClient, SortOrder } from '../';
import { JsonListResponse } from '../jsonApi.getList';
import { Data } from '../jsonApi.interface';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { DEFAULT_HEADERS_MOCK, GET_LIST_MOCK } from './jsonApi.mocks';

describe('JSON API Get List', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('should correctly parse List JSON API response', () => {
    const { raw, elements, offset, limit } = new JsonListResponse(GET_LIST_MOCK.RAW, 10, 15, {}, createHttpResponse({
      headers: new Headers({ 'content-type': ContentType.VND_JSON }),
      status: HttpCode.OK,
      body: JSON.stringify(GET_LIST_MOCK.RAW),
    }));
    expect(raw).toEqual(GET_LIST_MOCK.RAW);
    expect(elements).toEqual(GET_LIST_MOCK.PARSED);
    expect(offset).toEqual(15);
    expect(limit).toEqual(10);
  });

  it('should produce correct request with GetListBuilder', async () => {
    const getListBuilder = new JsonApiClient(mock.httpClient).getList<Data<{}>>(GET_LIST_MOCK.URI);
    // Default page limit and offset is always applied
    expect(getListBuilder.uri).toEqual(GET_LIST_MOCK.URI);
    expect(getListBuilder.parameters).toEqual({
      'page[limit]': '10',
      'page[number]': '1',
    });

    getListBuilder
      .filter('element', 'value')
      .filter('elementEq', 'valueEq', FilterOperator.EQUALS)
      .filter('elementNeq', 'valueNeq', FilterOperator.NOT_EQUALS)
      .filter('elementLike', 'valueLike', FilterOperator.LIKE)
      .filter('elementGt', 3, FilterOperator.GREATER)
      .filter('elementGte', 5, FilterOperator.GREATER_OR_EQUAL)
      .filter('elementLt', -3, FilterOperator.LOWER)
      .filter('elementLt', -5, FilterOperator.LOWER_OR_EQUAL)
      .sort('sortAsc', SortOrder.ASCENDING)
      .sort('sortDesc', SortOrder.DESCENDING)
      .pageNumber(2)
      .pageOffset(3)
      .pageLimit(10);

    expect(getListBuilder.parameters).toEqual({
      'filter[element]': 'value',
      'filter[elementEq][EQ]': 'valueEq',
      'filter[elementNeq][NEQ]': 'valueNeq',
      'filter[elementLike][LIKE]': 'valueLike',
      'filter[elementGt][GT]': '3',
      'filter[elementGte][GE]': '5',
      'filter[elementLt][LE]': '-5',
      'filter[elementLt][LT]': '-3',
      'sort': 'sortAsc,-sortDesc',
      'page[limit]': '10',
      'page[offset]': '30',
    });

    const result = await getListBuilder.send();
    expect(result.raw).toEqual(GET_LIST_MOCK.RAW);
    expect(mock.requestHandler.lastRequest()).toEqual({
      url: 'https://example.com/list?filter[element]=value&filter[elementEq][EQ]=valueEq&filter[elementNeq][NEQ]=valueNeq&filter[elementLike][LIKE]=valueLike&filter[elementGt][GT]=3&filter[elementGte][GE]=5&filter[elementLt][LT]=-3&filter[elementLt][LE]=-5&sort=sortAsc%2C-sortDesc&page[limit]=10&page[offset]=30',
      query: {
        filter: {
          element: 'value',
          elementEq: {
            EQ: 'valueEq'
          },
          elementGt: {
            GT: '3'
          },
          elementGte: {
            GE: '5'
          },
          elementLike: {
            LIKE: 'valueLike'
          },
          elementLt: {
            LE: '-5',
            LT: '-3'
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
      headers: DEFAULT_HEADERS_MOCK,
    });
  });

  it('should correctly merge previous results with GetListBuilder when #addToResponse is used', async () => {
    const responseWithOneElement = new JsonListResponse(GET_LIST_MOCK.RAW, 1, 0, {}, createHttpResponse({
      headers: new Headers({ 'content-type': ContentType.VND_JSON }),
      status: HttpCode.OK,
      body: JSON.stringify(GET_LIST_MOCK.RAW),
    }));
    const result = await new JsonApiClient(mock.httpClient).getList<Data<{}, {}>>(GET_LIST_MOCK.URI)
      .pageLimit(1)
      .pageOffset(1)
      .addToResponse(responseWithOneElement)
      .send();
    expect(result.raw.data).toHaveLength(2);
  });
});
