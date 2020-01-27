import { HttpClient, HttpOptions } from '@coolio/http';
import { RequestBuilder } from './jsonApi.builder';
import { Headers, RawResponse } from './jsonApi.interface';
import { JsonResponse } from './jsonApi.response';

export class PostBuilder<Raw extends RawResponse<any, any>> extends RequestBuilder<JsonResponse<Raw>> {
  type?: string;
  id?: string;
  attributes?: object;
  relationships?: Record<string, { data: { id: string; type: string } }>;

  constructor(private httpClient: HttpClient, uri: string) {
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

  withRelationship(rel?: { name: string; uuid: string; type: string }): this {
    if (!this.relationships) {
      this.relationships = {};
    }

    if (rel) {
      this.relationships[rel.name] = { data: { id: rel.uuid, type: rel.type } };
    }

    return this;
  }

  send(options: HttpOptions = {}): Promise<JsonResponse<Raw>> {
    if (!this.type) {
      throw new Error('Missing object type');
    }
    return this.httpClient.post<Raw>(this.uri, {
      ...options,
      query: this.parameters,
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
