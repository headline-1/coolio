# @coolio/json-api

## Index

### Enumerations

* [SortOrder](enums/sortorder.md)

### Classes

* [CreationalRequestBuilder](classes/creationalrequestbuilder.md)
* [JsonApiClient](classes/jsonapiclient.md)
* [JsonApiManySender](classes/jsonapimanysender.md)
* [JsonApiOneSender](classes/jsonapionesender.md)
* [JsonApiRequestData](classes/jsonapirequestdata.md)
* [JsonApiSender](classes/jsonapisender.md)
* [JsonListResponse](classes/jsonlistresponse.md)
* [JsonResponse](classes/jsonresponse.md)
* [RequestBuilder](classes/requestbuilder.md)

### Interfaces

* [Attributes](interfaces/attributes.md)
* [Data](interfaces/data.md)
* [IncludedGroup](interfaces/includedgroup.md)
* [ListMetaData](interfaces/listmetadata.md)
* [RawListResponse](interfaces/rawlistresponse.md)
* [RawResponse](interfaces/rawresponse.md)
* [RequestBuilderOptions](interfaces/requestbuilderoptions.md)

### Type aliases

* [AnyData](README.md#anydata)
* [AttributesOf](README.md#attributesof)
* [EmptyRecord](README.md#emptyrecord)
* [IncludedGroups](README.md#includedgroups)
* [IncludedGroupsSchema](README.md#includedgroupsschema)
* [IncludedRelationships](README.md#includedrelationships)
* [MergedData](README.md#mergeddata)
* [MergedIncludedGroups](README.md#mergedincludedgroups)
* [OptionalRels](README.md#optionalrels)
* [RawRelationship](README.md#rawrelationship)
* [Relationship](README.md#relationship)
* [RelationshipArray](README.md#relationshiparray)
* [RelationshipData](README.md#relationshipdata)
* [RelationshipType](README.md#relationshiptype)
* [Relationships](README.md#relationships)
* [RelationshipsOf](README.md#relationshipsof)
* [ResolvedRelationship](README.md#resolvedrelationship)
* [ResolvedRelationshipArray](README.md#resolvedrelationshiparray)
* [ResolvedRelationships](README.md#resolvedrelationships)
* [UnresolvedRelationships](README.md#unresolvedrelationships)

### Variables

* [DEFAULT_RESOURCE_LIMIT](README.md#const-default_resource_limit)

### Functions

* [findIncludedRelationship](README.md#const-findincludedrelationship)
* [includedGroup](README.md#const-includedgroup)
* [isData](README.md#const-isdata)
* [mergeElementData](README.md#const-mergeelementdata)
* [resolveRelationships](README.md#resolverelationships)

### Object literals

* [Headers](README.md#const-headers)

## Type aliases

###  AnyData

Ƭ **AnyData**: *[Data](interfaces/data.md)‹any, any›*

___

###  AttributesOf

Ƭ **AttributesOf**: *D extends object ? D["attributes"] : EmptyRecord*

___

###  EmptyRecord

Ƭ **EmptyRecord**: *object*

#### Type declaration:

* \[ **key**: *string*\]: never

___

###  IncludedGroups

Ƭ **IncludedGroups**: *object*

#### Type declaration:

___

###  IncludedGroupsSchema

Ƭ **IncludedGroupsSchema**: *Record‹string, [IncludedGroup](interfaces/includedgroup.md)›*

___

###  IncludedRelationships

Ƭ **IncludedRelationships**: *D[]*

___

###  MergedData

Ƭ **MergedData**:

MergeData type
--------------
This sophisticated type allows to correctly infer nicely formatted data from JSON API format.
`id`, `type`, `attributes` and `relationships` suddenly become a single, combined object with easy access to it.
Same is applied to arrays.

___

###  MergedIncludedGroups

Ƭ **MergedIncludedGroups**: *object*

#### Type declaration:

___

###  OptionalRels

Ƭ **OptionalRels**: *[Relationships](README.md#relationships) | undefined*

___

###  RawRelationship

Ƭ **RawRelationship**: *object*

#### Type declaration:

* **data**: *T*

* **links**? : *undefined | object*

* **related**? : *undefined | string*

___

###  Relationship

Ƭ **Relationship**: *[RawRelationship](README.md#rawrelationship)‹[RelationshipData](README.md#relationshipdata)›*

___

###  RelationshipArray

Ƭ **RelationshipArray**: *[RawRelationship](README.md#rawrelationship)‹[RelationshipData](README.md#relationshipdata)[]›*

___

###  RelationshipData

Ƭ **RelationshipData**: *object*

#### Type declaration:

* **id**: *string*

* **type**: *Type*

___

###  RelationshipType

Ƭ **RelationshipType**: *[RelationshipData](README.md#relationshipdata)‹Type› | [RelationshipData](README.md#relationshipdata)‹Type›[]*

___

###  Relationships

Ƭ **Relationships**: *Record‹string, [RawRelationship](README.md#rawrelationship)‹[RelationshipType](README.md#relationshiptype)› | undefined›*

___

###  RelationshipsOf

Ƭ **RelationshipsOf**: *D extends object ? D["relationships"] : EmptyRecord*

___

###  ResolvedRelationship

Ƭ **ResolvedRelationship**: *[RawRelationship](README.md#rawrelationship)‹D›*

___

###  ResolvedRelationshipArray

Ƭ **ResolvedRelationshipArray**: *[RawRelationship](README.md#rawrelationship)‹D[]›*

___

###  ResolvedRelationships

Ƭ **ResolvedRelationships**: *Record‹string, [ResolvedRelationship](README.md#resolvedrelationship) | [ResolvedRelationshipArray](README.md#resolvedrelationshiparray) | undefined›*

___

###  UnresolvedRelationships

Ƭ **UnresolvedRelationships**: *Record‹string, [Relationship](README.md#relationship) | [RelationshipArray](README.md#relationshiparray)›*

## Variables

### `Const` DEFAULT_RESOURCE_LIMIT

• **DEFAULT_RESOURCE_LIMIT**: *10* = 10

## Functions

### `Const` findIncludedRelationship

▸ **findIncludedRelationship**(`relationship`: [RelationshipData](README.md#relationshipdata), `included`: [IncludedRelationships](README.md#includedrelationships)): *[AnyData](README.md#anydata) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`relationship` | [RelationshipData](README.md#relationshipdata) |
`included` | [IncludedRelationships](README.md#includedrelationships) |

**Returns:** *[AnyData](README.md#anydata) | undefined*

___

### `Const` includedGroup

▸ **includedGroup**<**D**>(`type`: string): *[IncludedGroup](interfaces/includedgroup.md)‹D›*

**Type parameters:**

▪ **D**: *[AnyData](README.md#anydata)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *[IncludedGroup](interfaces/includedgroup.md)‹D›*

___

### `Const` isData

▸ **isData**<**D**>(`data`: [RelationshipData](README.md#relationshipdata) | D): *data is D*

**Type parameters:**

▪ **D**: *[AnyData](README.md#anydata)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [RelationshipData](README.md#relationshipdata) &#124; D |

**Returns:** *data is D*

___

### `Const` mergeElementData

▸ **mergeElementData**<**D**>(`data`: D): *[MergedData](README.md#mergeddata)‹D›*

**Type parameters:**

▪ **D**: *[AnyData](README.md#anydata)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | D |

**Returns:** *[MergedData](README.md#mergeddata)‹D›*

___

###  resolveRelationships

▸ **resolveRelationships**<**D**>(`data`: D, `included`: [IncludedRelationships](README.md#includedrelationships)): *D*

**Type parameters:**

▪ **D**: *[AnyData](README.md#anydata) | [AnyData](README.md#anydata)[]*

**Parameters:**

Name | Type |
------ | ------ |
`data` | D |
`included` | [IncludedRelationships](README.md#includedrelationships) |

**Returns:** *D*

▸ **resolveRelationships**(`data`: [RelationshipData](README.md#relationshipdata)[], `included`: [IncludedRelationships](README.md#includedrelationships)): *object | [Data](interfaces/data.md)‹any, any›[]*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [RelationshipData](README.md#relationshipdata)[] |
`included` | [IncludedRelationships](README.md#includedrelationships) |

**Returns:** *object | [Data](interfaces/data.md)‹any, any›[]*

▸ **resolveRelationships**(`data`: [RelationshipData](README.md#relationshipdata), `included`: [IncludedRelationships](README.md#includedrelationships)): *[AnyData](README.md#anydata) | [RelationshipData](README.md#relationshipdata)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [RelationshipData](README.md#relationshipdata) |
`included` | [IncludedRelationships](README.md#includedrelationships) |

**Returns:** *[AnyData](README.md#anydata) | [RelationshipData](README.md#relationshipdata)*

## Object literals

### `Const` Headers

### ▪ **Headers**: *object*

###  Accept

• **Accept**: *ContentType* = ContentType.VND_JSON

###  Content-Type

• **Content-Type**: *ContentType* = ContentType.VND_JSON
