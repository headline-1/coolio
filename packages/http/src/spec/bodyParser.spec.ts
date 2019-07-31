import { createHttpResponse } from '../httpResponse';
import { ContentType } from '../httpClient.types';

describe('bodyParser', () => {
  it('parses response with JSON body', async () => {
    const response = createHttpResponse({
      headers: { 'content-type': ContentType.JSON },
      body: JSON.stringify({ test: 'abc', }),
      status: 200,
    });
    const body = await response.parsedBody();
    expect(body).toEqual({ test: 'abc' });
  });

  it('does not fail on empty body with JSON content-type header, but returns null instead', async () => {
    const response = createHttpResponse({
      headers: { 'content-type': ContentType.JSON },
      body: '',
      status: 200,
    });
    const body = await response.parsedBody();
    expect(body).toEqual(null);
  });

  it('fails on invalid body with JSON content-type header', async () => {
    const response = createHttpResponse({
      headers: { 'content-type': ContentType.JSON },
      body: '{ invalid json...',
      status: 200,
    });

    await expect(response.parsedBody()).rejects.toEqual(new Error(
      'Response body that was passed to bodyParser is invalid. ' +
      'SyntaxError: Unexpected token i in JSON at position 2',
    ));
  });

  it('parses response with URL-encoded body', async () => {
    const response = createHttpResponse({
      headers: { 'content-type': ContentType.URL_ENCODED },
      body: 'val1=test%20value&array[0]=zero&array[1]=one',
      status: 200,
    });
    const body = await response.parsedBody();
    expect(body).toEqual({ val1: 'test value', array: ['zero', 'one'] });
  });

  it('parses response with text body', async () => {
    const response = createHttpResponse({
      headers: { 'content-type': ContentType.TEXT },
      body: 'text',
      status: 200,
    });
    const body: string = await response.parsedBody();
    expect(body).toEqual('text');
  });

  it('treats response with different type of body as ArrayBuffer', async () => {
    const response = createHttpResponse({
      headers: { 'content-type': 'application/octet-stream' },
      body: 'some stream',
      status: 200,
    });
    const buffer: ArrayBuffer = await response.parsedBody();
    const body = String.fromCharCode(...new Uint8Array(buffer));

    expect(body).toEqual('some stream');
  });

  it('treats body of response with no content-type header as ArrayBuffer', async () => {
    const response = createHttpResponse({
      headers: {},
      body: Buffer.from('some stream'),
      status: 200,
    });
    const buffer: ArrayBuffer = await response.parsedBody();
    const body = String.fromCharCode(...new Uint8Array(buffer));

    expect(body).toEqual('some stream');
  });
});
