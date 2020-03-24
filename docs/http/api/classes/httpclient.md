# HttpClient

Base class in Coolio http package, which allows to perform API calls.

## Type parameters

▪ **T**

Common body shape defined by bodyParser passed in [HttpClientConfig](../interfaces/httpclientconfig.md).

## Hierarchy

* **HttpClient**

## Index

### Constructors

* [constructor](httpclient.md#constructor)

### Methods

* [addInterceptor](httpclient.md#addinterceptor)
* [delete](httpclient.md#delete)
* [get](httpclient.md#get)
* [patch](httpclient.md#patch)
* [post](httpclient.md#post)
* [put](httpclient.md#put)
* [remove](httpclient.md#remove)
* [request](httpclient.md#request)

## Constructors

### constructor

+ **new HttpClient**\(`config`: [HttpClientConfig](../interfaces/httpclientconfig.md)‹T›\): [_HttpClient_](httpclient.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `config` | [HttpClientConfig](../interfaces/httpclientconfig.md)‹T› |

**Returns:** [_HttpClient_](httpclient.md)

## Methods

### addInterceptor

▸ **addInterceptor**\(`interceptor`: [HttpInterceptor](../#httpinterceptor)\): _this_

Adds an interceptor to the client. Interceptor can be written either as class or as a function, which may mutate request options and post-process response from server. Multiple interceptors can be added to a single HttpClient. They can perform as:

* cache
* error handler
* authorizer
* logger
* auto-retry
* redirection handler

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `interceptor` | [HttpInterceptor](../#httpinterceptor) | Interceptor that will process every request/response in this HttpClient. |

**Returns:** _this_

### delete

▸ **delete**&lt;**Body**&gt;\(`uri`: string, `options?`: [HttpOptions](../#httpoptions)\): _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

Performs a DELETE request.

**Type parameters:**

▪ **Body**: _T_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `uri` | string | Address of HTTP endpoint |
| `options?` | [HttpOptions](../#httpoptions) | Additional [HttpOptions](../#httpoptions) passed with request |

**Returns:** _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

### get

▸ **get**&lt;**Body**&gt;\(`uri`: string, `options?`: [HttpOptions](../#httpoptions)\): _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

Performs a GET request.

**Type parameters:**

▪ **Body**: _T_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `uri` | string | Address of HTTP endpoint |
| `options?` | [HttpOptions](../#httpoptions) | Additional [HttpOptions](../#httpoptions) passed with request |

**Returns:** _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

### patch

▸ **patch**&lt;**Body**&gt;\(`uri`: string, `options?`: [HttpOptions](../#httpoptions)\): _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

Performs a PATCH request.

**Type parameters:**

▪ **Body**: _T_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `uri` | string | Address of HTTP endpoint |
| `options?` | [HttpOptions](../#httpoptions) | Additional [HttpOptions](../#httpoptions) passed with request |

**Returns:** _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

### post

▸ **post**&lt;**Body**&gt;\(`uri`: string, `options?`: [HttpOptions](../#httpoptions)\): _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

Performs a POST request.

**Type parameters:**

▪ **Body**: _T_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `uri` | string | Address of HTTP endpoint |
| `options?` | [HttpOptions](../#httpoptions) | Additional [HttpOptions](../#httpoptions) passed with request |

**Returns:** _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

### put

▸ **put**&lt;**Body**&gt;\(`uri`: string, `options?`: [HttpOptions](../#httpoptions)\): _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

Performs a PUT request.

**Type parameters:**

▪ **Body**: _T_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `uri` | string | Address of HTTP endpoint |
| `options?` | [HttpOptions](../#httpoptions) | Additional [HttpOptions](../#httpoptions) passed with request |

**Returns:** _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

### remove

▸ **remove**&lt;**Body**&gt;\(`uri`: string, `options?`: [HttpOptions](../#httpoptions)\): _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹any››_

Performs a DELETE request.

**`deprecated`** Use delete instead of remove, since it matches HTTP request method.

**Type parameters:**

▪ **Body**: _T_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `uri` | string | Address of HTTP endpoint |
| `options?` | [HttpOptions](../#httpoptions) | Additional [HttpOptions](../#httpoptions) passed with request |

**Returns:** _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹any››_

### request

▸ **request**&lt;**Body**&gt;\(`url`: string, `options`: [HttpRequestOptions](../interfaces/httprequestoptions.md)\): _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

**Type parameters:**

▪ **Body**: _T_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `url` | string |
| `options` | [HttpRequestOptions](../interfaces/httprequestoptions.md) |

**Returns:** _Promise‹_[_HttpResponse_](../interfaces/httpresponse.md)_‹Body››_

