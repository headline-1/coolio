# @coolio/json-api

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

*Defined in [jsonApi.interface.ts:46](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L46)*

___

###  AttributesOf

Ƭ **AttributesOf**: *D extends object ? D["attributes"] : EmptyRecord*

*Defined in [jsonApi.interface.ts:49](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L49)*

___

###  EmptyRecord

Ƭ **EmptyRecord**: *object*

*Defined in [jsonApi.interface.ts:48](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L48)*

#### Type declaration:

* \[ **key**: *string*\]: never

___

###  IncludedGroups

Ƭ **IncludedGroups**: *object*

*Defined in [jsonApi.interface.ts:108](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L108)*

#### Type declaration:

___

###  IncludedGroupsSchema

Ƭ **IncludedGroupsSchema**: *Record‹string, [IncludedGroup](interfaces/includedgroup.md)›*

*Defined in [jsonApi.interface.ts:106](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L106)*

___

###  IncludedRelationships

Ƭ **IncludedRelationships**: *D[]*

*Defined in [jsonApi.interface.ts:34](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L34)*

___

###  MergedData

Ƭ **MergedData**:

*Defined in [jsonApi.interface.ts:60](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L60)*

MergeData type
--------------
This sophisticated type allows to correctly infer nicely formatted data from JSON API format.
`id`, `type`, `attributes` and `relationships` suddenly become a single, combined object with easy access to it.
Same is applied to arrays.

___

###  MergedIncludedGroups

Ƭ **MergedIncludedGroups**: *object*

*Defined in [jsonApi.interface.ts:111](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L111)*

#### Type declaration:

___

###  OptionalRels

Ƭ **OptionalRels**: *[Relationships](README.md#relationships) | undefined*

*Defined in [jsonApi.interface.ts:32](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L32)*

___

###  RawRelationship

Ƭ **RawRelationship**: *object*

*Defined in [jsonApi.interface.ts:14](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L14)*

#### Type declaration:

* **data**: *T*

* **links**? : *undefined | object*

* **related**? : *undefined | string*

___

###  Relationship

Ƭ **Relationship**: *[RawRelationship](README.md#rawrelationship)‹[RelationshipData](README.md#relationshipdata)›*

*Defined in [jsonApi.interface.ts:23](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L23)*

___

###  RelationshipArray

Ƭ **RelationshipArray**: *[RawRelationship](README.md#rawrelationship)‹[RelationshipData](README.md#relationshipdata)[]›*

*Defined in [jsonApi.interface.ts:24](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L24)*

___

###  RelationshipData

Ƭ **RelationshipData**: *object*

*Defined in [jsonApi.interface.ts:7](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L7)*

#### Type declaration:

* **id**: *string*

* **type**: *Type*

___

###  RelationshipType

Ƭ **RelationshipType**: *[RelationshipData](README.md#relationshipdata)‹Type› | [RelationshipData](README.md#relationshipdata)‹Type›[]*

*Defined in [jsonApi.interface.ts:12](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L12)*

___

###  Relationships

Ƭ **Relationships**: *Record‹string, [RawRelationship](README.md#rawrelationship)‹[RelationshipType](README.md#relationshiptype)› | undefined›*

*Defined in [jsonApi.interface.ts:29](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L29)*

___

###  RelationshipsOf

Ƭ **RelationshipsOf**: *D extends object ? D["relationships"] : EmptyRecord*

*Defined in [jsonApi.interface.ts:50](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L50)*

___

###  ResolvedRelationship

Ƭ **ResolvedRelationship**: *[RawRelationship](README.md#rawrelationship)‹D›*

*Defined in [jsonApi.interface.ts:26](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L26)*

___

###  ResolvedRelationshipArray

Ƭ **ResolvedRelationshipArray**: *[RawRelationship](README.md#rawrelationship)‹D[]›*

*Defined in [jsonApi.interface.ts:27](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L27)*

___

###  ResolvedRelationships

Ƭ **ResolvedRelationships**: *Record‹string, [ResolvedRelationship](README.md#resolvedrelationship) | [ResolvedRelationshipArray](README.md#resolvedrelationshiparray) | undefined›*

*Defined in [jsonApi.interface.ts:31](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L31)*

___

###  UnresolvedRelationships

Ƭ **UnresolvedRelationships**: *Record‹string, [Relationship](README.md#relationship) | [RelationshipArray](README.md#relationshiparray)›*

*Defined in [jsonApi.interface.ts:30](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L30)*

## Variables

### `Const` DEFAULT_RESOURCE_LIMIT

• **DEFAULT_RESOURCE_LIMIT**: *10* = 10

*Defined in [jsonApi.builder.ts:7](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L7)*

## Functions

### `Const` findIncludedRelationship

▸ **findIncludedRelationship**(`relationship`: [RelationshipData](README.md#relationshipdata), `included`: [IncludedRelationships](README.md#includedrelationships)): *[AnyData](README.md#anydata) | undefined*

*Defined in [jsonApi.common.ts:41](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.common.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`relationship` | [RelationshipData](README.md#relationshipdata) |
`included` | [IncludedRelationships](README.md#includedrelationships) |

**Returns:** *[AnyData](README.md#anydata) | undefined*

___

### `Const` includedGroup

▸ **includedGroup**<**D**>(`type`: string): *[IncludedGroup](interfaces/includedgroup.md)‹D›*

*Defined in [jsonApi.common.ts:90](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.common.ts#L90)*

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

*Defined in [jsonApi.common.ts:14](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.common.ts#L14)*

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

*Defined in [jsonApi.common.ts:19](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.common.ts#L19)*

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

*Defined in [jsonApi.common.ts:50](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.common.ts#L50)*

**Type parameters:**

▪ **D**: *[AnyData](README.md#anydata) | [AnyData](README.md#anydata)[]*

**Parameters:**

Name | Type |
------ | ------ |
`data` | D |
`included` | [IncludedRelationships](README.md#includedrelationships) |

**Returns:** *D*

▸ **resolveRelationships**(`data`: [RelationshipData](README.md#relationshipdata)[], `included`: [IncludedRelationships](README.md#includedrelationships)): *object | [Data](interfaces/data.md)‹any, any›[]*

*Defined in [jsonApi.common.ts:54](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.common.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [RelationshipData](README.md#relationshipdata)[] |
`included` | [IncludedRelationships](README.md#includedrelationships) |

**Returns:** *object | [Data](interfaces/data.md)‹any, any›[]*

▸ **resolveRelationships**(`data`: [RelationshipData](README.md#relationshipdata), `included`: [IncludedRelationships](README.md#includedrelationships)): *[AnyData](README.md#anydata) | [RelationshipData](README.md#relationshipdata)*

*Defined in [jsonApi.common.ts:58](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.common.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [RelationshipData](README.md#relationshipdata) |
`included` | [IncludedRelationships](README.md#includedrelationships) |

**Returns:** *[AnyData](README.md#anydata) | [RelationshipData](README.md#relationshipdata)*

## Object literals

### `Const` Headers

### ▪ **Headers**: *object*

*Defined in [jsonApi.interface.ts:137](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L137)*

###  Accept

• **Accept**: *ContentType* = ContentType.VND_JSON

*Defined in [jsonApi.interface.ts:139](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L139)*

###  Content-Type

• **Content-Type**: *ContentType* = ContentType.VND_JSON

*Defined in [jsonApi.interface.ts:138](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.interface.ts#L138)*
