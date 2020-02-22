[@coolio/json-api](../README.md) › ["jsonApi.common"](_jsonapi_common_.md)

# External module: "jsonApi.common"

## Index

### Functions

* [findIncludedRelationship](_jsonapi_common_.md#const-findincludedrelationship)
* [includedGroup](_jsonapi_common_.md#const-includedgroup)
* [isData](_jsonapi_common_.md#const-isdata)
* [mergeElementData](_jsonapi_common_.md#const-mergeelementdata)
* [resolveRelationships](_jsonapi_common_.md#resolverelationships)

## Functions

### `Const` findIncludedRelationship

▸ **findIncludedRelationship**(`relationship`: [RelationshipData](_jsonapi_interface_.md#relationshipdata), `included`: [IncludedRelationships](_jsonapi_interface_.md#includedrelationships)): *[AnyData](_jsonapi_interface_.md#anydata) | undefined*

*Defined in [jsonApi.common.ts:41](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.common.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`relationship` | [RelationshipData](_jsonapi_interface_.md#relationshipdata) |
`included` | [IncludedRelationships](_jsonapi_interface_.md#includedrelationships) |

**Returns:** *[AnyData](_jsonapi_interface_.md#anydata) | undefined*

___

### `Const` includedGroup

▸ **includedGroup**<**D**>(`type`: string): *[IncludedGroup](../interfaces/_jsonapi_interface_.includedgroup.md)‹D›*

*Defined in [jsonApi.common.ts:90](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.common.ts#L90)*

**Type parameters:**

▪ **D**: *[AnyData](_jsonapi_interface_.md#anydata)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *[IncludedGroup](../interfaces/_jsonapi_interface_.includedgroup.md)‹D›*

___

### `Const` isData

▸ **isData**<**D**>(`data`: [RelationshipData](_jsonapi_interface_.md#relationshipdata) | D): *data is D*

*Defined in [jsonApi.common.ts:14](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.common.ts#L14)*

**Type parameters:**

▪ **D**: *[AnyData](_jsonapi_interface_.md#anydata)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [RelationshipData](_jsonapi_interface_.md#relationshipdata) &#124; D |

**Returns:** *data is D*

___

### `Const` mergeElementData

▸ **mergeElementData**<**D**>(`data`: D): *[MergedData](_jsonapi_interface_.md#mergeddata)‹D›*

*Defined in [jsonApi.common.ts:19](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.common.ts#L19)*

**Type parameters:**

▪ **D**: *[AnyData](_jsonapi_interface_.md#anydata)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | D |

**Returns:** *[MergedData](_jsonapi_interface_.md#mergeddata)‹D›*

___

###  resolveRelationships

▸ **resolveRelationships**<**D**>(`data`: D, `included`: [IncludedRelationships](_jsonapi_interface_.md#includedrelationships)): *D*

*Defined in [jsonApi.common.ts:50](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.common.ts#L50)*

**Type parameters:**

▪ **D**: *[AnyData](_jsonapi_interface_.md#anydata) | [AnyData](_jsonapi_interface_.md#anydata)[]*

**Parameters:**

Name | Type |
------ | ------ |
`data` | D |
`included` | [IncludedRelationships](_jsonapi_interface_.md#includedrelationships) |

**Returns:** *D*

▸ **resolveRelationships**(`data`: [RelationshipData](_jsonapi_interface_.md#relationshipdata)[], `included`: [IncludedRelationships](_jsonapi_interface_.md#includedrelationships)): *object | [Data](../interfaces/_jsonapi_interface_.data.md)‹any, any›[]*

*Defined in [jsonApi.common.ts:54](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.common.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [RelationshipData](_jsonapi_interface_.md#relationshipdata)[] |
`included` | [IncludedRelationships](_jsonapi_interface_.md#includedrelationships) |

**Returns:** *object | [Data](../interfaces/_jsonapi_interface_.data.md)‹any, any›[]*

▸ **resolveRelationships**(`data`: [RelationshipData](_jsonapi_interface_.md#relationshipdata), `included`: [IncludedRelationships](_jsonapi_interface_.md#includedrelationships)): *[AnyData](_jsonapi_interface_.md#anydata) | [RelationshipData](_jsonapi_interface_.md#relationshipdata)*

*Defined in [jsonApi.common.ts:58](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.common.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [RelationshipData](_jsonapi_interface_.md#relationshipdata) |
`included` | [IncludedRelationships](_jsonapi_interface_.md#includedrelationships) |

**Returns:** *[AnyData](_jsonapi_interface_.md#anydata) | [RelationshipData](_jsonapi_interface_.md#relationshipdata)*
