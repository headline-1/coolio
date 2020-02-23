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

___

###  offset

• **offset**: *number | undefined*

___

###  raw

• **raw**: *Raw*

___

###  response

• **response**: *HttpResponse‹Raw›*

## Accessors

###  elements

• **get elements**(): *[MergedData](../README.md#mergeddata)‹Raw["data"]›*

**Returns:** *[MergedData](../README.md#mergeddata)‹Raw["data"]›*

___

###  included

• **get included**(): *object*

**Returns:** *object*

___

###  meta

• **get meta**(): *Raw["meta"]*

**Returns:** *Raw["meta"]*
