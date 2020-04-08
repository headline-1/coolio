import { ContentType, createHttpResponse, HttpCode } from '@coolio/http';
import { JsonListResponse } from '..';
import { JsonResponse } from '../responses';
import { GetListMock, GetMock } from './jsonApi.mocks';

describe('JSON API Response Parsing', () => {

  it('should correctly parse response with a single resource', () => {
    const { raw, element } = new JsonResponse(GetMock.raw, createHttpResponse({
      headers: { 'content-type': ContentType.VND_JSON },
      status: HttpCode.OK,
      body: JSON.stringify(GetMock.raw),
    }));
    expect(raw).toEqual(GetMock.raw);
    expect(element).toEqual(GetMock.parsed);
  });

  it('should correctly parse response with list of resources', () => {
    const { raw, elements, offset, limit } = new JsonListResponse(GetListMock.raw, createHttpResponse({
      headers: { 'content-type': ContentType.VND_JSON },
      status: HttpCode.OK,
      body: JSON.stringify(GetListMock.raw),
    }), 10, 15, {});
    expect(raw).toEqual(GetListMock.raw);
    expect(elements).toEqual(GetListMock.parsed);
    expect(offset).toEqual(15);
    expect(limit).toEqual(10);
  });
});
