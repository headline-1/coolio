import express from 'express';
import multer, { memoryStorage } from 'multer';
import cors from 'cors';
import bodyParser from 'body-parser';
import { AddressInfo } from 'net';
import { ContentType } from '../contentType';

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

  const corsMiddleware = cors({
    allowedHeaders: ['x-global-header'],
    origin: '*',
  });

  app.use(corsMiddleware);
  app.options('*', corsMiddleware);

  app.use((req, res, next) => {
    res.setHeader('Content-Type', ContentType.TEXT);
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
