# GetListBuilder

## Type parameters

▪ **Raw**: [_RawListResponse_](../interfaces/rawlistresponse.md)_‹any, any›_

▪ **I**: [_IncludedGroups_](../#includedgroups)

## Hierarchy

* [RequestBuilder](requestbuilder.md)‹[JsonListResponse](jsonlistresponse.md)‹Raw, I››

  ↳ **GetListBuilder**

## Index

### Constructors

* [constructor](getlistbuilder.md#constructor)

### Properties

* [limit](getlistbuilder.md#protected-limit)
* [offset](getlistbuilder.md#protected-offset)
* [options](getlistbuilder.md#protected-options)
* [page](getlistbuilder.md#protected-page)
* [queryParams](getlistbuilder.md#protected-queryparams)
* [resolveIncludedRelationships](getlistbuilder.md#protected-resolveincludedrelationships)
* [sortParams](getlistbuilder.md#protected-sortparams)
* [uri](getlistbuilder.md#uri)

### Accessors

* [parameters](getlistbuilder.md#parameters)

### Methods

* [addToResponse](getlistbuilder.md#addtoresponse)
* [filter](getlistbuilder.md#filter)
* [groupIncluded](getlistbuilder.md#groupincluded)
* [pageLimit](getlistbuilder.md#pagelimit)
* [pageNumber](getlistbuilder.md#pagenumber)
* [pageOffset](getlistbuilder.md#pageoffset)
* [parameter](getlistbuilder.md#parameter)
* [parseResponse](getlistbuilder.md#protected-parseresponse)
* [resolveIncluded](getlistbuilder.md#resolveincluded)
* [send](getlistbuilder.md#send)
* [sort](getlistbuilder.md#sort)

## Constructors

### constructor

+ **new GetListBuilder**\(`httpClient`: HttpClient, `uri`: string\): [_GetListBuilder_](getlistbuilder.md)

_Overrides_ [_RequestBuilder_](requestbuilder.md)_._[_constructor_](requestbuilder.md#protected-constructor)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `httpClient` | HttpClient |
| `uri` | string |

**Returns:** [_GetListBuilder_](getlistbuilder.md)

## Properties

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

### `Protected` resolveIncludedRelationships

• **resolveIncludedRelationships**: _boolean_ = false

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_resolveIncludedRelationships_](requestbuilder.md#protected-resolveincludedrelationships)

### `Protected` sortParams

• **sortParams**: _string\[\]_ = \[\]

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_sortParams_](requestbuilder.md#protected-sortparams)

### uri

• **uri**: _string_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_uri_](requestbuilder.md#uri)

## Accessors

### parameters

• **get parameters**\(\): _Record‹string, string›_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_parameters_](requestbuilder.md#parameters)

**Returns:** _Record‹string, string›_

## Methods

### addToResponse

▸ **addToResponse**\(`response`: [JsonListResponse](jsonlistresponse.md)‹Raw, I› \| undefined\): _this_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `response` | [JsonListResponse](jsonlistresponse.md)‹Raw, I› \| undefined |

**Returns:** _this_

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

### groupIncluded

▸ **groupIncluded**&lt;**Groups**&gt;\(`groups`: Groups\): [_GetListBuilder_](getlistbuilder.md)_‹Raw,_ [_IncludedGroups_](../#includedgroups)_‹Groups››_

**Type parameters:**

▪ **Groups**: [_IncludedGroupsSchema_](../#includedgroupsschema)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `groups` | Groups |

**Returns:** [_GetListBuilder_](getlistbuilder.md)_‹Raw,_ [_IncludedGroups_](../#includedgroups)_‹Groups››_

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

_Overrides_ [_RequestBuilder_](requestbuilder.md)_._[_resolveIncluded_](requestbuilder.md#resolveincluded)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `resolveIncluded?` | undefined \| false \| true |

**Returns:** _this_

### send

▸ **send**\(`options?`: HttpOptions\): _Promise‹_[_JsonListResponse_](jsonlistresponse.md)_‹Raw, I››_

_Overrides_ [_RequestBuilder_](requestbuilder.md)_._[_send_](requestbuilder.md#abstract-send)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `options?` | HttpOptions |

**Returns:** _Promise‹_[_JsonListResponse_](jsonlistresponse.md)_‹Raw, I››_

### sort

▸ **sort**\(`key`: string \| undefined, `order`: [SortOrder](../enums/sortorder.md)\): _this_

_Inherited from_ [_RequestBuilder_](requestbuilder.md)_._[_sort_](requestbuilder.md#sort)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `key` | string \| undefined |
| `order` | [SortOrder](../enums/sortorder.md) |

**Returns:** _this_

