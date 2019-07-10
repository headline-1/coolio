import { HttpResponse, NormalizedHttpBody } from './httpClient.types';
import { bodyParser } from './bodyParser';

interface HttpResponseOptions {
  headers?: Headers;
  status: number;
  body?: NormalizedHttpBody;
}

export const createHttpResponse = ({
  headers,
  body,
  status,
}: HttpResponseOptions): HttpResponse => {
  const response = new Response(body, {
    headers,
    status,
  });
  return bodyParser()(response as HttpResponse);
};
