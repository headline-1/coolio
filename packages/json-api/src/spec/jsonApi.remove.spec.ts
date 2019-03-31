import { JsonApiClient } from '../jsonApi.client';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { DEFAULT_HEADERS_MOCK, DELETE_MOCK } from './jsonApi.mocks';

describe('JSON API Remove', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('should produce correct request with RemoveBuilder', async () => {
    const builder = new JsonApiClient(mock.httpClient).remove('');
    expect(builder.requestUriString).toEqual('');
    builder.uri = DELETE_MOCK.URI;
    expect(builder.parameters).toEqual({});
    expect(builder.requestUriString).toEqual(DELETE_MOCK.URI);

    await builder.send();

    expect(mock.requestHandler.lastRequest()).toEqual({
      url: DELETE_MOCK.URI,
      method: 'DELETE',
      headers: DEFAULT_HEADERS_MOCK,
    });
  });
});
