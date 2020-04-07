import { DEFAULT_REQUEST_TIMEOUT_MS } from '@coolio/http';
import { JsonApiClient } from '../jsonApiClient';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { DEFAULT_HEADERS_MOCK, DELETE_MOCK } from './jsonApi.mocks';

describe('JSON API Remove', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('should produce correct request with RemoveBuilder', async () => {
    const builder = new JsonApiClient(mock.httpClient).remove(DELETE_MOCK.URI);
    expect(builder.uri).toEqual(DELETE_MOCK.URI);
    expect(builder.parameters).toEqual({});

    await builder.send();

    expect(mock.requestHandler.lastRequest()).toEqual({
      url: DELETE_MOCK.URI,
      method: 'DELETE',
      query: {},
      headers: DEFAULT_HEADERS_MOCK,
      timeout: DEFAULT_REQUEST_TIMEOUT_MS,
    });
  });
});
