import { getHeader, parseHeaders } from './helpers';
import { HttpHeaders } from './httpClient.types';
import { IncomingHttpHeaders } from 'http';

export class HttpResponseHeaders {
  public readonly map: Record<string, string>;

  constructor(headers: IncomingHttpHeaders | HttpHeaders | Headers | string = {}) {
    if (typeof headers === 'string') {
      this.map = headers
        .split('\n')
        .reduce((map, header) => {
          const [key, value] = header
            .split(':')
            .map(element => decodeURIComponent(element.trim()));
          map[key.toLowerCase()] = value;
          return map;
        }, {});
    } else if (headers.forEach) {
      this.map = parseHeaders(headers as Headers);
    } else {
      this.map = Object.keys(headers).reduce((result, key) => {
        result[key.toLowerCase()] = headers[key];
        return result;
      }, {});
    }
  }

  set(key: string, value: any) {
    this.map[key.toLowerCase()] = value;
  }

  get(key: string) {
    return getHeader(this.map, key);
  }
}
