# Class: GetBuilder <**Raw**>

## Type parameters

▪ **Raw**: *[RawResponse](../interfaces/rawresponse.md)‹any, any›*

## Hierarchy

* [RequestBuilder](requestbuilder.md)‹[JsonResponse](jsonresponse.md)‹Raw››

  ↳ **GetBuilder**

## Index

### Constructors

* [constructor](getbuilder.md#constructor)

### Properties

* [limit](getbuilder.md#protected-limit)
* [offset](getbuilder.md#protected-offset)
* [options](getbuilder.md#protected-options)
* [page](getbuilder.md#protected-page)
* [queryParams](getbuilder.md#protected-queryparams)
* [resolveIncludedRelationships](getbuilder.md#protected-resolveincludedrelationships)
* [sortParams](getbuilder.md#protected-sortparams)
* [uri](getbuilder.md#uri)

### Accessors

* [parameters](getbuilder.md#parameters)

### Methods

* [filter](getbuilder.md#filter)
* [pageLimit](getbuilder.md#pagelimit)
* [pageNumber](getbuilder.md#pagenumber)
* [pageOffset](getbuilder.md#pageoffset)
* [parameter](getbuilder.md#parameter)
* [parseResponse](getbuilder.md#protected-parseresponse)
* [resolveIncluded](getbuilder.md#resolveincluded)
* [send](getbuilder.md#send)
* [sort](getbuilder.md#sort)

## Constructors

###  constructor

\+ **new GetBuilder**(`httpClient`: HttpClient, `uri`: string): *[GetBuilder](getbuilder.md)*

*Overrides [RequestBuilder](requestbuilder.md).[constructor](requestbuilder.md#protected-constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |
`uri` | string |

**Returns:** *[GetBuilder](getbuilder.md)*

## Properties

### `Protected` limit

• **limit**: *number* = DEFAULT_RESOURCE_LIMIT

*Inherited from [RequestBuilder](requestbuilder.md).[limit](requestbuilder.md#protected-limit)*

___

### `Protected` offset

• **offset**: *undefined | number*

*Inherited from [RequestBuilder](requestbuilder.md).[offset](requestbuilder.md#protected-offset)*

___

### `Protected` options

• **options**: *[Options](../interfaces/options.md)*

*Inherited from [RequestBuilder](requestbuilder.md).[options](requestbuilder.md#protected-options)*

___

### `Protected` page

• **page**: *number* = 1

*Inherited from [RequestBuilder](requestbuilder.md).[page](requestbuilder.md#protected-page)*

___

### `Protected` queryParams

• **queryParams**: *Record‹string, string›*

*Inherited from [RequestBuilder](requestbuilder.md).[queryParams](requestbuilder.md#protected-queryparams)*

___

### `Protected` resolveIncludedRelationships

• **resolveIncludedRelationships**: *boolean* = false

*Inherited from [RequestBuilder](requestbuilder.md).[resolveIncludedRelationships](requestbuilder.md#protected-resolveincludedrelationships)*

___

### `Protected` sortParams

• **sortParams**: *string[]* = []

*Inherited from [RequestBuilder](requestbuilder.md).[sortParams](requestbuilder.md#protected-sortparams)*

___

###  uri

• **uri**: *string*

*Inherited from [RequestBuilder](requestbuilder.md).[uri](requestbuilder.md#uri)*

## Accessors

###  parameters

• **get parameters**(): *Record‹string, string›*

*Inherited from [RequestBuilder](requestbuilder.md).[parameters](requestbuilder.md#parameters)*

**Returns:** *Record‹string, string›*

## Methods

###  filter

▸ **filter**(`key`: string | string[] | undefined, `value`: string | number | boolean | undefined, `operator?`: [FilterOperator](../enums/filteroperator.md)): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[filter](requestbuilder.md#filter)*

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

### `Protected` parseResponse

▸ **parseResponse**<**Raw**>(`response`: HttpResponse): *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

*Inherited from [RequestBuilder](requestbuilder.md).[parseResponse](requestbuilder.md#protected-parseresponse)*

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

*Inherited from [RequestBuilder](requestbuilder.md).[resolveIncluded](requestbuilder.md#resolveincluded)*

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  send

▸ **send**(`options?`: HttpOptions): *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

*Overrides [RequestBuilder](requestbuilder.md).[send](requestbuilder.md#abstract-send)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

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
