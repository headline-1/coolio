import { HttpClient } from '@coolio/http';
import { RequestBuilder } from './requestBuilder';
import { RequestBuilderOptions } from '../requestData';
import { AnyData } from '../types';

/**
 * This RequestBuilder adds possibility to form a body for JSON API requests.
 * Besides filling in query and filter options offered by {@link RequestBuilder},
 * one can create a POST, PUT or PATCH request with JSON API-shaped body.
 */
export class CreationalRequestBuilder<D extends AnyData, M extends Record<string, unknown> = Record<never, never>> extends RequestBuilder<D, M> {
  type?: string;
  id?: string;
  attributes?: Record<string, unknown>;
  relationships?: Record<string, { data: { id: string; type: string } }>;

  constructor(
    httpClient: HttpClient,
    options: RequestBuilderOptions,
    uri: string,
  ) {
    super(httpClient, options, uri);
  }

  ofType(type: string): this {
    this.type = type;
    return this;
  }

  withId(id: string): this {
    this.id = id;
    return this;
  }

  withAttributes(attributes: Record<string, unknown>): this {
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

  /**
   * Validates the body params and puts it to {@link JsonApiRequestData}.
   */
  protected onBeforeExpect() {
    if (!this.type) {
      throw new Error('Missing object type. Did you forget to call ofType()?');
    }

    this.requestData.body = {
      data: {
        id: this.id,
        type: this.type,
        attributes: this.attributes,
        relationships: this.relationships,
      },
    };
  }

}
