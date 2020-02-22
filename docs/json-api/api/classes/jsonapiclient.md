# Class: JsonApiClient

## Hierarchy

* **JsonApiClient**

## Index

### Constructors

* [constructor](jsonapiclient.md#constructor)

### Properties

* [httpClient](jsonapiclient.md#httpclient)

### Methods

* [get](jsonapiclient.md#get)
* [getList](jsonapiclient.md#getlist)
* [patch](jsonapiclient.md#patch)
* [post](jsonapiclient.md#post)
* [put](jsonapiclient.md#put)
* [remove](jsonapiclient.md#remove)

## Constructors

###  constructor

\+ **new JsonApiClient**(`httpClient`: HttpClient): *[JsonApiClient](jsonapiclient.md)*

*Defined in [jsonApi.client.ts:9](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.client.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |

**Returns:** *[JsonApiClient](jsonapiclient.md)*

## Properties

###  httpClient

• **httpClient**: *HttpClient*

*Defined in [jsonApi.client.ts:10](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.client.ts#L10)*

## Methods

###  get

▸ **get**<**D**, **M**>(`uri`: string): *[GetBuilder](getbuilder.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M››*

*Defined in [jsonApi.client.ts:13](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.client.ts#L13)*

**Type parameters:**

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[GetBuilder](getbuilder.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M››*

___

###  getList

▸ **getList**<**D**, **M**>(`uri`: string): *[GetListBuilder](getlistbuilder.md)‹[RawListResponse](../interfaces/rawlistresponse.md)‹D, M›, object›*

*Defined in [jsonApi.client.ts:17](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.client.ts#L17)*

**Type parameters:**

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *[ListMetaData](../interfaces/listmetadata.md)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[GetListBuilder](getlistbuilder.md)‹[RawListResponse](../interfaces/rawlistresponse.md)‹D, M›, object›*

___

###  patch

▸ **patch**<**D**, **M**>(`uri`: string): *[UpdateBuilder](updatebuilder.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M››*

*Defined in [jsonApi.client.ts:33](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.client.ts#L33)*

**Type parameters:**

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[UpdateBuilder](updatebuilder.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M››*

___

###  post

▸ **post**<**D**, **M**>(`uri`: string): *[PostBuilder](postbuilder.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M››*

*Defined in [jsonApi.client.ts:21](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.client.ts#L21)*

**Type parameters:**

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[PostBuilder](postbuilder.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M››*

___

###  put

▸ **put**<**D**, **M**>(`uri`: string): *[UpdateBuilder](updatebuilder.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M››*

*Defined in [jsonApi.client.ts:29](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.client.ts#L29)*

**Type parameters:**

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[UpdateBuilder](updatebuilder.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M››*

___

###  remove

▸ **remove**<**D**, **M**>(`uri`: string): *[RemoveBuilder](removebuilder.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M››*

*Defined in [jsonApi.client.ts:25](https://github.com/headline-1/coolio/blob/c80476b/packages/json-api/src/jsonApi.client.ts#L25)*

**Type parameters:**

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[RemoveBuilder](removebuilder.md)‹[RawResponse](../interfaces/rawresponse.md)‹D, M››*
