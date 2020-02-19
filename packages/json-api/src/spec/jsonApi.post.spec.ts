import { DEFAULT_REQUEST_TIMEOUT_MS } from '@coolio/http';
import { JsonApiClient } from '../jsonApi.client';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { DEFAULT_HEADERS_MOCK, GET_MOCK, POST_EMPTY_MOCK, POST_MOCK } from './jsonApi.mocks';

describe('JSON API Post', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('should throw an error when type is missing in request', () => {
    expect(() => new JsonApiClient(mock.httpClient).post('').send()).toThrowError('Missing object type');
  });

  it('should not fail when response is empty', async () => {
    const postBuilder = new JsonApiClient(mock.httpClient)
      .post(POST_EMPTY_MOCK.URI)
      .ofType('testType')
      .withId('testId')
      .withAttributes(POST_MOCK.ATTRIBUTES)
      .withRelationship()
      .withRelationship(POST_MOCK.RELATIONSHIP)
      .withRelationship(POST_MOCK.RELATIONSHIP_2);

    const result = await postBuilder.send();
    expect(result.raw).toEqual(undefined);
    expect(result.element).toEqual(undefined);
    expect(result.meta).toEqual(undefined);
  });

  it('should produce correct request with PostBuilder', async () => {
    const postBuilder = new JsonApiClient(mock.httpClient).post(POST_MOCK.URI);
    expect(postBuilder.uri).toEqual(POST_MOCK.URI);
    expect(postBuilder.parameters).toEqual({});

    postBuilder
      .ofType('testType')
      .withId('testId')
      .withAttributes(POST_MOCK.ATTRIBUTES)
      .withRelationship()
      .withRelationship(POST_MOCK.RELATIONSHIP)
      .withRelationship(POST_MOCK.RELATIONSHIP_2);

    const result = await postBuilder.send();

    expect(result.raw).toEqual(GET_MOCK.RAW);
    expect(mock.requestHandler.lastRequest()).toEqual({
      url: postBuilder.uri,
      query: {},
      method: 'POST',
      headers: DEFAULT_HEADERS_MOCK,
      timeout: DEFAULT_REQUEST_TIMEOUT_MS,
      body: JSON.stringify(POST_MOCK.BODY),
    });
  });
});
