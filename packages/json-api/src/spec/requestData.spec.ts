import { HttpMethod } from '@coolio/http';
import { DefaultHeadersMock, GetMock } from './jsonApi.mocks';
import { JsonApiRequestData } from '../requestData';

describe('JSON API Request Data', () => {

  it('should parse parameters from URI passed to constructor if "page[offset]" is defined', () => {
    const data = new JsonApiRequestData('basePath' +
      '?paramA=0' +
      '&paramB=test' +
      '&sort=inc' +
      '&page[limit]=5' +
      '&page[number]=1' +
      '&page[offset]=10', { method: HttpMethod.GET });
    expect(data.uri).toBe('basePath');
    expect(data.limit).toBe(5);
    expect(data.page).toBe(1);
    expect(data.offset).toBe(10);
    expect(data.sort).toEqual(['inc']);
    expect(data.query).toEqual({
      paramA: '0',
      paramB: 'test',
    });
  });

  it('should parse parameters from URI passed to constructor if "page[offset]" is not defined', () => {
    const data = new JsonApiRequestData('basePath2' +
      '?paramX=X' +
      '&sort=-inc,+c' +
      '&page[limit]=5' +
      '&page[number]=1', { method: HttpMethod.GET });

    expect(data.uri).toBe('basePath2');
    expect(data.page).toBe(1);
    expect(data.limit).toBe(5);
    expect(data.offset).toBe(undefined);
    expect(data.sort).toEqual(['-inc', '+c']);
    expect(data.query).toEqual({
      paramX: 'X',
    });
  });

  it('should apply custom overrides to the request', async () => {
    const data = new JsonApiRequestData(GetMock.uri, { method: HttpMethod.GET });
    const customHeaders = { customHeader: 'x', Authorization: 'abc' };
    const customQuery = { b: 'override', x: 'x' };

    data.query.a = 'a';
    data.query.b = 'b';

    const options = data.getRequestOptions({
      headers: customHeaders,
      query: customQuery
    });

    expect(options).toEqual({
      headers: { ...DefaultHeadersMock, ...customHeaders },
      method: HttpMethod.GET,
      query: { a: 'a', ...customQuery },
      body: undefined,
    });
  });
});

