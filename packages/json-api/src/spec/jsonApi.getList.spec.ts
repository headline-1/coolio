import { FilterOperator, JsonApiClient, SortOrder } from '../';
import { JsonListResponse } from '../jsonApi.getList';
import { Data } from '../jsonApi.interface';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { DEFAULT_HEADERS_MOCK, GET_LIST_MOCK } from './jsonApi.mocks';

const DEFAULT_PARAMS_QUERY_STRING = '?page[limit]=10&page[number]=1';

describe('JSON API Get List', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('should correctly parse List JSON API response', () => {
    const { raw, elements, offset, limit } = new JsonListResponse(GET_LIST_MOCK.RAW, 10, 15, {});
    expect(raw).toEqual(GET_LIST_MOCK.RAW);
    expect(elements).toEqual(GET_LIST_MOCK.PARSED);
    expect(offset).toEqual(15);
    expect(limit).toEqual(10);
  });

  it('should produce correct request with GetListBuilder', async () => {
    const getListBuilder = new JsonApiClient(mock.httpClient).getList<Data<{}>>('');
    // Default page limit and offset is always applied
    expect(getListBuilder.requestUriString).toEqual(DEFAULT_PARAMS_QUERY_STRING);
    getListBuilder.uri = GET_LIST_MOCK.URI;
    expect(getListBuilder.parameters).toEqual({
      'page[limit]': '10',
      'page[number]': '1',
    });
    expect(getListBuilder.requestUriString).toEqual(GET_LIST_MOCK.URI + DEFAULT_PARAMS_QUERY_STRING);

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

    expect(getListBuilder.requestUriString).toEqual(
      GET_LIST_MOCK.URI +
      '?filter[element]=value' +
      '&filter[elementEq][EQ]=valueEq' +
      '&filter[elementNeq][NEQ]=valueNeq' +
      '&filter[elementLike][LIKE]=valueLike' +
      '&filter[elementGt][GT]=3' +
      '&filter[elementGte][GE]=5' +
      '&filter[elementLt][LT]=-3' +
      '&filter[elementLt][LE]=-5' +
      '&sort=sortAsc,-sortDesc' +
      '&page[limit]=10' +
      '&page[offset]=30',
    );

    const result = await getListBuilder.send();
    expect(result.raw).toEqual(GET_LIST_MOCK.RAW);
    expect(mock.requestHandler.lastRequest()).toEqual({
      url: getListBuilder.requestUriString,
      method: 'GET',
      headers: DEFAULT_HEADERS_MOCK,
    });
  });

  it('should correctly merge previous results with GetListBuilder when #addToResponse is used', async () => {
    const responseWithOneElement = new JsonListResponse(GET_LIST_MOCK.RAW, 1, 0, {});
    const result = await new JsonApiClient(mock.httpClient).getList<Data<{}, {}>>(GET_LIST_MOCK.URI)
      .pageLimit(1)
      .pageOffset(1)
      .addToResponse(responseWithOneElement)
      .send();
    expect(result.raw.data).toHaveLength(2);
  });
});
