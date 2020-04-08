# Class: RequestBuilder <**D, M**>

RequestBuilder is responsible for setting request options part of API call.
You can configure filters, sorting methods, pagination and then call [expectMany](requestbuilder.md#expectmany) or [expectOne](requestbuilder.md#expectone)
in order to send specify response processing params and finally send the request.

## Type parameters

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

## Hierarchy

* **RequestBuilder**

  ↳ [CreationalRequestBuilder](creationalrequestbuilder.md)

## Index

### Constructors

* [constructor](requestbuilder.md#constructor)

### Properties

* [requestData](requestbuilder.md#protected-requestdata)

### Methods

* [expectMany](requestbuilder.md#expectmany)
* [expectOne](requestbuilder.md#expectone)
* [filter](requestbuilder.md#filter)
* [onBeforeExpect](requestbuilder.md#protected-onbeforeexpect)
* [pageLimit](requestbuilder.md#pagelimit)
* [pageNumber](requestbuilder.md#pagenumber)
* [pageOffset](requestbuilder.md#pageoffset)
* [parameter](requestbuilder.md#parameter)
* [sort](requestbuilder.md#sort)

## Constructors

###  constructor

\+ **new RequestBuilder**(`httpClient`: HttpClient, `options`: [RequestBuilderOptions](../interfaces/requestbuilderoptions.md), `uri`: string): *[RequestBuilder](requestbuilder.md)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |
`options` | [RequestBuilderOptions](../interfaces/requestbuilderoptions.md) |
`uri` | string |

**Returns:** *[RequestBuilder](requestbuilder.md)*

## Properties

### `Protected` requestData

• **requestData**: *[JsonApiRequestData](jsonapirequestdata.md)*

## Methods

###  expectMany

▸ **expectMany**(): *[JsonApiManySender](jsonapimanysender.md)‹D, M & [ListMetaData](../interfaces/listmetadata.md), object›*

**Returns:** *[JsonApiManySender](jsonapimanysender.md)‹D, M & [ListMetaData](../interfaces/listmetadata.md), object›*

___

###  expectOne

▸ **expectOne**(): *[JsonApiOneSender](jsonapionesender.md)‹D, M›*

**Returns:** *[JsonApiOneSender](jsonapionesender.md)‹D, M›*

___

###  filter

▸ **filter**(`key`: string | string[], `value`: string | number | boolean | undefined): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; string[] |
`value` | string &#124; number &#124; boolean &#124; undefined |

**Returns:** *this*

___

### `Protected` onBeforeExpect

▸ **onBeforeExpect**(): *void*

Executed before [expectOne](requestbuilder.md#expectone) and [expectMany](requestbuilder.md#expectmany).
Can be overridden by inheriting classes.

**Returns:** *void*

___

###  pageLimit

▸ **pageLimit**(`limit`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *this*

___

###  pageNumber

▸ **pageNumber**(`page`: number | string | undefined): *this*

**Parameters:**

Name | Type |
------ | ------ |
`page` | number &#124; string &#124; undefined |

**Returns:** *this*

___

###  pageOffset

▸ **pageOffset**(`offset`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *this*

___

###  parameter

▸ **parameter**(`key`: string, `value`: string | number | boolean | undefined): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string &#124; number &#124; boolean &#124; undefined |

**Returns:** *this*

___

###  sort

▸ **sort**(`key`: string | undefined, `order`: [SortOrder](../enums/sortorder.md)): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; undefined |
`order` | [SortOrder](../enums/sortorder.md) |

**Returns:** *this*
