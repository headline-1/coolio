# Class: HttpClient <**T**>

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

###  constructor

\+ **new HttpClient**(`config`: [HttpClientConfig](../interfaces/httpclientconfig.md)‹T›): *[HttpClient](httpclient.md)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [HttpClientConfig](../interfaces/httpclientconfig.md)‹T› |

**Returns:** *[HttpClient](httpclient.md)*

## Methods

###  addInterceptor

▸ **addInterceptor**(`interceptor`: [HttpInterceptor](../README.md#httpinterceptor)): *this*

Adds an interceptor to the client. Interceptor can be written either as class or as a function,
which may mutate request options and post-process response from server.
Multiple interceptors can be added to a single HttpClient. They can perform as:
- cache
- error handler
- authorizer
- logger
- auto-retry
- redirection handler

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`interceptor` | [HttpInterceptor](../README.md#httpinterceptor) | Interceptor that will process every request/response in this HttpClient.  |

**Returns:** *this*

___

###  delete

▸ **delete**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

Performs a DELETE request.

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | Address of HTTP endpoint |
`options?` | [HttpOptions](../README.md#httpoptions) | Additional [HttpOptions](../README.md#httpoptions) passed with request  |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

___

###  get

▸ **get**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

Performs a GET request.

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | Address of HTTP endpoint |
`options?` | [HttpOptions](../README.md#httpoptions) | Additional [HttpOptions](../README.md#httpoptions) passed with request  |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

___

###  patch

▸ **patch**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

Performs a PATCH request.

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | Address of HTTP endpoint |
`options?` | [HttpOptions](../README.md#httpoptions) | Additional [HttpOptions](../README.md#httpoptions) passed with request  |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

___

###  post

▸ **post**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

Performs a POST request.

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | Address of HTTP endpoint |
`options?` | [HttpOptions](../README.md#httpoptions) | Additional [HttpOptions](../README.md#httpoptions) passed with request  |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

___

###  put

▸ **put**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

Performs a PUT request.

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | Address of HTTP endpoint |
`options?` | [HttpOptions](../README.md#httpoptions) | Additional [HttpOptions](../README.md#httpoptions) passed with request  |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

___

###  remove

▸ **remove**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹any››*

Performs a DELETE request.

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | Address of HTTP endpoint |
`options?` | [HttpOptions](../README.md#httpoptions) | Additional [HttpOptions](../README.md#httpoptions) passed with request  |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹any››*

___

###  request

▸ **request**<**Body**>(`url`: string, `options`: [HttpRequestOptions](../interfaces/httprequestoptions.md)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options` | [HttpRequestOptions](../interfaces/httprequestoptions.md) |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*
