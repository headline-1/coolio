[@coolio/json-api](../README.md) › ["jsonApi.builder"](../modules/_jsonapi_builder_.md) › [RequestBuilder](_jsonapi_builder_.requestbuilder.md)

# Class: RequestBuilder <**ResponseType**>

## Type parameters

▪ **ResponseType**

## Hierarchy

* **RequestBuilder**

  ↳ [GetBuilder](_jsonapi_get_.getbuilder.md)

  ↳ [GetListBuilder](_jsonapi_getlist_.getlistbuilder.md)

  ↳ [PostBuilder](_jsonapi_post_.postbuilder.md)

  ↳ [RemoveBuilder](_jsonapi_remove_.removebuilder.md)

  ↳ [UpdateBuilder](_jsonapi_update_.updatebuilder.md)

## Index

### Constructors

* [constructor](_jsonapi_builder_.requestbuilder.md#protected-constructor)

### Properties

* [limit](_jsonapi_builder_.requestbuilder.md#protected-limit)
* [offset](_jsonapi_builder_.requestbuilder.md#protected-offset)
* [options](_jsonapi_builder_.requestbuilder.md#protected-options)
* [page](_jsonapi_builder_.requestbuilder.md#protected-page)
* [queryParams](_jsonapi_builder_.requestbuilder.md#protected-queryparams)
* [resolveIncludedRelationships](_jsonapi_builder_.requestbuilder.md#protected-resolveincludedrelationships)
* [sortParams](_jsonapi_builder_.requestbuilder.md#protected-sortparams)
* [uri](_jsonapi_builder_.requestbuilder.md#uri)

### Accessors

* [parameters](_jsonapi_builder_.requestbuilder.md#parameters)

### Methods

* [filter](_jsonapi_builder_.requestbuilder.md#filter)
* [pageLimit](_jsonapi_builder_.requestbuilder.md#pagelimit)
* [pageNumber](_jsonapi_builder_.requestbuilder.md#pagenumber)
* [pageOffset](_jsonapi_builder_.requestbuilder.md#pageoffset)
* [parameter](_jsonapi_builder_.requestbuilder.md#parameter)
* [parseResponse](_jsonapi_builder_.requestbuilder.md#protected-parseresponse)
* [resolveIncluded](_jsonapi_builder_.requestbuilder.md#resolveincluded)
* [send](_jsonapi_builder_.requestbuilder.md#abstract-send)
* [sort](_jsonapi_builder_.requestbuilder.md#sort)

## Constructors

### `Protected` constructor

\+ **new RequestBuilder**(`uri`: string, `options`: Options): *[RequestBuilder](_jsonapi_builder_.requestbuilder.md)*

*Defined in [jsonApi.builder.ts:21](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options` | Options |

**Returns:** *[RequestBuilder](_jsonapi_builder_.requestbuilder.md)*

## Properties

### `Protected` limit

• **limit**: *number* = DEFAULT_RESOURCE_LIMIT

*Defined in [jsonApi.builder.ts:19](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L19)*

___

### `Protected` offset

• **offset**: *undefined | number*

*Defined in [jsonApi.builder.ts:20](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L20)*

___

### `Protected` options

• **options**: *Options*

*Defined in [jsonApi.builder.ts:23](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L23)*

___

### `Protected` page

• **page**: *number* = 1

*Defined in [jsonApi.builder.ts:21](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L21)*

___

### `Protected` queryParams

• **queryParams**: *Record‹string, string›*

*Defined in [jsonApi.builder.ts:17](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L17)*

___

### `Protected` resolveIncludedRelationships

• **resolveIncludedRelationships**: *boolean* = false

*Defined in [jsonApi.builder.ts:16](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L16)*

___

### `Protected` sortParams

• **sortParams**: *string[]* = []

*Defined in [jsonApi.builder.ts:18](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L18)*

___

###  uri

• **uri**: *string*

*Defined in [jsonApi.builder.ts:15](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L15)*

## Accessors

###  parameters

• **get parameters**(): *Record‹string, string›*

*Defined in [jsonApi.builder.ts:50](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L50)*

**Returns:** *Record‹string, string›*

## Methods

###  filter

▸ **filter**(`key`: string | string[] | undefined, `value`: string | number | boolean | undefined, `operator?`: [FilterOperator](../enums/_jsonapi_interface_.filteroperator.md)): *this*

*Defined in [jsonApi.builder.ts:84](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; string[] &#124; undefined |
`value` | string &#124; number &#124; boolean &#124; undefined |
`operator?` | [FilterOperator](../enums/_jsonapi_interface_.filteroperator.md) |

**Returns:** *this*

___

###  pageLimit

▸ **pageLimit**(`limit`: number): *this*

*Defined in [jsonApi.builder.ts:102](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *this*

___

###  pageNumber

▸ **pageNumber**(`page`: number | string | undefined): *this*

*Defined in [jsonApi.builder.ts:112](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | number &#124; string &#124; undefined |

**Returns:** *this*

___

###  pageOffset

▸ **pageOffset**(`offset`: number): *this*

*Defined in [jsonApi.builder.ts:107](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *this*

___

###  parameter

▸ **parameter**(`key`: string, `value`: string | number | boolean | undefined): *this*

*Defined in [jsonApi.builder.ts:74](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string &#124; number &#124; boolean &#124; undefined |

**Returns:** *this*

___

### `Protected` parseResponse

▸ **parseResponse**<**Raw**>(`response`: HttpResponse): *Promise‹[JsonResponse](_jsonapi_response_.jsonresponse.md)‹Raw››*

*Defined in [jsonApi.builder.ts:117](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L117)*

**Type parameters:**

▪ **Raw**: *[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | HttpResponse |

**Returns:** *Promise‹[JsonResponse](_jsonapi_response_.jsonresponse.md)‹Raw››*

___

###  resolveIncluded

▸ **resolveIncluded**(`resolveIncluded?`: undefined | false | true): *this*

*Defined in [jsonApi.builder.ts:69](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

### `Abstract` send

▸ **send**(`options?`: HttpOptions): *Promise‹ResponseType›*

*Defined in [jsonApi.builder.ts:67](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹ResponseType›*

___

###  sort

▸ **sort**(`key`: string | undefined, `order`: [SortOrder](../enums/_jsonapi_interface_.sortorder.md)): *this*

*Defined in [jsonApi.builder.ts:95](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; undefined |
`order` | [SortOrder](../enums/_jsonapi_interface_.sortorder.md) |

**Returns:** *this*
