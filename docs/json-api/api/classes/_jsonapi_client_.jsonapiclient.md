[@coolio/json-api](../README.md) › ["jsonApi.client"](../modules/_jsonapi_client_.md) › [JsonApiClient](_jsonapi_client_.jsonapiclient.md)

# Class: JsonApiClient

## Hierarchy

* **JsonApiClient**

## Index

### Constructors

* [constructor](_jsonapi_client_.jsonapiclient.md#constructor)

### Properties

* [httpClient](_jsonapi_client_.jsonapiclient.md#httpclient)

### Methods

* [get](_jsonapi_client_.jsonapiclient.md#get)
* [getList](_jsonapi_client_.jsonapiclient.md#getlist)
* [patch](_jsonapi_client_.jsonapiclient.md#patch)
* [post](_jsonapi_client_.jsonapiclient.md#post)
* [put](_jsonapi_client_.jsonapiclient.md#put)
* [remove](_jsonapi_client_.jsonapiclient.md#remove)

## Constructors

###  constructor

\+ **new JsonApiClient**(`httpClient`: HttpClient): *[JsonApiClient](_jsonapi_client_.jsonapiclient.md)*

*Defined in [jsonApi.client.ts:9](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.client.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |

**Returns:** *[JsonApiClient](_jsonapi_client_.jsonapiclient.md)*

## Properties

###  httpClient

• **httpClient**: *HttpClient*

*Defined in [jsonApi.client.ts:10](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.client.ts#L10)*

## Methods

###  get

▸ **get**<**D**, **M**>(`uri`: string): *[GetBuilder](_jsonapi_get_.getbuilder.md)‹[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹D, M››*

*Defined in [jsonApi.client.ts:13](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.client.ts#L13)*

**Type parameters:**

▪ **D**: *[AnyData](../modules/_jsonapi_interface_.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[GetBuilder](_jsonapi_get_.getbuilder.md)‹[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹D, M››*

___

###  getList

▸ **getList**<**D**, **M**>(`uri`: string): *[GetListBuilder](_jsonapi_getlist_.getlistbuilder.md)‹[RawListResponse](../interfaces/_jsonapi_interface_.rawlistresponse.md)‹D, M›, object›*

*Defined in [jsonApi.client.ts:17](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.client.ts#L17)*

**Type parameters:**

▪ **D**: *[AnyData](../modules/_jsonapi_interface_.md#anydata)*

▪ **M**: *[ListMetaData](../interfaces/_jsonapi_interface_.listmetadata.md)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[GetListBuilder](_jsonapi_getlist_.getlistbuilder.md)‹[RawListResponse](../interfaces/_jsonapi_interface_.rawlistresponse.md)‹D, M›, object›*

___

###  patch

▸ **patch**<**D**, **M**>(`uri`: string): *[UpdateBuilder](_jsonapi_update_.updatebuilder.md)‹[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹D, M››*

*Defined in [jsonApi.client.ts:33](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.client.ts#L33)*

**Type parameters:**

▪ **D**: *[AnyData](../modules/_jsonapi_interface_.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[UpdateBuilder](_jsonapi_update_.updatebuilder.md)‹[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹D, M››*

___

###  post

▸ **post**<**D**, **M**>(`uri`: string): *[PostBuilder](_jsonapi_post_.postbuilder.md)‹[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹D, M››*

*Defined in [jsonApi.client.ts:21](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.client.ts#L21)*

**Type parameters:**

▪ **D**: *[AnyData](../modules/_jsonapi_interface_.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[PostBuilder](_jsonapi_post_.postbuilder.md)‹[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹D, M››*

___

###  put

▸ **put**<**D**, **M**>(`uri`: string): *[UpdateBuilder](_jsonapi_update_.updatebuilder.md)‹[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹D, M››*

*Defined in [jsonApi.client.ts:29](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.client.ts#L29)*

**Type parameters:**

▪ **D**: *[AnyData](../modules/_jsonapi_interface_.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[UpdateBuilder](_jsonapi_update_.updatebuilder.md)‹[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹D, M››*

___

###  remove

▸ **remove**<**D**, **M**>(`uri`: string): *[RemoveBuilder](_jsonapi_remove_.removebuilder.md)‹[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹D, M››*

*Defined in [jsonApi.client.ts:25](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/jsonApi.client.ts#L25)*

**Type parameters:**

▪ **D**: *[AnyData](../modules/_jsonapi_interface_.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[RemoveBuilder](_jsonapi_remove_.removebuilder.md)‹[RawResponse](../interfaces/_jsonapi_interface_.rawresponse.md)‹D, M››*
