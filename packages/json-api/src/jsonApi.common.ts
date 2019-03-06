import { mapValues } from 'lodash';
import {
  AnyData,
  IncludedGroup,
  IncludedRelationships,
  MergedData,
  Relationship,
  RelationshipArray,
  RelationshipData,
  ResolvedRelationship,
  ResolvedRelationshipArray,
} from './jsonApi.interface';

export const isData = <D extends AnyData>(
  data: RelationshipData | D,
): data is D =>
  !!(data as any).attributes;

export const mergeElementData = <D extends AnyData>(
  data: D,
): MergedData<D> =>
  Object.assign(
    {
      id: data.id,
      type: data.type,
      self: data.links && data.links.self,
    },
    data.relationships && mapValues(
    data.relationships,
    (rel: Relationship | RelationshipArray | ResolvedRelationship | ResolvedRelationshipArray) => rel.data
      ? Array.isArray(rel.data)
        ? (rel.data[0] && isData(rel.data[0]))
          ? (rel as ResolvedRelationshipArray).data.map(mergeElementData)
          : (rel as RelationshipArray).data.map(data => data.id)
        : isData(rel.data) ? mergeElementData(rel.data) : rel.data.id
      : undefined,
    ),
    data.attributes,
  );

export const findIncludedRelationship = (
  relationship: RelationshipData,
  included: IncludedRelationships,
): AnyData | undefined => included.find(element => element.id === relationship.id && (
  element.type === relationship.type ||
  // sonnen JSON API workaround, as it uses mixed kebab/snake casing in types/relationships
  element.type === relationship.type.replace(/-/g, '_')
));

export function resolveRelationships<D extends AnyData | AnyData[]>(
  data: D,
  included: IncludedRelationships,
): D;
export function resolveRelationships(
  data: RelationshipData[],
  included: IncludedRelationships,
): (AnyData | RelationshipData)[];
export function resolveRelationships(
  data: RelationshipData,
  included: IncludedRelationships,
): AnyData | RelationshipData;
export function resolveRelationships<D extends AnyData>(
  data: D | RelationshipData | (D | RelationshipData)[],
  included: IncludedRelationships,
): D | RelationshipData | (D | RelationshipData)[] {
  if (!data) {
    return data;
  }
  if (Array.isArray(data)) {
    return data.map(d => resolveRelationships(d, included));
  }
  if (isData(data)) {
    const relationships = data.relationships;
    if (relationships) {
      for (const key in relationships) {
        if (relationships.hasOwnProperty(key)) {
          const relationship = relationships[key];
          if (relationship) {
            relationship.data = resolveRelationships(relationship.data as any, included);
          }
        }
      }
    }
    return data;
  }
  const relationship = findIncludedRelationship(data, included);
  return relationship ? resolveRelationships(relationship, included) : data;
}

export const includedGroup = <D extends AnyData>(type: string): IncludedGroup<D> => ({
  type,
}) as any;
