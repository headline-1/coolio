[@coolio/json-api](../README.md) › ["jsonApi.interface"](_jsonapi_interface_.md)

# External module: "jsonApi.interface"

## Index

### Enumerations

* [FilterOperator](../enums/_jsonapi_interface_.filteroperator.md)
* [SortOrder](../enums/_jsonapi_interface_.sortorder.md)

### Interfaces

* [Attributes](../interfaces/_jsonapi_interface_.attributes.md)
* [Data](../interfaces/_jsonapi_interface_.data.md)
* [IncludedGroup](../interfaces/_jsonapi_interface_.includedgroup.md)
* [ListMetaData](../interfaces/_jsonapi_interface_.listmetadata.md)
* [RawListResponse](../interfaces/_jsonapi_interface_.rawlistresponse.md)
* [RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)

### Type aliases

* [AnyData](_jsonapi_interface_.md#anydata)
* [AttributesOf](_jsonapi_interface_.md#attributesof)
* [IncludedGroups](_jsonapi_interface_.md#includedgroups)
* [IncludedGroupsSchema](_jsonapi_interface_.md#includedgroupsschema)
* [IncludedRelationships](_jsonapi_interface_.md#includedrelationships)
* [MergedData](_jsonapi_interface_.md#mergeddata)
* [MergedIncludedGroups](_jsonapi_interface_.md#mergedincludedgroups)
* [OptionalRels](_jsonapi_interface_.md#optionalrels)
* [Relationship](_jsonapi_interface_.md#relationship)
* [RelationshipArray](_jsonapi_interface_.md#relationshiparray)
* [RelationshipData](_jsonapi_interface_.md#relationshipdata)
* [RelationshipType](_jsonapi_interface_.md#relationshiptype)
* [Relationships](_jsonapi_interface_.md#relationships)
* [RelationshipsOf](_jsonapi_interface_.md#relationshipsof)
* [ResolvedRelationship](_jsonapi_interface_.md#resolvedrelationship)
* [ResolvedRelationshipArray](_jsonapi_interface_.md#resolvedrelationshiparray)
* [ResolvedRelationships](_jsonapi_interface_.md#resolvedrelationships)
* [UnresolvedRelationships](_jsonapi_interface_.md#unresolvedrelationships)

### Object literals

* [Headers](_jsonapi_interface_.md#const-headers)

## Type aliases

###  AnyData

Ƭ **AnyData**: *[Data](../interfaces/_jsonapi_interface_.data.md)‹any, any›*

*Defined in [jsonApi.interface.ts:46](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L46)*

___

###  AttributesOf

Ƭ **AttributesOf**: *D extends object ? D["attributes"] : EmptyRecord*

*Defined in [jsonApi.interface.ts:49](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L49)*

___

###  IncludedGroups

Ƭ **IncludedGroups**: *object*

*Defined in [jsonApi.interface.ts:108](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L108)*

#### Type declaration:

___

###  IncludedGroupsSchema

Ƭ **IncludedGroupsSchema**: *Record‹string, [IncludedGroup](../interfaces/_jsonapi_interface_.includedgroup.md)›*

*Defined in [jsonApi.interface.ts:106](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L106)*

___

###  IncludedRelationships

Ƭ **IncludedRelationships**: *D[]*

*Defined in [jsonApi.interface.ts:34](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L34)*

___

###  MergedData

Ƭ **MergedData**:

*Defined in [jsonApi.interface.ts:60](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L60)*

MergeData type
--------------
This sophisticated type allows to correctly infer nicely formatted data from JSON API format.
`id`, `type`, `attributes` and `relationships` suddenly become a single, combined object with easy access to it.
Same is applied to arrays.

___

###  MergedIncludedGroups

Ƭ **MergedIncludedGroups**: *object*

*Defined in [jsonApi.interface.ts:111](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L111)*

#### Type declaration:

___

###  OptionalRels

Ƭ **OptionalRels**: *[Relationships](_jsonapi_interface_.md#relationships) | undefined*

*Defined in [jsonApi.interface.ts:32](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L32)*

___

###  Relationship

Ƭ **Relationship**: *RawRelationship‹[RelationshipData](_jsonapi_interface_.md#relationshipdata)›*

*Defined in [jsonApi.interface.ts:23](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L23)*

___

###  RelationshipArray

Ƭ **RelationshipArray**: *RawRelationship‹[RelationshipData](_jsonapi_interface_.md#relationshipdata)[]›*

*Defined in [jsonApi.interface.ts:24](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L24)*

___

###  RelationshipData

Ƭ **RelationshipData**: *object*

*Defined in [jsonApi.interface.ts:7](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L7)*

#### Type declaration:

* **id**: *string*

* **type**: *Type*

___

###  RelationshipType

Ƭ **RelationshipType**: *[RelationshipData](_jsonapi_interface_.md#relationshipdata)‹Type› | [RelationshipData](_jsonapi_interface_.md#relationshipdata)‹Type›[]*

*Defined in [jsonApi.interface.ts:12](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L12)*

___

###  Relationships

Ƭ **Relationships**: *Record‹string, RawRelationship‹[RelationshipType](_jsonapi_interface_.md#relationshiptype)› | undefined›*

*Defined in [jsonApi.interface.ts:29](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L29)*

___

###  RelationshipsOf

Ƭ **RelationshipsOf**: *D extends object ? D["relationships"] : EmptyRecord*

*Defined in [jsonApi.interface.ts:50](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L50)*

___

###  ResolvedRelationship

Ƭ **ResolvedRelationship**: *RawRelationship‹D›*

*Defined in [jsonApi.interface.ts:26](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L26)*

___

###  ResolvedRelationshipArray

Ƭ **ResolvedRelationshipArray**: *RawRelationship‹D[]›*

*Defined in [jsonApi.interface.ts:27](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L27)*

___

###  ResolvedRelationships

Ƭ **ResolvedRelationships**: *Record‹string, [ResolvedRelationship](_jsonapi_interface_.md#resolvedrelationship) | [ResolvedRelationshipArray](_jsonapi_interface_.md#resolvedrelationshiparray) | undefined›*

*Defined in [jsonApi.interface.ts:31](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L31)*

___

###  UnresolvedRelationships

Ƭ **UnresolvedRelationships**: *Record‹string, [Relationship](_jsonapi_interface_.md#relationship) | [RelationshipArray](_jsonapi_interface_.md#relationshiparray)›*

*Defined in [jsonApi.interface.ts:30](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L30)*

## Object literals

### `Const` Headers

### ▪ **Headers**: *object*

*Defined in [jsonApi.interface.ts:137](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L137)*

###  Accept

• **Accept**: *ContentType* = ContentType.VND_JSON

*Defined in [jsonApi.interface.ts:139](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L139)*

###  Content-Type

• **Content-Type**: *ContentType* = ContentType.VND_JSON

*Defined in [jsonApi.interface.ts:138](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L138)*
