import { DEFAULT_REQUEST_TIMEOUT_MS, HttpMethod } from '@coolio/http';
import { JsonApiClient } from '../jsonApiClient';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { CreationalMocksMap, DefaultHeadersMock, GetMock, PostEmptyMock } from './jsonApi.mocks';
import { CreationalRequestBuilder } from '../requestBuilders';

describe('JSON API Post', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('throws an error when type is missing in request', () => {
    const builder = new CreationalRequestBuilder(mock.httpClient, { method: HttpMethod.POST }, '');
    const error = 'Missing object type. Did you forget to call ofType()?';
    expect(() => builder.expectOne().send()).toThrowError(error);
    expect(() => builder.expectMany().send()).toThrowError(error);
  });

  it('handles empty response gracefully', async () => {
    const result = await new JsonApiClient(mock.httpClient)
      .post(PostEmptyMock.uri)
      .ofType('testType')
      .withId('testId')
      .withAttributes(PostEmptyMock.attributes)
      .withRelationship()
      .withRelationship(PostEmptyMock.relationships[0])
      .withRelationship(PostEmptyMock.relationships[1])
      .expectOne()
      .send();

    expect(result.raw).toEqual(undefined);
    expect(result.element).toEqual(undefined);
    expect(result.meta).toEqual(undefined);
  });

  it.each([
    HttpMethod.POST,
    HttpMethod.PUT,
    HttpMethod.PATCH
  ])('produces correct %s request', async (method) => {
    const requestMock = CreationalMocksMap[method];

    const result = await new CreationalRequestBuilder(mock.httpClient, { method }, requestMock.uri)
      .ofType('testType')
      .withId('testId')
      .withAttributes(requestMock.attributes)
      .withRelationship()
      .withRelationship(requestMock.relationships[0])
      .withRelationship(requestMock.relationships[1])
      .expectOne()
      .send();

    expect(result.raw).toEqual(GetMock.raw);
    expect(mock.requestHandler.lastRequest()).toEqual({
      url: requestMock.uri,
      query: {},
      method,
      headers: DefaultHeadersMock,
      timeout: DEFAULT_REQUEST_TIMEOUT_MS,
      body: JSON.stringify(requestMock.body),
    });
  });
});
