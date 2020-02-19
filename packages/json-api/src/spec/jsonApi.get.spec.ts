import { ContentType, createHttpResponse, DEFAULT_REQUEST_TIMEOUT_MS, HttpCode } from '@coolio/http';
import { FilterOperator, JsonApiClient, SortOrder } from '..';
import { Data } from '../jsonApi.interface';
import { JsonResponse } from '../jsonApi.response';
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
    expect(getBuilder.uri).toEqual(GET_MOCK.URI);
    expect(getBuilder.parameters).toEqual({});

    getBuilder
      .filter('element', 'value')
      .filter('elementEq', 'valueEq', FilterOperator.EQUALS)
      .filter('elementNeq', 'valueNeq', FilterOperator.NOT_EQUALS)
      .filter('elementLike', 'valueLike', FilterOperator.LIKE)
      .filter('elementGt', 3, FilterOperator.GREATER)
      .filter('elementGte', 5, FilterOperator.GREATER_OR_EQUAL)
      .filter('elementLt', -3, FilterOperator.LOWER)
      .filter('elementLt', -5, FilterOperator.LOWER_OR_EQUAL)
      .sort('sortAsc', SortOrder.ASCENDING)
      .sort('sortDesc', SortOrder.DESCENDING);

    expect(getBuilder.parameters).toEqual({
      'filter[element]': 'value',
      'filter[elementEq][EQ]': 'valueEq',
      'filter[elementNeq][NEQ]': 'valueNeq',
      'filter[elementLike][LIKE]': 'valueLike',
      'filter[elementGt][GT]': '3',
      'filter[elementGte][GE]': '5',
      'filter[elementLt][LE]': '-5',
      'filter[elementLt][LT]': '-3',
      'sort': 'sortAsc,-sortDesc',
    });

    const result = await getBuilder.send();
    expect(result.raw).toEqual(GET_MOCK.RAW);
    expect(mock.requestHandler.lastRequest()).toEqual({
      url: 'https://example.com/list/123?filter[element]=value&filter[elementEq][EQ]=valueEq&filter[elementNeq][NEQ]=valueNeq&filter[elementLike][LIKE]=valueLike&filter[elementGt][GT]=3&filter[elementGte][GE]=5&filter[elementLt][LT]=-3&filter[elementLt][LE]=-5&sort=sortAsc%2C-sortDesc',
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
        sort: 'sortAsc,-sortDesc'
      },
      method: 'GET',
      timeout: DEFAULT_REQUEST_TIMEOUT_MS,
      headers: DEFAULT_HEADERS_MOCK,
    });
  });
});
