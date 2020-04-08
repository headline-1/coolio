# Class: CreationalRequestBuilder <**D, M**>

This RequestBuilder adds possibility to form a body for JSON API requests.
Besides filling in query and filter options offered by [RequestBuilder](requestbuilder.md),
one can create a POST, PUT or PATCH request with JSON API-shaped body.

## Type parameters

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

## Hierarchy

* [RequestBuilder](requestbuilder.md)‹D, M›

  ↳ **CreationalRequestBuilder**

## Index

### Constructors

* [constructor](creationalrequestbuilder.md#constructor)

### Properties

* [attributes](creationalrequestbuilder.md#optional-attributes)
* [id](creationalrequestbuilder.md#optional-id)
* [relationships](creationalrequestbuilder.md#optional-relationships)
* [requestData](creationalrequestbuilder.md#protected-requestdata)
* [type](creationalrequestbuilder.md#optional-type)

### Methods

* [expectMany](creationalrequestbuilder.md#expectmany)
* [expectOne](creationalrequestbuilder.md#expectone)
* [filter](creationalrequestbuilder.md#filter)
* [ofType](creationalrequestbuilder.md#oftype)
* [onBeforeExpect](creationalrequestbuilder.md#protected-onbeforeexpect)
* [pageLimit](creationalrequestbuilder.md#pagelimit)
* [pageNumber](creationalrequestbuilder.md#pagenumber)
* [pageOffset](creationalrequestbuilder.md#pageoffset)
* [parameter](creationalrequestbuilder.md#parameter)
* [sort](creationalrequestbuilder.md#sort)
* [withAttributes](creationalrequestbuilder.md#withattributes)
* [withId](creationalrequestbuilder.md#withid)
* [withRelationship](creationalrequestbuilder.md#withrelationship)

## Constructors

###  constructor

\+ **new CreationalRequestBuilder**(`httpClient`: HttpClient, `options`: [RequestBuilderOptions](../interfaces/requestbuilderoptions.md), `uri`: string): *[CreationalRequestBuilder](creationalrequestbuilder.md)*

*Overrides [RequestBuilder](requestbuilder.md).[constructor](requestbuilder.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |
`options` | [RequestBuilderOptions](../interfaces/requestbuilderoptions.md) |
`uri` | string |

**Returns:** *[CreationalRequestBuilder](creationalrequestbuilder.md)*

## Properties

### `Optional` attributes

• **attributes**? : *undefined | object*

___

### `Optional` id

• **id**? : *undefined | string*

___

### `Optional` relationships

• **relationships**? : *Record‹string, object›*

___

### `Protected` requestData

• **requestData**: *[JsonApiRequestData](jsonapirequestdata.md)*

*Inherited from [RequestBuilder](requestbuilder.md).[requestData](requestbuilder.md#protected-requestdata)*

___

### `Optional` type

• **type**? : *undefined | string*

## Methods

###  expectMany

▸ **expectMany**(): *[JsonApiManySender](jsonapimanysender.md)‹D, M & [ListMetaData](../interfaces/listmetadata.md), object›*

*Inherited from [RequestBuilder](requestbuilder.md).[expectMany](requestbuilder.md#expectmany)*

**Returns:** *[JsonApiManySender](jsonapimanysender.md)‹D, M & [ListMetaData](../interfaces/listmetadata.md), object›*

___

###  expectOne

▸ **expectOne**(): *[JsonApiOneSender](jsonapionesender.md)‹D, M›*

*Inherited from [RequestBuilder](requestbuilder.md).[expectOne](requestbuilder.md#expectone)*

**Returns:** *[JsonApiOneSender](jsonapionesender.md)‹D, M›*

___

###  filter

▸ **filter**(`key`: string | string[], `value`: string | number | boolean | undefined): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[filter](requestbuilder.md#filter)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; string[] |
`value` | string &#124; number &#124; boolean &#124; undefined |

**Returns:** *this*

___

###  ofType

▸ **ofType**(`type`: string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *this*

___

### `Protected` onBeforeExpect

▸ **onBeforeExpect**(): *void*

*Overrides [RequestBuilder](requestbuilder.md).[onBeforeExpect](requestbuilder.md#protected-onbeforeexpect)*

Validates the body params and puts it to [JsonApiRequestData](jsonapirequestdata.md).

**Returns:** *void*

___

###  pageLimit

▸ **pageLimit**(`limit`: number): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[pageLimit](requestbuilder.md#pagelimit)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *this*

___

###  pageNumber

▸ **pageNumber**(`page`: number | string | undefined): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[pageNumber](requestbuilder.md#pagenumber)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | number &#124; string &#124; undefined |

**Returns:** *this*

___

###  pageOffset

▸ **pageOffset**(`offset`: number): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[pageOffset](requestbuilder.md#pageoffset)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *this*

___

###  parameter

▸ **parameter**(`key`: string, `value`: string | number | boolean | undefined): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[parameter](requestbuilder.md#parameter)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string &#124; number &#124; boolean &#124; undefined |

**Returns:** *this*

___

###  sort

▸ **sort**(`key`: string | undefined, `order`: [SortOrder](../enums/sortorder.md)): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[sort](requestbuilder.md#sort)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; undefined |
`order` | [SortOrder](../enums/sortorder.md) |

**Returns:** *this*

___

###  withAttributes

▸ **withAttributes**(`attributes`: object): *this*

**Parameters:**

Name | Type |
------ | ------ |
`attributes` | object |

**Returns:** *this*

___

###  withId

▸ **withId**(`id`: string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *this*

___

###  withRelationship

▸ **withRelationship**(`rel?`: undefined | object): *this*

**Parameters:**

Name | Type |
------ | ------ |
`rel?` | undefined &#124; object |

**Returns:** *this*
