import { HttpHeaders, HttpResponse, RawHttpResponse } from './httpClient.types';
import { bodyParser, BodyParserOptions } from './bodyParser';
import { encodeArrayBuffer, encodeText } from './helpers/encoder.helper';
import { HttpStatusText } from './httpCodes';
import { HttpResponseHeaders } from './httpResponseHeaders';
import TypedArray = NodeJS.TypedArray;

interface HttpResponseOptions {
  url?: string;
  headers?: HttpHeaders;
  status: number;
  body?: TypedArray | string;
  bodyParserOptions?: BodyParserOptions;
}

export const createHttpResponse = ({
  url = '',
  headers,
  body,
  status,
  bodyParserOptions = {},
}: HttpResponseOptions): HttpResponse => {
  const arrayBuffer = encodeArrayBuffer(body);
  const rawResponse: RawHttpResponse = {
    arrayBuffer: async () => arrayBuffer,
    text: async () => arrayBuffer && encodeText(arrayBuffer),
    abort: () => {
      throw new Error('Can not abort manually created response');
    },
    url,
    status,
    statusText: HttpStatusText[status],
    redirected: false,
    headers: new HttpResponseHeaders(headers),
    ok: status < 400,
  };
  return bodyParser(bodyParserOptions)(rawResponse);
};
