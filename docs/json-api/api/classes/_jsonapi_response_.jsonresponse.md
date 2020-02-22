[@coolio/json-api](../README.md) › ["jsonApi.response"](../modules/_jsonapi_response_.md) › [JsonResponse](_jsonapi_response_.jsonresponse.md)

# Class: JsonResponse <**Raw**>

## Type parameters

▪ **Raw**: *[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹any, any›*

## Hierarchy

* **JsonResponse**

## Index

### Constructors

* [constructor](_jsonapi_response_.jsonresponse.md#constructor)

### Properties

* [raw](_jsonapi_response_.jsonresponse.md#raw)
* [response](_jsonapi_response_.jsonresponse.md#response)

### Accessors

* [element](_jsonapi_response_.jsonresponse.md#element)
* [meta](_jsonapi_response_.jsonresponse.md#meta)

## Constructors

###  constructor

\+ **new JsonResponse**(`raw`: Raw, `response`: HttpResponse‹Raw›): *[JsonResponse](_jsonapi_response_.jsonresponse.md)*

*Defined in [jsonApi.response.ts:5](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.response.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`raw` | Raw |
`response` | HttpResponse‹Raw› |

**Returns:** *[JsonResponse](_jsonapi_response_.jsonresponse.md)*

## Properties

###  raw

• **raw**: *Raw*

*Defined in [jsonApi.response.ts:7](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.response.ts#L7)*

___

###  response

• **response**: *HttpResponse‹Raw›*

*Defined in [jsonApi.response.ts:7](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.response.ts#L7)*

## Accessors

###  element

• **get element**(): *[MergedData](../modules/_jsonapi_interface_.md#mergeddata)‹Raw["data"]›*

*Defined in [jsonApi.response.ts:10](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.response.ts#L10)*

**Returns:** *[MergedData](../modules/_jsonapi_interface_.md#mergeddata)‹Raw["data"]›*

___

###  meta

• **get meta**(): *Raw["meta"]*

*Defined in [jsonApi.response.ts:14](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.response.ts#L14)*

**Returns:** *Raw["meta"]*
