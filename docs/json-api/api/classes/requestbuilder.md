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

*Defined in [jsonApi.builder.ts:21](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options` | [Options](../interfaces/options.md) |

**Returns:** *[RequestBuilder](requestbuilder.md)*

## Properties

### `Protected` limit

• **limit**: *number* = DEFAULT_RESOURCE_LIMIT

*Defined in [jsonApi.builder.ts:19](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L19)*

___

### `Protected` offset

• **offset**: *undefined | number*

*Defined in [jsonApi.builder.ts:20](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L20)*

___

### `Protected` options

• **options**: *[Options](../interfaces/options.md)*

*Defined in [jsonApi.builder.ts:23](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L23)*

___

### `Protected` page

• **page**: *number* = 1

*Defined in [jsonApi.builder.ts:21](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L21)*

___

### `Protected` queryParams

• **queryParams**: *Record‹string, string›*

*Defined in [jsonApi.builder.ts:17](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L17)*

___

### `Protected` resolveIncludedRelationships

• **resolveIncludedRelationships**: *boolean* = false

*Defined in [jsonApi.builder.ts:16](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L16)*

___

### `Protected` sortParams

• **sortParams**: *string[]* = []

*Defined in [jsonApi.builder.ts:18](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L18)*

___

###  uri

• **uri**: *string*

*Defined in [jsonApi.builder.ts:15](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L15)*

## Accessors

###  parameters

• **get parameters**(): *Record‹string, string›*

*Defined in [jsonApi.builder.ts:50](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L50)*

**Returns:** *Record‹string, string›*

## Methods

###  filter

▸ **filter**(`key`: string | string[] | undefined, `value`: string | number | boolean | undefined, `operator?`: [FilterOperator](../enums/filteroperator.md)): *this*

*Defined in [jsonApi.builder.ts:84](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L84)*

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

*Defined in [jsonApi.builder.ts:102](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *this*

___

###  pageNumber

▸ **pageNumber**(`page`: number | string | undefined): *this*

*Defined in [jsonApi.builder.ts:112](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | number &#124; string &#124; undefined |

**Returns:** *this*

___

###  pageOffset

▸ **pageOffset**(`offset`: number): *this*

*Defined in [jsonApi.builder.ts:107](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *this*

___

###  parameter

▸ **parameter**(`key`: string, `value`: string | number | boolean | undefined): *this*

*Defined in [jsonApi.builder.ts:74](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string &#124; number &#124; boolean &#124; undefined |

**Returns:** *this*

___

### `Protected` parseResponse

▸ **parseResponse**<**Raw**>(`response`: HttpResponse): *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

*Defined in [jsonApi.builder.ts:117](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L117)*

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

*Defined in [jsonApi.builder.ts:69](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

### `Abstract` send

▸ **send**(`options?`: HttpOptions): *Promise‹ResponseType›*

*Defined in [jsonApi.builder.ts:67](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹ResponseType›*

___

###  sort

▸ **sort**(`key`: string | undefined, `order`: [SortOrder](../enums/sortorder.md)): *this*

*Defined in [jsonApi.builder.ts:95](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; undefined |
`order` | [SortOrder](../enums/sortorder.md) |

**Returns:** *this*
