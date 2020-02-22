[@coolio/json-api](../README.md) › ["jsonApi.get"](../modules/_jsonapi_get_.md) › [GetBuilder](_jsonapi_get_.getbuilder.md)

# Class: GetBuilder <**Raw**>

## Type parameters

▪ **Raw**: *[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹any, any›*

## Hierarchy

* [RequestBuilder](_jsonapi_builder_.requestbuilder.md)‹[JsonResponse](_jsonapi_response_.jsonresponse.md)‹Raw››

  ↳ **GetBuilder**

## Index

### Constructors

* [constructor](_jsonapi_get_.getbuilder.md#constructor)

### Properties

* [httpClient](_jsonapi_get_.getbuilder.md#private-httpclient)
* [limit](_jsonapi_get_.getbuilder.md#protected-limit)
* [offset](_jsonapi_get_.getbuilder.md#protected-offset)
* [options](_jsonapi_get_.getbuilder.md#protected-options)
* [page](_jsonapi_get_.getbuilder.md#protected-page)
* [queryParams](_jsonapi_get_.getbuilder.md#protected-queryparams)
* [resolveIncludedRelationships](_jsonapi_get_.getbuilder.md#protected-resolveincludedrelationships)
* [sortParams](_jsonapi_get_.getbuilder.md#protected-sortparams)
* [uri](_jsonapi_get_.getbuilder.md#uri)

### Accessors

* [parameters](_jsonapi_get_.getbuilder.md#parameters)

### Methods

* [filter](_jsonapi_get_.getbuilder.md#filter)
* [pageLimit](_jsonapi_get_.getbuilder.md#pagelimit)
* [pageNumber](_jsonapi_get_.getbuilder.md#pagenumber)
* [pageOffset](_jsonapi_get_.getbuilder.md#pageoffset)
* [parameter](_jsonapi_get_.getbuilder.md#parameter)
* [parseResponse](_jsonapi_get_.getbuilder.md#protected-parseresponse)
* [resolveIncluded](_jsonapi_get_.getbuilder.md#resolveincluded)
* [send](_jsonapi_get_.getbuilder.md#send)
* [sort](_jsonapi_get_.getbuilder.md#sort)

## Constructors

###  constructor

\+ **new GetBuilder**(`httpClient`: HttpClient, `uri`: string): *[GetBuilder](_jsonapi_get_.getbuilder.md)*

*Overrides [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[constructor](_jsonapi_builder_.requestbuilder.md#protected-constructor)*

*Defined in [jsonApi.get.ts:6](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.get.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |
`uri` | string |

**Returns:** *[GetBuilder](_jsonapi_get_.getbuilder.md)*

## Properties

### `Private` httpClient

• **httpClient**: *HttpClient*

*Defined in [jsonApi.get.ts:8](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.get.ts#L8)*

___

### `Protected` limit

• **limit**: *number* = DEFAULT_RESOURCE_LIMIT

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[limit](_jsonapi_builder_.requestbuilder.md#protected-limit)*

*Defined in [jsonApi.builder.ts:19](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L19)*

___

### `Protected` offset

• **offset**: *undefined | number*

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[offset](_jsonapi_builder_.requestbuilder.md#protected-offset)*

*Defined in [jsonApi.builder.ts:20](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L20)*

___

### `Protected` options

• **options**: *Options*

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[options](_jsonapi_builder_.requestbuilder.md#protected-options)*

*Defined in [jsonApi.builder.ts:23](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L23)*

___

### `Protected` page

• **page**: *number* = 1

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[page](_jsonapi_builder_.requestbuilder.md#protected-page)*

*Defined in [jsonApi.builder.ts:21](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L21)*

___

### `Protected` queryParams

• **queryParams**: *Record‹string, string›*

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[queryParams](_jsonapi_builder_.requestbuilder.md#protected-queryparams)*

*Defined in [jsonApi.builder.ts:17](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L17)*

___

### `Protected` resolveIncludedRelationships

• **resolveIncludedRelationships**: *boolean* = false

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[resolveIncludedRelationships](_jsonapi_builder_.requestbuilder.md#protected-resolveincludedrelationships)*

*Defined in [jsonApi.builder.ts:16](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L16)*

___

### `Protected` sortParams

• **sortParams**: *string[]* = []

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[sortParams](_jsonapi_builder_.requestbuilder.md#protected-sortparams)*

*Defined in [jsonApi.builder.ts:18](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L18)*

___

###  uri

• **uri**: *string*

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[uri](_jsonapi_builder_.requestbuilder.md#uri)*

*Defined in [jsonApi.builder.ts:15](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L15)*

## Accessors

###  parameters

• **get parameters**(): *Record‹string, string›*

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[parameters](_jsonapi_builder_.requestbuilder.md#parameters)*

*Defined in [jsonApi.builder.ts:50](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L50)*

**Returns:** *Record‹string, string›*

## Methods

###  filter

▸ **filter**(`key`: string | string[] | undefined, `value`: string | number | boolean | undefined, `operator?`: [FilterOperator](../enums/_jsonapi_interface_.filteroperator.md)): *this*

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[filter](_jsonapi_builder_.requestbuilder.md#filter)*

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

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[pageLimit](_jsonapi_builder_.requestbuilder.md#pagelimit)*

*Defined in [jsonApi.builder.ts:102](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *this*

___

###  pageNumber

▸ **pageNumber**(`page`: number | string | undefined): *this*

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[pageNumber](_jsonapi_builder_.requestbuilder.md#pagenumber)*

*Defined in [jsonApi.builder.ts:112](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | number &#124; string &#124; undefined |

**Returns:** *this*

___

###  pageOffset

▸ **pageOffset**(`offset`: number): *this*

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[pageOffset](_jsonapi_builder_.requestbuilder.md#pageoffset)*

*Defined in [jsonApi.builder.ts:107](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *this*

___

###  parameter

▸ **parameter**(`key`: string, `value`: string | number | boolean | undefined): *this*

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[parameter](_jsonapi_builder_.requestbuilder.md#parameter)*

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

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[parseResponse](_jsonapi_builder_.requestbuilder.md#protected-parseresponse)*

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

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[resolveIncluded](_jsonapi_builder_.requestbuilder.md#resolveincluded)*

*Defined in [jsonApi.builder.ts:69](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  send

▸ **send**(`options?`: HttpOptions): *Promise‹[JsonResponse](_jsonapi_response_.jsonresponse.md)‹Raw››*

*Overrides [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[send](_jsonapi_builder_.requestbuilder.md#abstract-send)*

*Defined in [jsonApi.get.ts:12](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.get.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹[JsonResponse](_jsonapi_response_.jsonresponse.md)‹Raw››*

___

###  sort

▸ **sort**(`key`: string | undefined, `order`: [SortOrder](../enums/_jsonapi_interface_.sortorder.md)): *this*

*Inherited from [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[sort](_jsonapi_builder_.requestbuilder.md#sort)*

*Defined in [jsonApi.builder.ts:95](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.builder.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; undefined |
`order` | [SortOrder](../enums/_jsonapi_interface_.sortorder.md) |

**Returns:** *this*
