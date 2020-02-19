import * as http from 'http';
import * as url from 'url';
import { AddressInfo } from 'net';
import { HttpMethod } from '../httpClient.types';

export interface SimpleEndpoint {
  method: HttpMethod;
  route: RegExp | string;
  response: string | ((req: http.IncomingMessage, res: http.OutgoingMessage) => void);
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

// TODO replace it with express for testing
export const createSimpleServer = ({
  status,
  endpoints,
  headers,
}: CreateSimpleServerParams): SimpleServer => {
  const route = (req: http.IncomingMessage) => {
    if (!req.url) {
      return undefined;
    }
    const { pathname } = url.parse(req.url);
    for (const endpoint of endpoints) {
      if (endpoint.method === req.method && pathname?.match(new RegExp(`^${endpoint.route}$`))) {
        return endpoint;
      }
    }
  };

  const server = http.createServer(function (req, res) {
    const endpoint = route(req);
    if (!endpoint) {
      res.writeHead(404, {});
      return res.end();
    }
    if (typeof endpoint.response === 'string') {
      res.writeHead(status, {
        'access-control-allow-origin': '*',
        ...headers,
      });
      return res.end(endpoint.response);
    }
    return endpoint.response(req, res);
  }).listen();
  const address = server.address() as AddressInfo;

  return {
    port: address.port,
    host: address.address,
    fullAddress: `http://127.0.0.1:${address.port}`,
    close: () => new Promise((resolve, reject) => server.close((err: any) => err ? reject(err) : resolve())),
  };
};
