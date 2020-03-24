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

**Parameters:**

Name | Type |
------ | ------ |
`raw` | Raw |
`response` | HttpResponse‹Raw› |

**Returns:** *[JsonResponse](jsonresponse.md)*

## Properties

###  raw

• **raw**: *Raw*

___

###  response

• **response**: *HttpResponse‹Raw›*

## Accessors

###  element

• **get element**(): *[MergedData](../README.md#mergeddata)‹Raw["data"]›*

**Returns:** *[MergedData](../README.md#mergeddata)‹Raw["data"]›*

___

###  meta

• **get meta**(): *Raw["meta"]*

**Returns:** *Raw["meta"]*
