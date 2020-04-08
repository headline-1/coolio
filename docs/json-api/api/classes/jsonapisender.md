# Class: JsonApiSender

## Hierarchy

* **JsonApiSender**

  ↳ [JsonApiOneSender](jsonapionesender.md)

  ↳ [JsonApiManySender](jsonapimanysender.md)

## Index

### Constructors

* [constructor](jsonapisender.md#protected-constructor)

### Properties

* [requestData](jsonapisender.md#protected-requestdata)
* [resolveIncludedRelationships](jsonapisender.md#resolveincludedrelationships)

### Methods

* [request](jsonapisender.md#request)
* [resolveIncluded](jsonapisender.md#resolveincluded)
* [send](jsonapisender.md#abstract-send)

## Constructors

### `Protected` constructor

\+ **new JsonApiSender**(`httpClient`: HttpClient, `requestData`: [JsonApiRequestData](jsonapirequestdata.md)): *[JsonApiSender](jsonapisender.md)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |
`requestData` | [JsonApiRequestData](jsonapirequestdata.md) |

**Returns:** *[JsonApiSender](jsonapisender.md)*

## Properties

### `Protected` requestData

• **requestData**: *[JsonApiRequestData](jsonapirequestdata.md)*

___

###  resolveIncludedRelationships

• **resolveIncludedRelationships**: *boolean* = false

## Methods

###  request

▸ **request**<**T**>(`options?`: HttpOptions): *Promise‹HttpResponse‹T››*

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

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

### `Abstract` send

▸ **send**(`options?`: HttpOptions): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹any›*
