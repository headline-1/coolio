import {
  BodyCasing,
  bodyParser,
  bodySerializer,
  ContentType,
  HttpClient,
  HttpCode,
} from '@coolio/http';
import { mockRequestHandler, handleRequest, MockHttpRequestHandler } from '@coolio/http/request-handlers/mock';
import {
  DELETE_MOCK,
  GET_LIST_MOCK,
  GET_MOCK,
  PATCH_MOCK,
  POST_EMPTY_MOCK,
  POST_MOCK,
  PUT_MOCK
} from './jsonApi.mocks';

export interface HttpMock {
  requestHandler: MockHttpRequestHandler;
  httpClient: HttpClient;
}

export const createHttpMock = (): HttpMock => {
  const ok = (body: any) => () => handleRequest(HttpCode.OK, body, ContentType.VND_JSON);
  const requestHandler = mockRequestHandler({
    endpoints: [
      {
        match: GET_MOCK.URI,
        handler: ok(GET_MOCK.RAW),
      },
      {
        match: POST_EMPTY_MOCK.URI,
        handler: () => handleRequest(HttpCode.ACCEPTED, undefined, ContentType.VND_JSON),
      },
      {
        match: GET_LIST_MOCK.URI,
        handler: ok(GET_LIST_MOCK.RAW),
      },
      {
        match: PUT_MOCK.URI,
        handler: ok(GET_MOCK.RAW),
      },
      {
        match: PATCH_MOCK.URI,
        handler: ok(GET_MOCK.RAW),
      },
      {
        match: DELETE_MOCK.URI,
        handler: ok(GET_MOCK.RAW),
      },
      {
        match: POST_MOCK.URI,
        handler: ok(GET_MOCK.RAW),
      },
    ],
  });
  const httpClient = new HttpClient({
    requestHandler,
    bodyParser: bodyParser({ bodyCasing: BodyCasing.CAMEL_CASE }),
    bodySerializer: bodySerializer({ bodyCasing: BodyCasing.SNAKE_CASE }),
  });

  return { httpClient, requestHandler };
};
