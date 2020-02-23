# Class: JsonResponse <**Raw**>

## Type parameters

▪ **Raw**: *[RawResponse](../interfaces/rawresponse.md)‹any, any›*

## Hierarchy

* **JsonResponse**

## Index

### Constructors

* [constructor](jsonresponse.md#constructor)

### Properties

* [raw](jsonresponse.md#raw)
* [response](jsonresponse.md#response)

### Accessors

* [element](jsonresponse.md#element)
* [meta](jsonresponse.md#meta)

## Constructors

###  constructor

\+ **new JsonResponse**(`raw`: Raw, `response`: HttpResponse‹Raw›): *[JsonResponse](jsonresponse.md)*

*Defined in [jsonApi.response.ts:5](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.response.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`raw` | Raw |
`response` | HttpResponse‹Raw› |

**Returns:** *[JsonResponse](jsonresponse.md)*

## Properties

###  raw

• **raw**: *Raw*

*Defined in [jsonApi.response.ts:7](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.response.ts#L7)*

___

###  response

• **response**: *HttpResponse‹Raw›*

*Defined in [jsonApi.response.ts:7](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.response.ts#L7)*

## Accessors

###  element

• **get element**(): *[MergedData](../README.md#mergeddata)‹Raw["data"]›*

*Defined in [jsonApi.response.ts:10](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.response.ts#L10)*

**Returns:** *[MergedData](../README.md#mergeddata)‹Raw["data"]›*

___

###  meta

• **get meta**(): *Raw["meta"]*

*Defined in [jsonApi.response.ts:14](https://github.com/headline-1/coolio/blob/0131267/packages/json-api/src/jsonApi.response.ts#L14)*

**Returns:** *Raw["meta"]*
