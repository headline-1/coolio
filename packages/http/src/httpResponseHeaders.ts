import { getHeader, parseHeaders } from './helpers';
import { HttpHeaders } from './httpClient.types';

export class HttpResponseHeaders {
  public readonly map: Record<string, string>;

  constructor(headers: HttpHeaders | Headers | string = {}) {
    if (typeof headers === 'string') {
      this.map = headers
        .split('\n')
        .reduce((map, header) => {
          const [key, value] = header
            .split(':')
            .map(element => decodeURIComponent(element.trim()));
          map[key] = value;
          return map;
        }, {});
    } else if (headers instanceof Headers) {
      this.map = parseHeaders(headers);
    } else {
      this.map = Object.keys(headers).reduce((result, key) => {
        result[key] = headers[key];
        return result;
      }, {});
    }
  }

  get(key: string) {
    return getHeader(this.map, key);
  }
}
