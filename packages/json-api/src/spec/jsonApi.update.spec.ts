import { JsonApiClient } from '../jsonApi.client';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { DEFAULT_HEADERS_MOCK, GET_MOCK, PATCH_MOCK, PUT_MOCK } from './jsonApi.mocks';

describe('JSON API Put', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('should throw an error when type is missing in request', () => {
    expect(() => new JsonApiClient(mock.httpClient).put('').send()).toThrowError('Missing object type');
    expect(() => new JsonApiClient(mock.httpClient).patch('').send()).toThrowError('Missing object type');
  });

  it('should produce correct request with PutBuilder', async () => {
    const putBuilder = new JsonApiClient(mock.httpClient).put('');
    expect(putBuilder.requestUriString).toEqual('');
    putBuilder.uri = PUT_MOCK.URI;
    expect(putBuilder.parameters).toEqual({});
    expect(putBuilder.requestUriString).toEqual(PUT_MOCK.URI);

    putBuilder
      .ofType(PUT_MOCK.TYPE)
      .withId(PUT_MOCK.ID)
      .withAttributes(PUT_MOCK.ATTRIBUTES)
      .withRelationship(PUT_MOCK.RELATIONSHIP)
      .withRelationship(PUT_MOCK.RELATIONSHIP_2);

    const result = await putBuilder.send();

    expect(result.raw).toEqual(GET_MOCK.RAW);
    expect(mock.requestHandler.lastRequest()).toEqual({
      url: putBuilder.requestUriString,
      method: 'PUT',
      headers: DEFAULT_HEADERS_MOCK,
      body: JSON.stringify(PUT_MOCK.BODY),
    });
  });

  it('should produce correct request with PatchBuilder', async () => {
    const patchBuilder = new JsonApiClient(mock.httpClient).patch('');
    expect(patchBuilder.requestUriString).toEqual('');
    patchBuilder.uri = PATCH_MOCK.URI;
    expect(patchBuilder.parameters).toEqual({});
    expect(patchBuilder.requestUriString).toEqual(PATCH_MOCK.URI);

    patchBuilder
      .ofType(PATCH_MOCK.TYPE)
      .withId(PATCH_MOCK.ID)
      .withAttributes(PATCH_MOCK.ATTRIBUTES)
      .withRelationship(PATCH_MOCK.RELATIONSHIP)
      .withRelationship(PATCH_MOCK.RELATIONSHIP_2);

    const result = await patchBuilder.send();

    expect(result.raw).toEqual(GET_MOCK.RAW);
    expect(mock.requestHandler.lastRequest()).toEqual({
      url: patchBuilder.requestUriString,
      method: 'PATCH',
      headers: DEFAULT_HEADERS_MOCK,
      body: JSON.stringify(PATCH_MOCK.BODY),
    });
  });
});
