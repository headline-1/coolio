import { ContentType, createHttpResponse, DEFAULT_REQUEST_TIMEOUT_MS, HttpCode } from '@coolio/http';
import { JsonApiClient, SortOrder } from '../';
import { JsonListResponse } from '../responses';
import { Data } from '../types';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { DefaultHeadersMock, DeleteMock, GetListMock, GetMock } from './jsonApi.mocks';

describe('JSON API RequestBuilder', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('produces correct request for single resource', async () => {
    const client = new JsonApiClient(mock.httpClient);
    const result = await client.get<Data<{}>>(GetMock.uri)
      .filter('element', 'value')
      .filter(['elementEq', 'EQ'], 'valueEq')
      .filter(['elementNeq', 'NEQ'], 'valueNeq')
      .filter(['elementGt', 'GT'], 3)
      .filter(['elementGt', 'GT'], -3)
      .sort('sortAsc', SortOrder.ASCENDING)
      .sort('sortDesc', SortOrder.DESCENDING)
      .pageLimit(2)
      .pageOffset(10)
      .expectOne()
      .send();

    expect(result.raw).toEqual(GetMock.raw);
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
      headers: DefaultHeadersMock,
    });
  });

  it('produces correct request for list of resources', async () => {
    const result = await new JsonApiClient(mock.httpClient)
      .get<Data<{}>>(GetListMock.uri)
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
    expect(result.raw).toEqual(GetListMock.raw);
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
      headers: DefaultHeadersMock,
    });
  });


  it('produces correct request with RemoveBuilder', async () => {
    await new JsonApiClient(mock.httpClient)
      .delete(DeleteMock.uri)
      .expectOne()
      .send();

    expect(mock.requestHandler.lastRequest()).toEqual({
      url: DeleteMock.uri,
      method: 'DELETE',
      query: {},
      headers: DefaultHeadersMock,
      timeout: DEFAULT_REQUEST_TIMEOUT_MS,
    });
  });

  it('merges previous results for list of resources when #addToResponse is used', async () => {
    const responseWithOneElement = new JsonListResponse(GetListMock.raw, createHttpResponse({
      headers: { 'content-type': ContentType.VND_JSON },
      status: HttpCode.OK,
      body: JSON.stringify(GetListMock.raw),
    }), 1, 0, {});
    const result = await new JsonApiClient(mock.httpClient).get<Data<{}, {}>>(GetListMock.uri)
      .pageLimit(1)
      .pageOffset(1)
      .expectMany()
      .addToResponse(responseWithOneElement)
      .send();
    expect(result.raw.data).toHaveLength(2);
  });
});
