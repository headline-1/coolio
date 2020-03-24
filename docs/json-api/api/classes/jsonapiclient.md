# JsonApiClient

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

### constructor

+ **new JsonApiClient**\(`httpClient`: HttpClient\): [_JsonApiClient_](jsonapiclient.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `httpClient` | HttpClient |

**Returns:** [_JsonApiClient_](jsonapiclient.md)

## Properties

### httpClient

• **httpClient**: _HttpClient_

## Methods

### get

▸ **get**&lt;**D**, **M**&gt;\(`uri`: string\): [_GetBuilder_](getbuilder.md)_‹_[_RawResponse_](../interfaces/rawresponse.md)_‹D, M››_

**Type parameters:**

▪ **D**: [_AnyData_](../#anydata)

▪ **M**: _object_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `uri` | string |

**Returns:** [_GetBuilder_](getbuilder.md)_‹_[_RawResponse_](../interfaces/rawresponse.md)_‹D, M››_

### getList

▸ **getList**&lt;**D**, **M**&gt;\(`uri`: string\): [_GetListBuilder_](getlistbuilder.md)_‹_[_RawListResponse_](../interfaces/rawlistresponse.md)_‹D, M›, object›_

**Type parameters:**

▪ **D**: [_AnyData_](../#anydata)

▪ **M**: [_ListMetaData_](../interfaces/listmetadata.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `uri` | string |

**Returns:** [_GetListBuilder_](getlistbuilder.md)_‹_[_RawListResponse_](../interfaces/rawlistresponse.md)_‹D, M›, object›_

### patch

▸ **patch**&lt;**D**, **M**&gt;\(`uri`: string\): [_UpdateBuilder_](updatebuilder.md)_‹_[_RawResponse_](../interfaces/rawresponse.md)_‹D, M››_

**Type parameters:**

▪ **D**: [_AnyData_](../#anydata)

▪ **M**: _object_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `uri` | string |

**Returns:** [_UpdateBuilder_](updatebuilder.md)_‹_[_RawResponse_](../interfaces/rawresponse.md)_‹D, M››_

### post

▸ **post**&lt;**D**, **M**&gt;\(`uri`: string\): [_PostBuilder_](postbuilder.md)_‹_[_RawResponse_](../interfaces/rawresponse.md)_‹D, M››_

**Type parameters:**

▪ **D**: [_AnyData_](../#anydata)

▪ **M**: _object_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `uri` | string |

**Returns:** [_PostBuilder_](postbuilder.md)_‹_[_RawResponse_](../interfaces/rawresponse.md)_‹D, M››_

### put

▸ **put**&lt;**D**, **M**&gt;\(`uri`: string\): [_UpdateBuilder_](updatebuilder.md)_‹_[_RawResponse_](../interfaces/rawresponse.md)_‹D, M››_

**Type parameters:**

▪ **D**: [_AnyData_](../#anydata)

▪ **M**: _object_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `uri` | string |

**Returns:** [_UpdateBuilder_](updatebuilder.md)_‹_[_RawResponse_](../interfaces/rawresponse.md)_‹D, M››_

### remove

▸ **remove**&lt;**D**, **M**&gt;\(`uri`: string\): [_RemoveBuilder_](removebuilder.md)_‹_[_RawResponse_](../interfaces/rawresponse.md)_‹D, M››_

**Type parameters:**

▪ **D**: [_AnyData_](../#anydata)

▪ **M**: _object_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `uri` | string |

**Returns:** [_RemoveBuilder_](removebuilder.md)_‹_[_RawResponse_](../interfaces/rawresponse.md)_‹D, M››_

