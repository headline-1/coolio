# Class: JsonListResponse <**Raw, I**>

## Type parameters

▪ **Raw**: *[RawListResponse](../interfaces/rawlistresponse.md)‹any, any›*

▪ **I**: *[IncludedGroups](../README.md#includedgroups)*

## Hierarchy

* **JsonListResponse**

## Index

### Constructors

* [constructor](jsonlistresponse.md#constructor)

### Properties

* [limit](jsonlistresponse.md#limit)
* [offset](jsonlistresponse.md#offset)
* [raw](jsonlistresponse.md#raw)
* [response](jsonlistresponse.md#response)

### Accessors

* [elements](jsonlistresponse.md#elements)
* [included](jsonlistresponse.md#included)
* [meta](jsonlistresponse.md#meta)

## Constructors

###  constructor

\+ **new JsonListResponse**(`raw`: Raw, `limit`: number, `offset`: number | undefined, `rawIncludedGroups`: I, `response`: HttpResponse‹Raw›): *[JsonListResponse](jsonlistresponse.md)*

*Defined in [jsonApi.getList.ts:8](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.getList.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`raw` | Raw |
`limit` | number |
`offset` | number &#124; undefined |
`rawIncludedGroups` | I |
`response` | HttpResponse‹Raw› |

**Returns:** *[JsonListResponse](jsonlistresponse.md)*

## Properties

###  limit

• **limit**: *number*

*Defined in [jsonApi.getList.ts:12](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.getList.ts#L12)*

___

###  offset

• **offset**: *number | undefined*

*Defined in [jsonApi.getList.ts:13](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.getList.ts#L13)*

___

###  raw

• **raw**: *Raw*

*Defined in [jsonApi.getList.ts:11](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.getList.ts#L11)*

___

###  response

• **response**: *HttpResponse‹Raw›*

*Defined in [jsonApi.getList.ts:15](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.getList.ts#L15)*

## Accessors

###  elements

• **get elements**(): *[MergedData](../README.md#mergeddata)‹Raw["data"]›*

*Defined in [jsonApi.getList.ts:19](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.getList.ts#L19)*

**Returns:** *[MergedData](../README.md#mergeddata)‹Raw["data"]›*

___

###  included

• **get included**(): *object*

*Defined in [jsonApi.getList.ts:27](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.getList.ts#L27)*

**Returns:** *object*

___

###  meta

• **get meta**(): *Raw["meta"]*

*Defined in [jsonApi.getList.ts:23](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.getList.ts#L23)*

**Returns:** *Raw["meta"]*
