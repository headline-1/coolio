# Class: HttpClient <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **HttpClient**

## Index

### Constructors

* [constructor](httpclient.md#constructor)

### Properties

* [baseUrl](httpclient.md#private-optional-baseurl)
* [bodyParser](httpclient.md#private-bodyparser)
* [bodySerializer](httpclient.md#private-bodyserializer)
* [defaultHeadersProvider](httpclient.md#private-optional-defaultheadersprovider)
* [defaultRequestTimeout](httpclient.md#private-defaultrequesttimeout)
* [followRedirections](httpclient.md#private-followredirections)
* [handle](httpclient.md#private-handle)
* [interceptors](httpclient.md#private-interceptors)
* [queryParserOptions](httpclient.md#private-optional-queryparseroptions)
* [querySerializerOptions](httpclient.md#private-optional-queryserializeroptions)

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

*Defined in [packages/http/src/httpClient.ts:68](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [HttpClientConfig](../interfaces/httpclientconfig.md)‹T› |

**Returns:** *[HttpClient](httpclient.md)*

## Properties

### `Private` `Optional` baseUrl

• **baseUrl**? : *undefined | string*

*Defined in [packages/http/src/httpClient.ts:67](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L67)*

___

### `Private` bodyParser

• **bodyParser**: *[BodyParser](../README.md#bodyparser)‹T›*

*Defined in [packages/http/src/httpClient.ts:62](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L62)*

___

### `Private` bodySerializer

• **bodySerializer**: *[BodySerializer](../README.md#bodyserializer)*

*Defined in [packages/http/src/httpClient.ts:63](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L63)*

___

### `Private` `Optional` defaultHeadersProvider

• **defaultHeadersProvider**? : *[HeadersProvider](../README.md#headersprovider)*

*Defined in [packages/http/src/httpClient.ts:60](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L60)*

___

### `Private` defaultRequestTimeout

• **defaultRequestTimeout**: *number*

*Defined in [packages/http/src/httpClient.ts:68](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L68)*

___

### `Private` followRedirections

• **followRedirections**: *boolean*

*Defined in [packages/http/src/httpClient.ts:66](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L66)*

___

### `Private` handle

• **handle**: *[HttpRequestHandler](../README.md#httprequesthandler)*

*Defined in [packages/http/src/httpClient.ts:59](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L59)*

___

### `Private` interceptors

• **interceptors**: *[HttpInterceptor](../README.md#httpinterceptor)[]* = []

*Defined in [packages/http/src/httpClient.ts:61](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L61)*

___

### `Private` `Optional` queryParserOptions

• **queryParserOptions**? : *qs.IParseOptions*

*Defined in [packages/http/src/httpClient.ts:64](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L64)*

___

### `Private` `Optional` querySerializerOptions

• **querySerializerOptions**? : *qs.IStringifyOptions*

*Defined in [packages/http/src/httpClient.ts:65](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L65)*

## Methods

###  addInterceptor

▸ **addInterceptor**(`interceptor`: [HttpInterceptor](../README.md#httpinterceptor)): *this*

*Defined in [packages/http/src/httpClient.ts:82](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`interceptor` | [HttpInterceptor](../README.md#httpinterceptor) |

**Returns:** *this*

___

###  get

▸ **get**<**Body**>(`uri`: string, `options?`: [HttpOptions](../README.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:87](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L87)*

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

*Defined in [packages/http/src/httpClient.ts:109](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L109)*

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

*Defined in [packages/http/src/httpClient.ts:95](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L95)*

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

*Defined in [packages/http/src/httpClient.ts:102](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L102)*

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

*Defined in [packages/http/src/httpClient.ts:116](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L116)*

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

*Defined in [packages/http/src/httpClient.ts:124](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.ts#L124)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options` | [HttpRequestOptions](../interfaces/httprequestoptions.md) |

**Returns:** *Promise‹[HttpResponse](../interfaces/httpresponse.md)‹Body››*
