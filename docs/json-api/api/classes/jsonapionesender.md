# Class: JsonApiOneSender <**D, M**>

## Type parameters

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

## Hierarchy

* [JsonApiSender](jsonapisender.md)

  ↳ **JsonApiOneSender**

## Index

### Constructors

* [constructor](jsonapionesender.md#constructor)

### Properties

* [requestData](jsonapionesender.md#protected-requestdata)
* [resolveIncludedRelationships](jsonapionesender.md#resolveincludedrelationships)

### Methods

* [request](jsonapionesender.md#request)
* [resolveIncluded](jsonapionesender.md#resolveincluded)
* [send](jsonapionesender.md#send)

## Constructors

###  constructor

\+ **new JsonApiOneSender**(`httpClient`: HttpClient, `requestData`: [JsonApiRequestData](jsonapirequestdata.md)): *[JsonApiOneSender](jsonapionesender.md)*

*Overrides [JsonApiSender](jsonapisender.md).[constructor](jsonapisender.md#protected-constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |
`requestData` | [JsonApiRequestData](jsonapirequestdata.md) |

**Returns:** *[JsonApiOneSender](jsonapionesender.md)*

## Properties

### `Protected` requestData

• **requestData**: *[JsonApiRequestData](jsonapirequestdata.md)*

*Inherited from [JsonApiSender](jsonapisender.md).[requestData](jsonapisender.md#protected-requestdata)*

___

###  resolveIncludedRelationships

• **resolveIncludedRelationships**: *boolean* = false

*Inherited from [JsonApiSender](jsonapisender.md).[resolveIncludedRelationships](jsonapisender.md#resolveincludedrelationships)*

## Methods

###  request

▸ **request**<**T**>(`options?`: HttpOptions): *Promise‹HttpResponse‹T››*

*Inherited from [JsonApiSender](jsonapisender.md).[request](jsonapisender.md#request)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹HttpResponse‹T››*

___

###  resolveIncluded

▸ **resolveIncluded**(`resolveIncluded?`: undefined | false | true): *this*

*Inherited from [JsonApiSender](jsonapisender.md).[resolveIncluded](jsonapisender.md#resolveincluded)*

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  send

▸ **send**(`options?`: HttpOptions): *Promise‹[JsonResponse](jsonresponse.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M›››*

*Overrides [JsonApiSender](jsonapisender.md).[send](jsonapisender.md#abstract-send)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹[JsonResponse](jsonresponse.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M›››*
