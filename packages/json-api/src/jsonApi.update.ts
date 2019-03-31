import { HttpClient, HttpOptions } from '@coolio/http';
import { RequestBuilder } from './jsonApi.builder';
import { Headers, RawResponse } from './jsonApi.interface';
import { JsonResponse } from './jsonApi.response';

export class UpdateBuilder<Raw extends RawResponse<any, any>> extends RequestBuilder<JsonResponse<Raw>> {
  id?: string;
  type?: string;
  attributes?: object;
  relationships?: Record<string, { data: { id: string, type: string } }>;

  constructor(
    private httpClient: HttpClient,
    uri: string,
    private method: 'PATCH' | 'PUT',
  ) {
    super(uri, {});
  }

  ofType(type: string): this {
    this.type = type;
    return this;
  }

  withId(id: string): this {
    this.id = id;
    return this;
  }

  withAttributes(attributes: object): this {
    this.attributes = attributes;
    return this;
  }

  withRelationship({ name, uuid, type }: { name: string, uuid: string, type: string }): this {
    if (!this.relationships) {
      this.relationships = {};
    }
    this.relationships[name] = { data: { id: uuid, type } };
    return this;
  }

  send(options: HttpOptions = {}): Promise<JsonResponse<Raw>> {
    if (!this.type) {
      throw new Error('Missing object type');
    }

    const handlerMap = {
      'PUT': this.httpClient.put.bind(this.httpClient),
      'PATCH': this.httpClient.patch.bind(this.httpClient),
    };

    const handler = handlerMap[this.method];

    return handler<Raw>(this.requestUriString, {
      ...options,
      body: {
        data: {
          id: this.id,
          type: this.type,
          attributes: this.attributes,
          relationships: this.relationships,
        },
      },
      headers: { ...Headers, ...options.headers },
    })
      .then(response => this.parseResponse(response));
  }
}
