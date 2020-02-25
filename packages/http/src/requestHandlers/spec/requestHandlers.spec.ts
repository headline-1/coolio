import { fetchRequestHandler } from '../fetch.requestHandler';
import { httpRequestHandler } from '../http.requestHandler';
import { xhrRequestHandler } from '../xhr.requestHandler';
import { HttpRequestHandler } from '../../httpClient.types';
import { createSimpleServer, SimpleServer } from '../../testing/createSimpleServer.helper';
import { HttpClient } from '../../httpClient';
import { HttpCode } from '../../httpCodes';
import { ContentType } from '../../contentType';
import * as http from 'http';

require('whatwg-fetch');

const describeRequestHandlers = describe.each([
  ['fetch', fetchRequestHandler()],
  ['http', httpRequestHandler()],
  ['xhr', xhrRequestHandler()],
] as [string, HttpRequestHandler][]);

describeRequestHandlers('%s.requestHandler', (_, requestHandler) => {
  let server: SimpleServer;
  let verifyRequest: (req: http.IncomingMessage & Record<string, any>) => Promise<void>;

  beforeAll(() => {
    server = createSimpleServer();
    server.app.get('/', (req, res) => {
      res.status(HttpCode.OK).send('test body');
    });
    server.app.post('/body', (req, res) =>
      verifyRequest(req)
        .then(() => {
          res.sendStatus(HttpCode.OK);
          res.end();
        }, err => {
          console.error(err);
          res.sendStatus(HttpCode.BAD_REQUEST);
          res.end();
        }));
    server.app.get('/timeout', (req, res) => {
      setTimeout(() => {
        // In timeout tests we expect to get response in less than 500ms, this is just a cleanup.
        res.destroy();
      }, 2000);
    });
  });

  beforeEach(() => {
    verifyRequest = () => Promise.reject(new Error('Request verifier has not been set.'));
  });

  afterAll(async () => {
    await server.close();
  });

  it('handles a request', async () => {
    const client = new HttpClient({
      requestHandler,
      baseUrl: server.fullAddress,
    });
    const result = await client.get('/');
    expect(result.status).toBe(200);
    expect(result.statusText).toBe('OK');
    expect(result.headers.map).toMatchObject({
      'content-type': 'text/plain; charset=utf-8',
    });
    expect(await result.text()).toEqual('test body');
  });

  it('handles a timeout gracefully', async () => {
    const client = new HttpClient({
      requestHandler,
      baseUrl: server.fullAddress,
      requestTimeout: 500, // Just 500ms timeout
    });
    await expect(client.get('/timeout'))
      .rejects.toThrowError('Request timed out after 500ms.');
    await expect(client.get('/timeout', { timeout: 30 }))
      .rejects.toThrowError('Request timed out after 30ms.');
  });

  it('sends text-encoded body correctly', async () => {
    const client = new HttpClient({
      requestHandler,
      baseUrl: server.fullAddress,
    });
    const textBody = 'this is a sample text body';

    verifyRequest = async req => {
      expect(req.body).toEqual(textBody);
    };

    const response = await client.post('/body', {
      headers: { 'content-type': ContentType.TEXT },
      body: textBody,
    });
    await expect(response.status).toEqual(HttpCode.OK);
  });

  it('sends Buffer data body correctly', async () => {
    const client = new HttpClient({
      requestHandler,
      baseUrl: server.fullAddress,
    });
    const bufferBody = Buffer.from('Text with non-ASCII characters: zażółćgęśląjaźń🛫✈️🛬🛩💺');

    verifyRequest = async req => {
      expect(req.body).toEqual(bufferBody);
    };

    const response = await client.post('/body', {
      headers: { 'content-type': ContentType.BINARY },
      body: bufferBody,
    });
    await expect(response.status).toEqual(HttpCode.OK);
  });

  it('sends FormData body correctly', async () => {
    const client = new HttpClient({
      requestHandler,
      baseUrl: server.fullAddress,
    });
    const body = new FormData();
    const randomFileBuffer = Buffer.from(new Array(8 * 2014)
      .fill(0)
      .map(() => Math.random() * 255));
    const description = 'This is just a text description';

    body.append('file', new File([randomFileBuffer], 'file.dat'));
    body.append('description', description);

    verifyRequest = async req => {
      expect(req.body).toEqual({
        description,
      });
      expect(req.files).toHaveLength(1);
      expect(req.files[0]).toMatchObject({
          fieldname: 'file',
          originalname: 'file.dat',
          mimetype: ContentType.BINARY,
          size: randomFileBuffer.length,
        });
      expect(randomFileBuffer.equals(req.files[0].buffer)).toBe(true);
    };

    const response = await client.post('/body', {
      headers: { 'content-type': ContentType.MULTIPART_FORM },
      body,
    });
    await expect(response.status).toEqual(HttpCode.OK);
  });

});
