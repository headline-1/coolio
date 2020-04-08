# Interface: RawListResponse <**D, M**>

This interface covers JSON API response for multiple elements.

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

___

### `Optional` included

• **included**? : *[IncludedRelationships](../README.md#includedrelationships)*

___

###  links

• **links**: *object*

#### Type declaration:

* **first**: *string*

* **last**: *string*

* **next**? : *undefined | string*

* **prev**? : *undefined | string*

* **self**? : *undefined | string*

___

###  meta

• **meta**: *M*
