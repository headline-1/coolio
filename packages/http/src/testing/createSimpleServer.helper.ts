import http from 'http';
import { AddressInfo } from 'net';

export interface CreateSimpleServerParams {
  status: number;
  headers: http.OutgoingHttpHeaders;
  body: string;
}

export interface SimpleServer {
  port: number;
  host: string;
  fullAddress: string;
  close: () => Promise<void>;
}

export const createSimpleServer = ({
  status,
  body,
  headers,
}: CreateSimpleServerParams): SimpleServer => {
  const server = http.createServer(function (req, res) {
    res.writeHead(status, {
      'access-control-allow-origin': '*',
      ...headers,
    });
    res.end(body);
  }).listen();
  const address = server.address() as AddressInfo;

  return {
    port: address.port,
    host: address.address,
    fullAddress: `http://127.0.0.1:${address.port}`,
    close: () => new Promise((resolve, reject) => server.close((err: any) => err ? reject(err) : resolve())),
  };
};

