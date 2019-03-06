import { GetBuilder } from '../jsonApi.get';
import { GetListBuilder } from '../jsonApi.getList';
import { createHttpMock, HttpMock } from './httpClient.setup';
import { DEFAULT_HEADERS_MOCK, GET_MOCK } from './jsonApi.mocks';

const CUSTOM_HEADERS = { customHeader: 'x', Authorization: 'abc' };

describe('JSON API RequestBuilder', () => {
  let mock: HttpMock;

  beforeAll(() => {
    mock = createHttpMock();
  });

  it('should parse parameters from URI passed to constructor if "page[offset]" is defined', () => {
    const builder = new GetListBuilder(mock.httpClient, 'basePath' +
      '?paramA=0' +
      '&paramB=test' +
      '&sort=inc' +
      '&page[limit]=5' +
      '&page[number]=1' +
      '&page[offset]=10');

    expect(builder.parameters).toEqual({
      'paramA': '0',
      'paramB': 'test',
      'sort': 'inc',
      'page[limit]': '5',
      'page[offset]': '50',
    });

    expect(builder.uri).toEqual('basePath');
  });

  it('should parse parameters from URI passed to constructor if "page[offset]" is not defined', () => {
    const builder = new GetListBuilder(mock.httpClient, 'basePath' +
      '?paramA=0' +
      '&paramB=test' +
      '&sort=inc' +
      '&page[limit]=5' +
      '&page[number]=1');

    expect(builder.parameters).toEqual({
      'paramA': '0',
      'paramB': 'test',
      'sort': 'inc',
      'page[limit]': '5',
      'page[number]': '1',
    });

    expect(builder.uri).toEqual('basePath');
  });

  it('should apply custom headers to the request', async () => {
    await new GetBuilder(mock.httpClient, GET_MOCK.URI)
      .send({ headers: CUSTOM_HEADERS });

    expect(mock.requestHandler.lastRequest()).toEqual({
      url: GET_MOCK.URI,
      method: 'GET',
      headers: { ...DEFAULT_HEADERS_MOCK, ...CUSTOM_HEADERS },
    });
  });
});
