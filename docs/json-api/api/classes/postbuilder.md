# PostBuilder

## Type parameters

▪ **Raw**: [_RawResponse_](../interfaces/rawresponse.md)_‹any, any›_

## Hierarchy

* [RequestBuilder](requestbuilder.md)‹[JsonResponse](jsonresponse.md)‹Raw››

  ↳ **PostBuilder**

## Index

### Constructors

* [constructor](postbuilder.md#constructor)

### Properties

* [attributes](postbuilder.md#optional-attributes)
* [id](postbuilder.md#optional-id)
* [limit](postbuilder.md#protected-limit)
* [offset](postbuilder.md#protected-offset)
* [options](postbuilder.md#protected-options)
* [page](postbuilder.md#protected-page)
* [queryParams](postbuilder.md#protected-queryparams)
* [relationships](postbuilder.md#optional-relationships)
* [resolveIncludedRelationships](postbuilder.md#protected-resolveincludedrelationships)
* [sortParams](postbuilder.md#protected-sortparams)
* [type](postbuilder.md#optional-type)
* [uri](postbuilder.md#uri)

### Accessors

* [parameters](postbuilder.md#parameters)

### Methods

* [filter](postbuilder.md#filter)
* [ofType](postbuilder.md#oftype)
* [pageLimit](postbuilder.md#pagelimit)
* [pageNumber](postbuilder.md#pagenumber)
* [pageOffset](postbuilder.md#pageoffset)
* [parameter](postbuilder.md#parameter)
* [parseResponse](postbuilder.md#protected-parseresponse)
* [resolveIncluded](postbuilder.md#resolveincluded)
* [send](postbuilder.md#send)
* [sort](postbuilder.md#sort)
* [withAttributes](postbuilder.md#withattributes)
* [withId](postbuilder.md#withid)
* [withRelationship](postbuilder.md#withrelationship)

## Constructors

### constructor

+ **new PostBuilder**\(`httpClient`: HttpClient, `uri`: string\): [_PostBuilder_](postbuilder.md)

_Overrides_ [_RequestBuilder_](requestbuilder.md)_._[_constructor_](requestbuilder.md#protected-constructor)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `httpClient` | HttpClient |
| `uri` | string |

**Returns:** [_PostBuilder_](postbuilder.md)

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

▸ **withRelationship**\(`rel?`: undefined \| object\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `rel?` | undefined \| object |

**Returns:** _this_

