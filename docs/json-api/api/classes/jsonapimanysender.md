# Class: JsonApiManySender <**D, M, I**>

## Type parameters

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *[ListMetaData](../interfaces/listmetadata.md)*

▪ **I**: *[IncludedGroups](../README.md#includedgroups)*

## Hierarchy

* [JsonApiSender](jsonapisender.md)

  ↳ **JsonApiManySender**

## Index

### Constructors

* [constructor](jsonapimanysender.md#constructor)

### Properties

* [requestData](jsonapimanysender.md#protected-requestdata)
* [resolveIncludedRelationships](jsonapimanysender.md#resolveincludedrelationships)

### Methods

* [addToResponse](jsonapimanysender.md#addtoresponse)
* [groupIncluded](jsonapimanysender.md#groupincluded)
* [request](jsonapimanysender.md#request)
* [resolveIncluded](jsonapimanysender.md#resolveincluded)
* [send](jsonapimanysender.md#send)

## Constructors

###  constructor

\+ **new JsonApiManySender**(`httpClient`: HttpClient, `requestData`: [JsonApiRequestData](jsonapirequestdata.md)): *[JsonApiManySender](jsonapimanysender.md)*

*Overrides [JsonApiSender](jsonapisender.md).[constructor](jsonapisender.md#protected-constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |
`requestData` | [JsonApiRequestData](jsonapirequestdata.md) |

**Returns:** *[JsonApiManySender](jsonapimanysender.md)*

## Properties

### `Protected` requestData

• **requestData**: *[JsonApiRequestData](jsonapirequestdata.md)*

*Inherited from [JsonApiSender](jsonapisender.md).[requestData](jsonapisender.md#protected-requestdata)*

___

###  resolveIncludedRelationships

• **resolveIncludedRelationships**: *boolean* = false

*Inherited from [JsonApiSender](jsonapisender.md).[resolveIncludedRelationships](jsonapisender.md#resolveincludedrelationships)*

## Methods

###  addToResponse

▸ **addToResponse**(`response`: [JsonListResponse](jsonlistresponse.md)‹[RawListResponse](../interfaces/rawlistresponse.md)‹D, M›, I› | undefined): *this*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [JsonListResponse](jsonlistresponse.md)‹[RawListResponse](../interfaces/rawlistresponse.md)‹D, M›, I› &#124; undefined |

**Returns:** *this*

___

###  groupIncluded

▸ **groupIncluded**<**Groups**>(`groups`: Groups): *[JsonApiManySender](jsonapimanysender.md)‹D, M, [IncludedGroups](../README.md#includedgroups)‹Groups››*

**Type parameters:**

▪ **Groups**: *[IncludedGroupsSchema](../README.md#includedgroupsschema)*

**Parameters:**

Name | Type |
------ | ------ |
`groups` | Groups |

**Returns:** *[JsonApiManySender](jsonapimanysender.md)‹D, M, [IncludedGroups](../README.md#includedgroups)‹Groups››*

___

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

▸ **send**(`options?`: HttpOptions): *Promise‹[JsonListResponse](jsonlistresponse.md)‹[RawListResponse](../interfaces/rawlistresponse.md)‹D, M›, I››*

*Overrides [JsonApiSender](jsonapisender.md).[send](jsonapisender.md#abstract-send)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *Promise‹[JsonListResponse](jsonlistresponse.md)‹[RawListResponse](../interfaces/rawlistresponse.md)‹D, M›, I››*
