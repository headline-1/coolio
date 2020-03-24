# API

## Index

### Enumerations

* [FilterOperator](enums/filteroperator.md)
* [SortOrder](enums/sortorder.md)

### Classes

* [GetBuilder](classes/getbuilder.md)
* [GetListBuilder](classes/getlistbuilder.md)
* [JsonApiClient](classes/jsonapiclient.md)
* [JsonListResponse](classes/jsonlistresponse.md)
* [JsonResponse](classes/jsonresponse.md)
* [PostBuilder](classes/postbuilder.md)
* [RemoveBuilder](classes/removebuilder.md)
* [RequestBuilder](classes/requestbuilder.md)
* [UpdateBuilder](classes/updatebuilder.md)

### Interfaces

* [Attributes](interfaces/attributes.md)
* [Data](interfaces/data.md)
* [IncludedGroup](interfaces/includedgroup.md)
* [ListMetaData](interfaces/listmetadata.md)
* [Options](interfaces/options.md)
* [RawListResponse](interfaces/rawlistresponse.md)
* [RawResponse](interfaces/rawresponse.md)

### Type aliases

* [AnyData](./#anydata)
* [AttributesOf](./#attributesof)
* [EmptyRecord](./#emptyrecord)
* [IncludedGroups](./#includedgroups)
* [IncludedGroupsSchema](./#includedgroupsschema)
* [IncludedRelationships](./#includedrelationships)
* [MergedData](./#mergeddata)
* [MergedIncludedGroups](./#mergedincludedgroups)
* [OptionalRels](./#optionalrels)
* [RawRelationship](./#rawrelationship)
* [Relationship](./#relationship)
* [RelationshipArray](./#relationshiparray)
* [RelationshipData](./#relationshipdata)
* [RelationshipType](./#relationshiptype)
* [Relationships](./#relationships)
* [RelationshipsOf](./#relationshipsof)
* [ResolvedRelationship](./#resolvedrelationship)
* [ResolvedRelationshipArray](./#resolvedrelationshiparray)
* [ResolvedRelationships](./#resolvedrelationships)
* [UnresolvedRelationships](./#unresolvedrelationships)

### Variables

* [DEFAULT\_RESOURCE\_LIMIT](./#const-default_resource_limit)

### Functions

* [findIncludedRelationship](./#const-findincludedrelationship)
* [includedGroup](./#const-includedgroup)
* [isData](./#const-isdata)
* [mergeElementData](./#const-mergeelementdata)
* [resolveRelationships](./#resolverelationships)

### Object literals

* [Headers](./#const-headers)

## Type aliases

### AnyData

Ƭ **AnyData**: [_Data_](interfaces/data.md)_‹any, any›_

### AttributesOf

Ƭ **AttributesOf**: _D extends object ? D\["attributes"\] : EmptyRecord_

### EmptyRecord

Ƭ **EmptyRecord**: _object_

#### Type declaration:

* \[ **key**: _string_\]: never

### IncludedGroups

Ƭ **IncludedGroups**: _object_

#### Type declaration:

### IncludedGroupsSchema

Ƭ **IncludedGroupsSchema**: _Record‹string,_ [_IncludedGroup_](interfaces/includedgroup.md)_›_

### IncludedRelationships

Ƭ **IncludedRelationships**: _D\[\]_

### MergedData

Ƭ **MergedData**:

## MergeData type

This sophisticated type allows to correctly infer nicely formatted data from JSON API format. `id`, `type`, `attributes` and `relationships` suddenly become a single, combined object with easy access to it. Same is applied to arrays.

### MergedIncludedGroups

Ƭ **MergedIncludedGroups**: _object_

#### Type declaration:

### OptionalRels

Ƭ **OptionalRels**: [_Relationships_](./#relationships) _\| undefined_

### RawRelationship

Ƭ **RawRelationship**: _object_

#### Type declaration:

* **data**: _T_
* **links**? : _undefined \| object_
* **related**? : _undefined \| string_

### Relationship

Ƭ **Relationship**: [_RawRelationship_](./#rawrelationship)_‹_[_RelationshipData_](./#relationshipdata)_›_

### RelationshipArray

Ƭ **RelationshipArray**: [_RawRelationship_](./#rawrelationship)_‹_[_RelationshipData_](./#relationshipdata)_\[\]›_

### RelationshipData

Ƭ **RelationshipData**: _object_

#### Type declaration:

* **id**: _string_
* **type**: _Type_

### RelationshipType

Ƭ **RelationshipType**: [_RelationshipData_](./#relationshipdata)_‹Type› \|_ [_RelationshipData_](./#relationshipdata)_‹Type›\[\]_

### Relationships

Ƭ **Relationships**: _Record‹string,_ [_RawRelationship_](./#rawrelationship)_‹_[_RelationshipType_](./#relationshiptype)_› \| undefined›_

### RelationshipsOf

Ƭ **RelationshipsOf**: _D extends object ? D\["relationships"\] : EmptyRecord_

### ResolvedRelationship

Ƭ **ResolvedRelationship**: [_RawRelationship_](./#rawrelationship)_‹D›_

### ResolvedRelationshipArray

Ƭ **ResolvedRelationshipArray**: [_RawRelationship_](./#rawrelationship)_‹D\[\]›_

### ResolvedRelationships

Ƭ **ResolvedRelationships**: _Record‹string,_ [_ResolvedRelationship_](./#resolvedrelationship) _\|_ [_ResolvedRelationshipArray_](./#resolvedrelationshiparray) _\| undefined›_

### UnresolvedRelationships

Ƭ **UnresolvedRelationships**: _Record‹string,_ [_Relationship_](./#relationship) _\|_ [_RelationshipArray_](./#relationshiparray)_›_

## Variables

### `Const` DEFAULT\_RESOURCE\_LIMIT

• **DEFAULT\_RESOURCE\_LIMIT**: _10_ = 10

## Functions

### `Const` findIncludedRelationship

▸ **findIncludedRelationship**\(`relationship`: [RelationshipData](./#relationshipdata), `included`: [IncludedRelationships](./#includedrelationships)\): [_AnyData_](./#anydata) _\| undefined_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `relationship` | [RelationshipData](./#relationshipdata) |
| `included` | [IncludedRelationships](./#includedrelationships) |

**Returns:** [_AnyData_](./#anydata) _\| undefined_

### `Const` includedGroup

▸ **includedGroup**&lt;**D**&gt;\(`type`: string\): [_IncludedGroup_](interfaces/includedgroup.md)_‹D›_

**Type parameters:**

▪ **D**: [_AnyData_](./#anydata)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `type` | string |

**Returns:** [_IncludedGroup_](interfaces/includedgroup.md)_‹D›_

### `Const` isData

▸ **isData**&lt;**D**&gt;\(`data`: [RelationshipData](./#relationshipdata) \| D\): _data is D_

**Type parameters:**

▪ **D**: [_AnyData_](./#anydata)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `data` | [RelationshipData](./#relationshipdata) \| D |

**Returns:** _data is D_

### `Const` mergeElementData

▸ **mergeElementData**&lt;**D**&gt;\(`data`: D\): [_MergedData_](./#mergeddata)_‹D›_

**Type parameters:**

▪ **D**: [_AnyData_](./#anydata)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `data` | D |

**Returns:** [_MergedData_](./#mergeddata)_‹D›_

### resolveRelationships

▸ **resolveRelationships**&lt;**D**&gt;\(`data`: D, `included`: [IncludedRelationships](./#includedrelationships)\): _D_

**Type parameters:**

▪ **D**: [_AnyData_](./#anydata) _\|_ [_AnyData_](./#anydata)_\[\]_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `data` | D |
| `included` | [IncludedRelationships](./#includedrelationships) |

**Returns:** _D_

▸ **resolveRelationships**\(`data`: [RelationshipData](./#relationshipdata)\[\], `included`: [IncludedRelationships](./#includedrelationships)\): _object \|_ [_Data_](interfaces/data.md)_‹any, any›\[\]_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `data` | [RelationshipData](./#relationshipdata)\[\] |
| `included` | [IncludedRelationships](./#includedrelationships) |

**Returns:** _object \|_ [_Data_](interfaces/data.md)_‹any, any›\[\]_

▸ **resolveRelationships**\(`data`: [RelationshipData](./#relationshipdata), `included`: [IncludedRelationships](./#includedrelationships)\): [_AnyData_](./#anydata) _\|_ [_RelationshipData_](./#relationshipdata)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `data` | [RelationshipData](./#relationshipdata) |
| `included` | [IncludedRelationships](./#includedrelationships) |

**Returns:** [_AnyData_](./#anydata) _\|_ [_RelationshipData_](./#relationshipdata)

## Object literals

### `Const` Headers

### ▪ **Headers**: _object_

### Accept

• **Accept**: _ContentType_ = ContentType.VND\_JSON

### Content-Type

• **Content-Type**: _ContentType_ = ContentType.VND\_JSON

