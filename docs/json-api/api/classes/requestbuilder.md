# Class: RequestBuilder <**ResponseType**>

## Type parameters

▪ **ResponseType**

## Hierarchy

* **RequestBuilder**

  ↳ [GetBuilder](getbuilder.md)

  ↳ [GetListBuilder](getlistbuilder.md)

  ↳ [PostBuilder](postbuilder.md)

  ↳ [RemoveBuilder](removebuilder.md)

  ↳ [UpdateBuilder](updatebuilder.md)

## Index

### Constructors

* [constructor](requestbuilder.md#protected-constructor)

### Properties

* [limit](requestbuilder.md#protected-limit)
* [offset](requestbuilder.md#protected-offset)
* [options](requestbuilder.md#protected-options)
* [page](requestbuilder.md#protected-page)
* [queryParams](requestbuilder.md#protected-queryparams)
* [resolveIncludedRelationships](requestbuilder.md#protected-resolveincludedrelationships)
* [sortParams](requestbuilder.md#protected-sortparams)
* [uri](requestbuilder.md#uri)

### Accessors

* [parameters](requestbuilder.md#parameters)

### Methods

* [filter](requestbuilder.md#filter)
* [pageLimit](requestbuilder.md#pagelimit)
* [pageNumber](requestbuilder.md#pagenumber)
* [pageOffset](requestbuilder.md#pageoffset)
* [parameter](requestbuilder.md#parameter)
* [parseResponse](requestbuilder.md#protected-parseresponse)
* [resolveIncluded](requestbuilder.md#resolveincluded)
* [send](requestbuilder.md#abstract-send)
* [sort](requestbuilder.md#sort)

## Constructors

### `Protected` constructor

\+ **new RequestBuilder**(`uri`: string, `options`: [Options](../interfaces/options.md)): *[RequestBuilder](requestbuilder.md)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options` | [Options](../interfaces/options.md) |

**Returns:** *[RequestBuilder](requestbuilder.md)*

## Properties

### `Protected` limit

• **limit**: *number* = DEFAULT_RESOURCE_LIMIT

___

### `Protected` offset

• **offset**: *undefined | number*

___

### `Protected` options

• **options**: *[Options](../interfaces/options.md)*

___

### `Protected` page

• **page**: *number* = 1

___

### `Protected` queryParams

• **queryParams**: *Record‹string, string›*

___

### `Protected` resolveIncludedRelationships

• **resolveIncludedRelationships**: *boolean* = false

___

### `Protected` sortParams

• **sortParams**: *string[]* = []

___

###  uri

• **uri**: *string*

## Accessors

###  parameters

• **get parameters**(): *Record‹string, string›*

**Returns:** *Record‹string, string›*

## Methods

###  filter

▸ **filter**(`key`: string | string[] | undefined, `value`: string | number | boolean | undefined, `operator?`: [FilterOperator](../enums/filteroperator.md)): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; string[] &#124; undefined |
`value` | string &#124; number &#124; boolean &#124; undefined |
`operator?` | [FilterOperator](../enums/filteroperator.md) |

**Returns:** *this*

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

### `Protected` parseResponse

▸ **parseResponse**<**Raw**>(`response`: HttpResponse): *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

**Type parameters:**

▪ **Raw**: *[RawResponse](../interfaces/rawresponse.md)‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | HttpResponse |

**Returns:** *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

___

###  resolveIncluded

▸ **resolveIncluded**(`resolveIncluded?`: undefined | false | true): *this*

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

### `Abstract` send

▸ **send**(`options?`: HttpOptions): *Promise‹ResponseType›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹ResponseType›*

___

###  sort

▸ **sort**(`key`: string | undefined, `order`: [SortOrder](../enums/sortorder.md)): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; undefined |
`order` | [SortOrder](../enums/sortorder.md) |

**Returns:** *this*
