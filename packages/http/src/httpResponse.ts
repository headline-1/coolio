import { HttpHeaders, HttpResponse, NormalizedHttpBody, RawHttpResponse } from './httpClient.types';
import { bodyParser } from './bodyParser';
import { encodeArrayBuffer, encodeText } from './helpers/encoder.helper';
import { HttpStatusText } from './httpCodes';
import { HttpResponseHeaders } from './httpResponseHeaders';

interface HttpResponseOptions {
  url?: string;
  headers?: HttpHeaders;
  status: number;
  body?: NormalizedHttpBody;
}

export const createHttpResponse = ({
  url = '',
  headers,
  body,
  status,
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
  return bodyParser()(rawResponse);
};
