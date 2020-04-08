import {
  bodyParser,
  bodySerializer,
  ContentType,
  HttpClient,
  HttpCode,
} from '@coolio/http';
import { mockRequestHandler, handleRequest, MockHttpRequestHandler } from '@coolio/http/request-handlers/mock';
import {
  DeleteMock,
  GetListMock,
  GetMock,
  PatchMock,
  PostEmptyMock,
  PostMock,
  PutMock
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
        match: GetMock.uri,
        handler: ok(GetMock.raw),
      },
      {
        match: PostEmptyMock.uri,
        handler: () => handleRequest(HttpCode.ACCEPTED, undefined, ContentType.VND_JSON),
      },
      {
        match: GetListMock.uri,
        handler: ok(GetListMock.raw),
      },
      {
        match: PutMock.uri,
        handler: ok(GetMock.raw),
      },
      {
        match: PatchMock.uri,
        handler: ok(GetMock.raw),
      },
      {
        match: DeleteMock.uri,
        handler: ok(GetMock.raw),
      },
      {
        match: PostMock.uri,
        handler: ok(GetMock.raw),
      },
    ],
  });
  const httpClient = new HttpClient({
    requestHandler,
    bodyParser: bodyParser(),
    bodySerializer: bodySerializer(),
  });

  return { httpClient, requestHandler };
};
