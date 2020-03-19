# JsonListResponse

## Type parameters

▪ **Raw**: [_RawListResponse_](../interfaces/rawlistresponse.md)_‹any, any›_

▪ **I**: [_IncludedGroups_](../#includedgroups)

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

### constructor

+ **new JsonListResponse**\(`raw`: Raw, `limit`: number, `offset`: number \| undefined, `rawIncludedGroups`: I, `response`: HttpResponse‹Raw›\): [_JsonListResponse_](jsonlistresponse.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `raw` | Raw |
| `limit` | number |
| `offset` | number \| undefined |
| `rawIncludedGroups` | I |
| `response` | HttpResponse‹Raw› |

**Returns:** [_JsonListResponse_](jsonlistresponse.md)

## Properties

### limit

• **limit**: _number_

### offset

• **offset**: _number \| undefined_

### raw

• **raw**: _Raw_

### response

• **response**: _HttpResponse‹Raw›_

## Accessors

### elements

• **get elements**\(\): [_MergedData_](../#mergeddata)_‹Raw\["data"\]›_

**Returns:** [_MergedData_](../#mergeddata)_‹Raw\["data"\]›_

### included

• **get included**\(\): _object_

**Returns:** _object_

### meta

• **get meta**\(\): _Raw\["meta"\]_

**Returns:** _Raw\["meta"\]_

