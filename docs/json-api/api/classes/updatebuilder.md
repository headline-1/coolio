# UpdateBuilder

## Type parameters

▪ **Raw**: [_RawResponse_](../interfaces/rawresponse.md)_‹any, any›_

## Hierarchy

* [RequestBuilder](requestbuilder.md)‹[JsonResponse](jsonresponse.md)‹Raw››

  ↳ **UpdateBuilder**

## Index

### Constructors

* [constructor](updatebuilder.md#constructor)

### Properties

* [attributes](updatebuilder.md#optional-attributes)
* [id](updatebuilder.md#optional-id)
* [limit](updatebuilder.md#protected-limit)
* [offset](updatebuilder.md#protected-offset)
* [options](updatebuilder.md#protected-options)
* [page](updatebuilder.md#protected-page)
* [queryParams](updatebuilder.md#protected-queryparams)
* [relationships](updatebuilder.md#optional-relationships)
* [resolveIncludedRelationships](updatebuilder.md#protected-resolveincludedrelationships)
* [sortParams](updatebuilder.md#protected-sortparams)
* [type](updatebuilder.md#optional-type)
* [uri](updatebuilder.md#uri)

### Accessors

* [parameters](updatebuilder.md#parameters)

### Methods

* [filter](updatebuilder.md#filter)
* [ofType](updatebuilder.md#oftype)
* [pageLimit](updatebuilder.md#pagelimit)
* [pageNumber](updatebuilder.md#pagenumber)
* [pageOffset](updatebuilder.md#pageoffset)
* [parameter](updatebuilder.md#parameter)
* [parseResponse](updatebuilder.md#protected-parseresponse)
* [resolveIncluded](updatebuilder.md#resolveincluded)
* [send](updatebuilder.md#send)
* [sort](updatebuilder.md#sort)
* [withAttributes](updatebuilder.md#withattributes)
* [withId](updatebuilder.md#withid)
* [withRelationship](updatebuilder.md#withrelationship)

## Constructors

### constructor

+ **new UpdateBuilder**\(`httpClient`: HttpClient, `uri`: string, `method`: "PATCH" \| "PUT"\): [_UpdateBuilder_](updatebuilder.md)

_Overrides_ [_RequestBuilder_](requestbuilder.md)_._[_constructor_](requestbuilder.md#protected-constructor)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `httpClient` | HttpClient |
| `uri` | string |
| `method` | "PATCH" \| "PUT" |

**Returns:** [_UpdateBuilder_](updatebuilder.md)

## Properties

### `Optional` attributes

• **attributes**? : _undefined \| object_

### `Optional` id

• **id**? : _undefined \| string_

### `Protected` limit

• **limit**: _number_ = DEFAULT\_RESOURCE\_LIMIT

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_limit_](requestbuilder.md#protected-limit)

### `Protected` offset

• **offset**: _undefined \| number_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_offset_](requestbuilder.md#protected-offset)

### `Protected` options

• **options**: [_Options_](../interfaces/options.md)

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_options_](requestbuilder.md#protected-options)

### `Protected` page

• **page**: _number_ = 1

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_page_](requestbuilder.md#protected-page)

### `Protected` queryParams

• **queryParams**: _Record‹string, string›_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_queryParams_](requestbuilder.md#protected-queryparams)

### `Optional` relationships

• **relationships**? : _Record‹string, object›_

### `Protected` resolveIncludedRelationships

• **resolveIncludedRelationships**: _boolean_ = false

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_resolveIncludedRelationships_](requestbuilder.md#protected-resolveincludedrelationships)

### `Protected` sortParams

• **sortParams**: _string\[\]_ = \[\]

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_sortParams_](requestbuilder.md#protected-sortparams)

### `Optional` type

• **type**? : _undefined \| string_

### uri

• **uri**: _string_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_uri_](requestbuilder.md#uri)

## Accessors

### parameters

• **get parameters**\(\): _Record‹string, string›_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_parameters_](requestbuilder.md#parameters)

**Returns:** _Record‹string, string›_

## Methods

### filter

▸ **filter**\(`key`: string \| string\[\] \| undefined, `value`: string \| number \| boolean \| undefined, `operator?`: [FilterOperator](../enums/filteroperator.md)\): _this_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_filter_](requestbuilder.md#filter)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `key` | string \| string\[\] \| undefined |
| `value` | string \| number \| boolean \| undefined |
| `operator?` | [FilterOperator](../enums/filteroperator.md) |

**Returns:** _this_

### ofType

▸ **ofType**\(`type`: string\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `type` | string |

**Returns:** _this_

### pageLimit

▸ **pageLimit**\(`limit`: number\): _this_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_pageLimit_](requestbuilder.md#pagelimit)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `limit` | number |

**Returns:** _this_

### pageNumber

▸ **pageNumber**\(`page`: number \| string \| undefined\): _this_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_pageNumber_](requestbuilder.md#pagenumber)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `page` | number \| string \| undefined |

**Returns:** _this_

### pageOffset

▸ **pageOffset**\(`offset`: number\): _this_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_pageOffset_](requestbuilder.md#pageoffset)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `offset` | number |

**Returns:** _this_

### parameter

▸ **parameter**\(`key`: string, `value`: string \| number \| boolean \| undefined\): _this_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_parameter_](requestbuilder.md#parameter)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `key` | string |
| `value` | string \| number \| boolean \| undefined |

**Returns:** _this_

### `Protected` parseResponse

▸ **parseResponse**&lt;**Raw**&gt;\(`response`: HttpResponse\): _Promise‹_[_JsonResponse_](jsonresponse.md)_‹Raw››_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_parseResponse_](requestbuilder.md#protected-parseresponse)

**Type parameters:**

▪ **Raw**: [_RawResponse_](../interfaces/rawresponse.md)_‹any, any›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `response` | HttpResponse |

**Returns:** _Promise‹_[_JsonResponse_](jsonresponse.md)_‹Raw››_

### resolveIncluded

▸ **resolveIncluded**\(`resolveIncluded?`: undefined \| false \| true\): _this_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_resolveIncluded_](requestbuilder.md#resolveincluded)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `resolveIncluded?` | undefined \| false \| true |

**Returns:** _this_

### send

▸ **send**\(`options`: HttpOptions\): _Promise‹_[_JsonResponse_](jsonresponse.md)_‹Raw››_

_Overrides_ [_RequestBuilder_](requestbuilder.md)_._[_send_](requestbuilder.md#abstract-send)

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `options` | HttpOptions | {} |

**Returns:** _Promise‹_[_JsonResponse_](jsonresponse.md)_‹Raw››_

### sort

▸ **sort**\(`key`: string \| undefined, `order`: [SortOrder](../enums/sortorder.md)\): _this_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_sort_](requestbuilder.md#sort)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `key` | string \| undefined |
| `order` | [SortOrder](../enums/sortorder.md) |

**Returns:** _this_

### withAttributes

▸ **withAttributes**\(`attributes`: object\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `attributes` | object |

**Returns:** _this_

### withId

▸ **withId**\(`id`: string\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `id` | string |

**Returns:** _this_

### withRelationship

▸ **withRelationship**\(`__namedParameters`: object\): _this_

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name | Type |
| :--- | :--- |
| `name` | string |
| `type` | string |
| `uuid` | string |

**Returns:** _this_

