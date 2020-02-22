[@coolio/json-api](../README.md) › ["jsonApi.getList"](../modules/_jsonapi_getlist_.md) › [GetListBuilder](_jsonapi_getlist_.getlistbuilder.md)

# Class: GetListBuilder <**Raw, I**>

## Type parameters

▪ **Raw**: *[RawListResponse](../interfaces/_jsonapi_interface_.rawlistresponse.md)‹any, any›*

▪ **I**: *[IncludedGroups](../modules/_jsonapi_interface_.md#includedgroups)*

## Hierarchy

* [RequestBuilder](_jsonapi_builder_.requestbuilder.md)‹[JsonListResponse](_jsonapi_getlist_.jsonlistresponse.md)‹Raw, I››

  ↳ **GetListBuilder**

## Index

### Constructors

* [constructor](_jsonapi_getlist_.getlistbuilder.md#constructor)

### Properties

* [httpClient](_jsonapi_getlist_.getlistbuilder.md#private-httpclient)
* [includedGroups](_jsonapi_getlist_.getlistbuilder.md#private-includedgroups)
* [limit](_jsonapi_getlist_.getlistbuilder.md#protected-limit)
* [offset](_jsonapi_getlist_.getlistbuilder.md#protected-offset)
* [options](_jsonapi_getlist_.getlistbuilder.md#protected-options)
* [page](_jsonapi_getlist_.getlistbuilder.md#protected-page)
* [previousResponse](_jsonapi_getlist_.getlistbuilder.md#private-optional-previousresponse)
* [queryParams](_jsonapi_getlist_.getlistbuilder.md#protected-queryparams)
* [resolveIncludedRelationships](_jsonapi_getlist_.getlistbuilder.md#protected-resolveincludedrelationships)
* [sortParams](_jsonapi_getlist_.getlistbuilder.md#protected-sortparams)
* [uri](_jsonapi_getlist_.getlistbuilder.md#uri)

### Accessors

* [parameters](_jsonapi_getlist_.getlistbuilder.md#parameters)

### Methods

* [addToResponse](_jsonapi_getlist_.getlistbuilder.md#addtoresponse)
* [filter](_jsonapi_getlist_.getlistbuilder.md#filter)
* [groupIncluded](_jsonapi_getlist_.getlistbuilder.md#groupincluded)
* [pageLimit](_jsonapi_getlist_.getlistbuilder.md#pagelimit)
* [pageNumber](_jsonapi_getlist_.getlistbuilder.md#pagenumber)
* [pageOffset](_jsonapi_getlist_.getlistbuilder.md#pageoffset)
* [parameter](_jsonapi_getlist_.getlistbuilder.md#parameter)
* [parseResponse](_jsonapi_getlist_.getlistbuilder.md#protected-parseresponse)
* [resolveIncluded](_jsonapi_getlist_.getlistbuilder.md#resolveincluded)
* [send](_jsonapi_getlist_.getlistbuilder.md#send)
* [sort](_jsonapi_getlist_.getlistbuilder.md#sort)

## Constructors

###  constructor

\+ **new GetListBuilder**(`httpClient`: HttpClient, `uri`: string): *[GetListBuilder](_jsonapi_getlist_.getlistbuilder.md)*

*Overrides [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[constructor](_jsonapi_builder_.requestbuilder.md#protected-constructor)*

*Defined in [jsonApi.getList.ts:36](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |
`uri` | string |

**Returns:** *[GetListBuilder](_jsonapi_getlist_.getlistbuilder.md)*

## Properties

### `Private` httpClient

• **httpClient**: *HttpClient*

*Defined in [jsonApi.getList.ts:38](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L38)*

___

### `Private` includedGroups

• **includedGroups**: *[IncludedGroupsSchema](../modules/_jsonapi_interface_.md#includedgroupsschema)*

*Defined in [jsonApi.getList.ts:36](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L36)*

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

### `Private` `Optional` previousResponse

• **previousResponse**? : *[JsonListResponse](_jsonapi_getlist_.jsonlistresponse.md)‹Raw, I›*

*Defined in [jsonApi.getList.ts:35](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L35)*

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

###  addToResponse

▸ **addToResponse**(`response`: [JsonListResponse](_jsonapi_getlist_.jsonlistresponse.md)‹Raw, I› | undefined): *this*

*Defined in [jsonApi.getList.ts:42](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [JsonListResponse](_jsonapi_getlist_.jsonlistresponse.md)‹Raw, I› &#124; undefined |

**Returns:** *this*

___

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

###  groupIncluded

▸ **groupIncluded**<**Groups**>(`groups`: Groups): *[GetListBuilder](_jsonapi_getlist_.getlistbuilder.md)‹Raw, [IncludedGroups](../modules/_jsonapi_interface_.md#includedgroups)‹Groups››*

*Defined in [jsonApi.getList.ts:47](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L47)*

**Type parameters:**

▪ **Groups**: *[IncludedGroupsSchema](../modules/_jsonapi_interface_.md#includedgroupsschema)*

**Parameters:**

Name | Type |
------ | ------ |
`groups` | Groups |

**Returns:** *[GetListBuilder](_jsonapi_getlist_.getlistbuilder.md)‹Raw, [IncludedGroups](../modules/_jsonapi_interface_.md#includedgroups)‹Groups››*

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

*Overrides [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[resolveIncluded](_jsonapi_builder_.requestbuilder.md#resolveincluded)*

*Defined in [jsonApi.getList.ts:54](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  send

▸ **send**(`options?`: HttpOptions): *Promise‹[JsonListResponse](_jsonapi_getlist_.jsonlistresponse.md)‹Raw, I››*

*Overrides [RequestBuilder](_jsonapi_builder_.requestbuilder.md).[send](_jsonapi_builder_.requestbuilder.md#abstract-send)*

*Defined in [jsonApi.getList.ts:59](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹[JsonListResponse](_jsonapi_getlist_.jsonlistresponse.md)‹Raw, I››*

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
