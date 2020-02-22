[@coolio/json-api](../README.md) › ["jsonApi.getList"](../modules/_jsonapi_getlist_.md) › [JsonListResponse](_jsonapi_getlist_.jsonlistresponse.md)

# Class: JsonListResponse <**Raw, I**>

## Type parameters

▪ **Raw**: *[RawListResponse](../interfaces/_jsonapi_interface_.rawlistresponse.md)‹any, any›*

▪ **I**: *[IncludedGroups](../modules/_jsonapi_interface_.md#includedgroups)*

## Hierarchy

* **JsonListResponse**

## Index

### Constructors

* [constructor](_jsonapi_getlist_.jsonlistresponse.md#constructor)

### Properties

* [limit](_jsonapi_getlist_.jsonlistresponse.md#limit)
* [offset](_jsonapi_getlist_.jsonlistresponse.md#offset)
* [raw](_jsonapi_getlist_.jsonlistresponse.md#raw)
* [rawIncludedGroups](_jsonapi_getlist_.jsonlistresponse.md#private-rawincludedgroups)
* [response](_jsonapi_getlist_.jsonlistresponse.md#response)

### Accessors

* [elements](_jsonapi_getlist_.jsonlistresponse.md#elements)
* [included](_jsonapi_getlist_.jsonlistresponse.md#included)
* [meta](_jsonapi_getlist_.jsonlistresponse.md#meta)

## Constructors

###  constructor

\+ **new JsonListResponse**(`raw`: Raw, `limit`: number, `offset`: number | undefined, `rawIncludedGroups`: I, `response`: HttpResponse‹Raw›): *[JsonListResponse](_jsonapi_getlist_.jsonlistresponse.md)*

*Defined in [jsonApi.getList.ts:8](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`raw` | Raw |
`limit` | number |
`offset` | number &#124; undefined |
`rawIncludedGroups` | I |
`response` | HttpResponse‹Raw› |

**Returns:** *[JsonListResponse](_jsonapi_getlist_.jsonlistresponse.md)*

## Properties

###  limit

• **limit**: *number*

*Defined in [jsonApi.getList.ts:12](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L12)*

___

###  offset

• **offset**: *number | undefined*

*Defined in [jsonApi.getList.ts:13](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L13)*

___

###  raw

• **raw**: *Raw*

*Defined in [jsonApi.getList.ts:11](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L11)*

___

### `Private` rawIncludedGroups

• **rawIncludedGroups**: *I*

*Defined in [jsonApi.getList.ts:14](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L14)*

___

###  response

• **response**: *HttpResponse‹Raw›*

*Defined in [jsonApi.getList.ts:15](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L15)*

## Accessors

###  elements

• **get elements**(): *[MergedData](../modules/_jsonapi_interface_.md#mergeddata)‹Raw["data"]›*

*Defined in [jsonApi.getList.ts:19](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L19)*

**Returns:** *[MergedData](../modules/_jsonapi_interface_.md#mergeddata)‹Raw["data"]›*

___

###  included

• **get included**(): *object*

*Defined in [jsonApi.getList.ts:27](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L27)*

**Returns:** *object*

___

###  meta

• **get meta**(): *Raw["meta"]*

*Defined in [jsonApi.getList.ts:23](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.getList.ts#L23)*

**Returns:** *Raw["meta"]*
