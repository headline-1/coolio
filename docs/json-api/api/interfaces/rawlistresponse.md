# Interface: RawListResponse <**D, M**>

## Type parameters

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *[ListMetaData](listmetadata.md)*

## Hierarchy

* **RawListResponse**

## Index

### Properties

* [data](rawlistresponse.md#data)
* [included](rawlistresponse.md#optional-included)
* [links](rawlistresponse.md#links)
* [meta](rawlistresponse.md#meta)

## Properties

###  data

• **data**: *D[]*

*Defined in [jsonApi.interface.ts:126](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.interface.ts#L126)*

___

### `Optional` included

• **included**? : *[IncludedRelationships](../README.md#includedrelationships)*

*Defined in [jsonApi.interface.ts:133](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.interface.ts#L133)*

___

###  links

• **links**: *object*

*Defined in [jsonApi.interface.ts:127](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.interface.ts#L127)*

#### Type declaration:

* **first**: *string*

* **last**: *string*

* **next**? : *undefined | string*

* **prev**? : *undefined | string*

___

###  meta

• **meta**: *M*

*Defined in [jsonApi.interface.ts:134](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.interface.ts#L134)*
