# RequestBuilder

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

+ **new RequestBuilder**\(`uri`: string, `options`: [Options](../interfaces/options.md)\): [_RequestBuilder_](requestbuilder.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `uri` | string |
| `options` | [Options](../interfaces/options.md) |

**Returns:** [_RequestBuilder_](requestbuilder.md)

## Properties

### `Protected` limit

• **limit**: _number_ = DEFAULT\_RESOURCE\_LIMIT

### `Protected` offset

• **offset**: _undefined \| number_

### `Protected` options

• **options**: [_Options_](../interfaces/options.md)

### `Protected` page

• **page**: _number_ = 1

### `Protected` queryParams

• **queryParams**: _Record‹string, string›_

### `Protected` resolveIncludedRelationships

• **resolveIncludedRelationships**: _boolean_ = false

### `Protected` sortParams

• **sortParams**: _string\[\]_ = \[\]

### uri

• **uri**: _string_

## Accessors

### parameters

• **get parameters**\(\): _Record‹string, string›_

**Returns:** _Record‹string, string›_

## Methods

### filter

▸ **filter**\(`key`: string \| string\[\] \| undefined, `value`: string \| number \| boolean \| undefined, `operator?`: [FilterOperator](../enums/filteroperator.md)\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `key` | string \| string\[\] \| undefined |
| `value` | string \| number \| boolean \| undefined |
| `operator?` | [FilterOperator](../enums/filteroperator.md) |

**Returns:** _this_

### pageLimit

▸ **pageLimit**\(`limit`: number\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `limit` | number |

**Returns:** _this_

### pageNumber

▸ **pageNumber**\(`page`: number \| string \| undefined\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `page` | number \| string \| undefined |

**Returns:** _this_

### pageOffset

▸ **pageOffset**\(`offset`: number\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `offset` | number |

**Returns:** _this_

### parameter

▸ **parameter**\(`key`: string, `value`: string \| number \| boolean \| undefined\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `key` | string |
| `value` | string \| number \| boolean \| undefined |

**Returns:** _this_

### `Protected` parseResponse

▸ **parseResponse**&lt;**Raw**&gt;\(`response`: HttpResponse\): _Promise‹_[_JsonResponse_](jsonresponse.md)_‹Raw››_

**Type parameters:**

▪ **Raw**: [_RawResponse_](../interfaces/rawresponse.md)_‹any, any›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `response` | HttpResponse |

**Returns:** _Promise‹_[_JsonResponse_](jsonresponse.md)_‹Raw››_

### resolveIncluded

▸ **resolveIncluded**\(`resolveIncluded?`: undefined \| false \| true\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `resolveIncluded?` | undefined \| false \| true |

**Returns:** _this_

### `Abstract` send

▸ **send**\(`options?`: HttpOptions\): _Promise‹ResponseType›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `options?` | HttpOptions |

**Returns:** _Promise‹ResponseType›_

### sort

▸ **sort**\(`key`: string \| undefined, `order`: [SortOrder](../enums/sortorder.md)\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `key` | string \| undefined |
| `order` | [SortOrder](../enums/sortorder.md) |

**Returns:** _this_

