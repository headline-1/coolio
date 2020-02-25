import express from 'express';
import multer, { memoryStorage } from 'multer';
import bodyParser from 'body-parser';
import * as http from 'http';
import { AddressInfo } from 'net';
import { HttpMethod } from '../httpClient.types';
import { ContentType } from '../contentType';

export interface SimpleEndpoint {
  method: HttpMethod;
  route: RegExp | string;
  response: string | ((req: http.IncomingMessage, res: http.OutgoingMessage) => void);
}

export interface SimpleServer {
  app: express.Express;
  port: number;
  host: string;
  fullAddress: string;
  close: () => Promise<void>;
}

export const createSimpleServer = (): SimpleServer => {
  const app = express();
  const server = app.listen();
  const address = server.address() as AddressInfo;

  app.use((req, res, next) => {
    res.setHeader('Content-Type', ContentType.TEXT);
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

  app.use(bodyParser.text({
    type: ContentType.TEXT,
  }));
  app.use(bodyParser.raw({
    type: ContentType.BINARY,
  }));
  app.use(multer({
    storage: memoryStorage(),
  }).any());

  app.use((err: Error, req: express.Request, res: express.Response, _next: () => void) => {
    console.error(err);
    res.status(500).send('Something broke!');
  });

  return {
    app,
    port: address.port,
    host: address.address,
    fullAddress: `http://127.0.0.1:${address.port}`,
    close: () => new Promise((resolve, reject) => server.close((err: any) => err ? reject(err) : resolve())),
  };
};
