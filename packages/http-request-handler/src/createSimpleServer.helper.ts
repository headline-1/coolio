import http from 'http';
import url from 'url';
import { AddressInfo } from 'net';
import { HttpMethod } from '@coolio/http';

export interface SimpleEndpoint {
  method: HttpMethod;
  route: RegExp | string;
  response: string | ((req: http.IncomingMessage) => string);
}

export interface CreateSimpleServerParams {
  status: number;
  headers: http.OutgoingHttpHeaders;
  endpoints: SimpleEndpoint[];
}

export interface SimpleServer {
  port: number;
  host: string;
  fullAddress: string;
  close: () => Promise<void>;
}

export const createSimpleServer = ({
  status,
  endpoints,
  headers,
}: CreateSimpleServerParams): SimpleServer => {
  const route = (req: http.IncomingMessage) => {
    if (!req.url) {
      return '';
    }
    const { pathname } = url.parse(req.url);
    for (const endpoint of endpoints) {
      if (endpoint.method === req.method && pathname?.match(endpoint.route)) {
        if (typeof endpoint.response === 'string') {
          return endpoint.response;
        } else {
          return endpoint.response(req);
        }
      }
    }
  };

  const server = http.createServer(function (req, res) {
    const body = route(req);
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
