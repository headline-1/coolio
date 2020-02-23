# Class: GetListBuilder <**Raw, I**>

## Type parameters

▪ **Raw**: *[RawListResponse](../interfaces/rawlistresponse.md)‹any, any›*

▪ **I**: *[IncludedGroups](../README.md#includedgroups)*

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

###  constructor

\+ **new GetListBuilder**(`httpClient`: HttpClient, `uri`: string): *[GetListBuilder](getlistbuilder.md)*

*Overrides [RequestBuilder](requestbuilder.md).[constructor](requestbuilder.md#protected-constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |
`uri` | string |

**Returns:** *[GetListBuilder](getlistbuilder.md)*

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

###  addToResponse

▸ **addToResponse**(`response`: [JsonListResponse](jsonlistresponse.md)‹Raw, I› | undefined): *this*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [JsonListResponse](jsonlistresponse.md)‹Raw, I› &#124; undefined |

**Returns:** *this*

___

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

###  groupIncluded

▸ **groupIncluded**<**Groups**>(`groups`: Groups): *[GetListBuilder](getlistbuilder.md)‹Raw, [IncludedGroups](../README.md#includedgroups)‹Groups››*

**Type parameters:**

▪ **Groups**: *[IncludedGroupsSchema](../README.md#includedgroupsschema)*

**Parameters:**

Name | Type |
------ | ------ |
`groups` | Groups |

**Returns:** *[GetListBuilder](getlistbuilder.md)‹Raw, [IncludedGroups](../README.md#includedgroups)‹Groups››*

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

*Overrides [RequestBuilder](requestbuilder.md).[resolveIncluded](requestbuilder.md#resolveincluded)*

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  send

▸ **send**(`options?`: HttpOptions): *Promise‹[JsonListResponse](jsonlistresponse.md)‹Raw, I››*

*Overrides [RequestBuilder](requestbuilder.md).[send](requestbuilder.md#abstract-send)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹[JsonListResponse](jsonlistresponse.md)‹Raw, I››*

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
