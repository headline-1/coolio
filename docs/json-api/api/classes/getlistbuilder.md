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

*Defined in [jsonApi.getList.ts:36](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.getList.ts#L36)*

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

*Defined in [jsonApi.builder.ts:19](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L19)*

___

### `Protected` offset

• **offset**: *undefined | number*

*Inherited from [RequestBuilder](requestbuilder.md).[offset](requestbuilder.md#protected-offset)*

*Defined in [jsonApi.builder.ts:20](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L20)*

___

### `Protected` options

• **options**: *[Options](../interfaces/options.md)*

*Inherited from [RequestBuilder](requestbuilder.md).[options](requestbuilder.md#protected-options)*

*Defined in [jsonApi.builder.ts:23](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L23)*

___

### `Protected` page

• **page**: *number* = 1

*Inherited from [RequestBuilder](requestbuilder.md).[page](requestbuilder.md#protected-page)*

*Defined in [jsonApi.builder.ts:21](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L21)*

___

### `Protected` queryParams

• **queryParams**: *Record‹string, string›*

*Inherited from [RequestBuilder](requestbuilder.md).[queryParams](requestbuilder.md#protected-queryparams)*

*Defined in [jsonApi.builder.ts:17](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L17)*

___

### `Protected` resolveIncludedRelationships

• **resolveIncludedRelationships**: *boolean* = false

*Inherited from [RequestBuilder](requestbuilder.md).[resolveIncludedRelationships](requestbuilder.md#protected-resolveincludedrelationships)*

*Defined in [jsonApi.builder.ts:16](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L16)*

___

### `Protected` sortParams

• **sortParams**: *string[]* = []

*Inherited from [RequestBuilder](requestbuilder.md).[sortParams](requestbuilder.md#protected-sortparams)*

*Defined in [jsonApi.builder.ts:18](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L18)*

___

###  uri

• **uri**: *string*

*Inherited from [RequestBuilder](requestbuilder.md).[uri](requestbuilder.md#uri)*

*Defined in [jsonApi.builder.ts:15](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L15)*

## Accessors

###  parameters

• **get parameters**(): *Record‹string, string›*

*Inherited from [RequestBuilder](requestbuilder.md).[parameters](requestbuilder.md#parameters)*

*Defined in [jsonApi.builder.ts:50](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L50)*

**Returns:** *Record‹string, string›*

## Methods

###  addToResponse

▸ **addToResponse**(`response`: [JsonListResponse](jsonlistresponse.md)‹Raw, I› | undefined): *this*

*Defined in [jsonApi.getList.ts:42](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.getList.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [JsonListResponse](jsonlistresponse.md)‹Raw, I› &#124; undefined |

**Returns:** *this*

___

###  filter

▸ **filter**(`key`: string | string[] | undefined, `value`: string | number | boolean | undefined, `operator?`: [FilterOperator](../enums/filteroperator.md)): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[filter](requestbuilder.md#filter)*

*Defined in [jsonApi.builder.ts:84](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L84)*

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

*Defined in [jsonApi.getList.ts:47](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.getList.ts#L47)*

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

*Defined in [jsonApi.builder.ts:102](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *this*

___

###  pageNumber

▸ **pageNumber**(`page`: number | string | undefined): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[pageNumber](requestbuilder.md#pagenumber)*

*Defined in [jsonApi.builder.ts:112](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | number &#124; string &#124; undefined |

**Returns:** *this*

___

###  pageOffset

▸ **pageOffset**(`offset`: number): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[pageOffset](requestbuilder.md#pageoffset)*

*Defined in [jsonApi.builder.ts:107](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *this*

___

###  parameter

▸ **parameter**(`key`: string, `value`: string | number | boolean | undefined): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[parameter](requestbuilder.md#parameter)*

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

*Inherited from [RequestBuilder](requestbuilder.md).[parseResponse](requestbuilder.md#protected-parseresponse)*

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

*Overrides [RequestBuilder](requestbuilder.md).[resolveIncluded](requestbuilder.md#resolveincluded)*

*Defined in [jsonApi.getList.ts:54](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.getList.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  send

▸ **send**(`options?`: HttpOptions): *Promise‹[JsonListResponse](jsonlistresponse.md)‹Raw, I››*

*Overrides [RequestBuilder](requestbuilder.md).[send](requestbuilder.md#abstract-send)*

*Defined in [jsonApi.getList.ts:59](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.getList.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹[JsonListResponse](jsonlistresponse.md)‹Raw, I››*

___

###  sort

▸ **sort**(`key`: string | undefined, `order`: [SortOrder](../enums/sortorder.md)): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[sort](requestbuilder.md#sort)*

*Defined in [jsonApi.builder.ts:95](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.builder.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; undefined |
`order` | [SortOrder](../enums/sortorder.md) |

**Returns:** *this*
