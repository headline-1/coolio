import { ContentType } from '@coolio/http';

export interface Attributes {
  [x: string]: any;
}

export type RelationshipData<Type extends string = string> = {
  id: string;
  type: Type;
};

export type RelationshipType<Type extends string = string> = RelationshipData<Type> | RelationshipData<Type>[];

type RawRelationship<T> = {
  data: T;
  links?: {
    self?: string;
    related: string;
  };
  related?: string;
};

export type Relationship = RawRelationship<RelationshipData>;
export type RelationshipArray = RawRelationship<RelationshipData[]>;

export type ResolvedRelationship<D extends AnyData = AnyData> = RawRelationship<D>;
export type ResolvedRelationshipArray<D extends AnyData = AnyData> = RawRelationship<D[]>;

export type Relationships = Record<string, RawRelationship<RelationshipType> | undefined>;
export type UnresolvedRelationships = Record<string, Relationship | RelationshipArray>;
export type ResolvedRelationships = Record<string, ResolvedRelationship | ResolvedRelationshipArray | undefined>;
export type OptionalRels = Relationships | undefined;

export type IncludedRelationships<D extends AnyData = AnyData> = D[];

export interface Data<Attrs extends Attributes, Rels extends OptionalRels = {}> {
  id: string;
  type: string;
  attributes: Attrs;
  relationships: Rels;
  links: {
    self: string;
  };
}

export type AnyData = Data<any, any>;

type EmptyRecord = { [key: string]: never };
export type AttributesOf<D> = D extends { attributes: Attributes } ? D['attributes'] : EmptyRecord;
export type RelationshipsOf<D> = D extends { relationships: Relationships } ? D['relationships'] : EmptyRecord;

/**
 * MergeData type
 * --------------
 * This sophisticated type allows to correctly infer nicely formatted data from JSON API format.
 * `id`, `type`, `attributes` and `relationships` suddenly become a single, combined object with easy access to it.
 * Same is applied to arrays.
 */

export type MergedData<D> =
  D extends AnyData ? (
      & AttributesOf<D>
      & (
      RelationshipsOf<D> extends Relationships
        ? { [k in keyof RelationshipsOf<D>]: MergedData<RelationshipsOf<D>[k]['data']> }
        : RelationshipsOf<D>
      )
      & ({
        id: string;
        type: string;
        self: string;
      })
    ) : D extends AnyData[] ? (
      & AttributesOf<D[0]>
      & (
      RelationshipsOf<D[0]> extends Relationships
        ? { [k in keyof RelationshipsOf<D[0]>]: MergedData<RelationshipsOf<D[0]>[k]['data']> }
        : RelationshipsOf<D[0]>
      )
      & ({
        id: string;
        type: string;
        self: string;
      })
    )[] : (
      D extends RelationshipData ? D['id'] : D extends RelationshipData[] ? D[0]['id'][] : never
    );

export interface ListMetaData {
  totalResourceCount: number;
}

/**
 * Included groups
 * ---------------
 * Included groups allow you to extract stuff from 'included' JSON API field
 * basing on specified name-type pairs, and add proper types to it.
 *
 */

export interface IncludedGroup<D extends AnyData = AnyData> {
  type: string;
  __d: D;
}

export type IncludedGroupsSchema = Record<string, IncludedGroup>;

export type IncludedGroups<Groups extends IncludedGroupsSchema = IncludedGroupsSchema>
  = { [k in keyof Groups]: Groups[k]['__d'][] };

export type MergedIncludedGroups<G extends IncludedGroups<any>> = { [k in keyof G]: MergedData<G[k]> };

/*
 * RawResponse & RawListResponse
 * ------------
 * These are types covering JSON API responses for single element and multiple elements.
 */

export interface RawResponse<D extends AnyData, M extends {} = {}> {
  data: D;
  meta?: M;
  included?: IncludedRelationships;
}

export interface RawListResponse<D extends AnyData, M extends ListMetaData = ListMetaData> {
  data: D[];
  links: {
    first: string;
    next?: string;
    prev?: string;
    last: string;
  };
  included?: IncludedRelationships;
  meta: M;
}

export const Headers = {
  'Content-Type': ContentType.VND_JSON,
  'Accept': ContentType.VND_JSON,
};

export enum FilterOperator {
  EQUALS = 'EQ',
  NOT_EQUALS = 'NEQ',
  LIKE = 'LIKE',
  GREATER = 'GT',
  LOWER = 'LT',
  GREATER_OR_EQUAL = 'GE',
  LOWER_OR_EQUAL = 'LE',
}

export enum SortOrder {
  ASCENDING = '',
  DESCENDING = '-',
}
