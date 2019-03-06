import { JsonApiClient } from '../jsonApi.client';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { DEFAULT_HEADERS_MOCK, GET_MOCK, POST_MOCK } from './jsonApi.mocks';

describe('JSON API Post', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('should throw an error when type is missing in request', () => {
    expect(() => new JsonApiClient(mock.httpClient).post('').send()).toThrowError('Missing object type');
  });

  it('should produce correct request with PostBuilder', async () => {
    const postBuilder = new JsonApiClient(mock.httpClient).post('');
    expect(postBuilder.requestUriString).toEqual('');
    postBuilder.uri = POST_MOCK.URI;
    expect(postBuilder.parameters).toEqual({});
    expect(postBuilder.requestUriString).toEqual(POST_MOCK.URI);

    postBuilder
      .ofType('testType')
      .withAttributes(POST_MOCK.ATTRIBUTES)
      .withRelationship()
      .withRelationship(POST_MOCK.RELATIONSHIP)
      .withRelationship(POST_MOCK.RELATIONSHIP_2);

    const result = await postBuilder.send();

    expect(result.raw).toEqual(GET_MOCK.RAW);
    expect(mock.requestHandler.lastRequest()).toEqual({
      url: postBuilder.requestUriString,
      method: 'POST',
      headers: DEFAULT_HEADERS_MOCK,
      body: JSON.stringify(POST_MOCK.BODY),
    });
  });
});
