# Class: JsonApiClient

## Hierarchy

* **JsonApiClient**

## Index

### Constructors

* [constructor](jsonapiclient.md#constructor)

### Properties

* [httpClient](jsonapiclient.md#httpclient)

### Methods

* [delete](jsonapiclient.md#delete)
* [get](jsonapiclient.md#get)
* [patch](jsonapiclient.md#patch)
* [post](jsonapiclient.md#post)
* [put](jsonapiclient.md#put)

## Constructors

###  constructor

\+ **new JsonApiClient**(`httpClient`: HttpClient): *[JsonApiClient](jsonapiclient.md)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |

**Returns:** *[JsonApiClient](jsonapiclient.md)*

## Properties

###  httpClient

• **httpClient**: *HttpClient*

## Methods

###  delete

▸ **delete**<**D**, **M**>(`uri`: string): *[RequestBuilder](requestbuilder.md)‹D, M›*

**Type parameters:**

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[RequestBuilder](requestbuilder.md)‹D, M›*

___

###  get

▸ **get**<**D**, **M**>(`uri`: string): *[RequestBuilder](requestbuilder.md)‹D, M›*

**Type parameters:**

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[RequestBuilder](requestbuilder.md)‹D, M›*

___

###  patch

▸ **patch**<**D**, **M**>(`uri`: string): *[CreationalRequestBuilder](creationalrequestbuilder.md)‹D, M›*

**Type parameters:**

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[CreationalRequestBuilder](creationalrequestbuilder.md)‹D, M›*

___

###  post

▸ **post**<**D**, **M**>(`uri`: string): *[CreationalRequestBuilder](creationalrequestbuilder.md)‹D, M›*

**Type parameters:**

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[CreationalRequestBuilder](creationalrequestbuilder.md)‹D, M›*

___

###  put

▸ **put**<**D**, **M**>(`uri`: string): *[CreationalRequestBuilder](creationalrequestbuilder.md)‹D, M›*

**Type parameters:**

▪ **D**: *[AnyData](../README.md#anydata)*

▪ **M**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[CreationalRequestBuilder](creationalrequestbuilder.md)‹D, M›*
