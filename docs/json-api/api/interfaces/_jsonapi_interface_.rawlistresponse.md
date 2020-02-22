[@coolio/json-api](../README.md) › ["jsonApi.interface"](../modules/_jsonapi_interface_.md) › [RawListResponse](_jsonapi_interface_.rawlistresponse.md)

# Interface: RawListResponse <**D, M**>

## Type parameters

▪ **D**: *[AnyData](../modules/_jsonapi_interface_.md#anydata)*

▪ **M**: *[ListMetaData](_jsonapi_interface_.listmetadata.md)*

## Hierarchy

* **RawListResponse**

## Index

### Properties

* [data](_jsonapi_interface_.rawlistresponse.md#data)
* [included](_jsonapi_interface_.rawlistresponse.md#optional-included)
* [links](_jsonapi_interface_.rawlistresponse.md#links)
* [meta](_jsonapi_interface_.rawlistresponse.md#meta)

## Properties

###  data

• **data**: *D[]*

*Defined in [jsonApi.interface.ts:126](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L126)*

___

### `Optional` included

• **included**? : *[IncludedRelationships](../modules/_jsonapi_interface_.md#includedrelationships)*

*Defined in [jsonApi.interface.ts:133](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L133)*

___

###  links

• **links**: *object*

*Defined in [jsonApi.interface.ts:127](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L127)*

#### Type declaration:

* **first**: *string*

* **last**: *string*

* **next**? : *undefined | string*

* **prev**? : *undefined | string*

___

###  meta

• **meta**: *M*

*Defined in [jsonApi.interface.ts:134](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.interface.ts#L134)*
