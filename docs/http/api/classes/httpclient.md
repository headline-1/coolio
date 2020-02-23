# Class: HttpClient <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **HttpClient**

## Index

### Constructors

* [constructor](httpclient.md#constructor)

### Methods

* [addInterceptor](httpclient.md#addinterceptor)
* [get](httpclient.md#get)
* [patch](httpclient.md#patch)
* [post](httpclient.md#post)
* [put](httpclient.md#put)
* [remove](httpclient.md#remove)
* [request](httpclient.md#request)

## Constructors

###  constructor

\+ **new HttpClient**(`config`: [HttpClientConfig](../interfaces/httpclientconfig.md)‹T›): *[HttpClient](httpclient.md)*

*Defined in [packages/http/src/httpClient.ts:68](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [HttpClientConfig](../interfaces/httpclientconfig.md)‹T› |

**Returns:** *[HttpClient](httpclient.md)*

## Methods

###  addInterceptor

▸ **addInterceptor**(`interceptor`: [HttpInterceptor](../README.md#httpinterceptor)): *this*

*Defined in [packages/http/src/httpClient.ts:82](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`interceptor` | [HttpInterceptor](../README.md#httpinterceptor) |

**Returns:** *this*

___

###  get

▸ **get**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:87](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L87)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options?` | [HttpOptions](../README.md#httpoptions) |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

___

###  patch

▸ **patch**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:109](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L109)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options?` | [HttpOptions](../README.md#httpoptions) |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

___

###  post

▸ **post**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:95](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L95)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options?` | [HttpOptions](../README.md#httpoptions) |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

___

###  put

▸ **put**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:102](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L102)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options?` | [HttpOptions](../README.md#httpoptions) |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

___

###  remove

▸ **remove**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:116](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L116)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options?` | [HttpOptions](../README.md#httpoptions) |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

___

###  request

▸ **request**<**Body**>(`url`: string, `options`: [HttpRequestOptions](../interfaces/httprequestoptions.md)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:124](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L124)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options` | [HttpRequestOptions](../interfaces/httprequestoptions.md) |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*
