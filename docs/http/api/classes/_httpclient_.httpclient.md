[@coolio/http](../README.md) › ["httpClient"](../modules/_httpclient_.md) › [HttpClient](_httpclient_.httpclient.md)

# Class: HttpClient <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **HttpClient**

## Index

### Constructors

* [constructor](_httpclient_.httpclient.md#constructor)

### Properties

* [baseUrl](_httpclient_.httpclient.md#private-optional-baseurl)
* [bodyParser](_httpclient_.httpclient.md#private-bodyparser)
* [bodySerializer](_httpclient_.httpclient.md#private-bodyserializer)
* [defaultHeadersProvider](_httpclient_.httpclient.md#private-optional-defaultheadersprovider)
* [defaultRequestTimeout](_httpclient_.httpclient.md#private-defaultrequesttimeout)
* [followRedirections](_httpclient_.httpclient.md#private-followredirections)
* [handle](_httpclient_.httpclient.md#private-handle)
* [interceptors](_httpclient_.httpclient.md#private-interceptors)
* [queryParserOptions](_httpclient_.httpclient.md#private-optional-queryparseroptions)
* [querySerializerOptions](_httpclient_.httpclient.md#private-optional-queryserializeroptions)

### Methods

* [addInterceptor](_httpclient_.httpclient.md#addinterceptor)
* [get](_httpclient_.httpclient.md#get)
* [patch](_httpclient_.httpclient.md#patch)
* [post](_httpclient_.httpclient.md#post)
* [put](_httpclient_.httpclient.md#put)
* [remove](_httpclient_.httpclient.md#remove)
* [request](_httpclient_.httpclient.md#request)

## Constructors

###  constructor

\+ **new HttpClient**(`config`: [HttpClientConfig](../interfaces/_httpclient_.httpclientconfig.md)‹T›): *[HttpClient](_httpclient_.httpclient.md)*

*Defined in [packages/http/src/httpClient.ts:68](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [HttpClientConfig](../interfaces/_httpclient_.httpclientconfig.md)‹T› |

**Returns:** *[HttpClient](_httpclient_.httpclient.md)*

## Properties

### `Private` `Optional` baseUrl

• **baseUrl**? : *undefined | string*

*Defined in [packages/http/src/httpClient.ts:67](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L67)*

___

### `Private` bodyParser

• **bodyParser**: *[BodyParser](../modules/_httpclient_types_.md#bodyparser)‹T›*

*Defined in [packages/http/src/httpClient.ts:62](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L62)*

___

### `Private` bodySerializer

• **bodySerializer**: *[BodySerializer](../modules/_httpclient_types_.md#bodyserializer)*

*Defined in [packages/http/src/httpClient.ts:63](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L63)*

___

### `Private` `Optional` defaultHeadersProvider

• **defaultHeadersProvider**? : *HeadersProvider*

*Defined in [packages/http/src/httpClient.ts:60](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L60)*

___

### `Private` defaultRequestTimeout

• **defaultRequestTimeout**: *number*

*Defined in [packages/http/src/httpClient.ts:68](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L68)*

___

### `Private` followRedirections

• **followRedirections**: *boolean*

*Defined in [packages/http/src/httpClient.ts:66](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L66)*

___

### `Private` handle

• **handle**: *[HttpRequestHandler](../modules/_httpclient_types_.md#httprequesthandler)*

*Defined in [packages/http/src/httpClient.ts:59](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L59)*

___

### `Private` interceptors

• **interceptors**: *[HttpInterceptor](../modules/_httpclient_types_.md#httpinterceptor)[]* = []

*Defined in [packages/http/src/httpClient.ts:61](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L61)*

___

### `Private` `Optional` queryParserOptions

• **queryParserOptions**? : *qs.IParseOptions*

*Defined in [packages/http/src/httpClient.ts:64](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L64)*

___

### `Private` `Optional` querySerializerOptions

• **querySerializerOptions**? : *qs.IStringifyOptions*

*Defined in [packages/http/src/httpClient.ts:65](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L65)*

## Methods

###  addInterceptor

▸ **addInterceptor**(`interceptor`: [HttpInterceptor](../modules/_httpclient_types_.md#httpinterceptor)): *this*

*Defined in [packages/http/src/httpClient.ts:82](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`interceptor` | [HttpInterceptor](../modules/_httpclient_types_.md#httpinterceptor) |

**Returns:** *this*

___

###  get

▸ **get**<**Body**>(`uri`: string, `options?`: [HttpOptions](../modules/_httpclient_types_.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:87](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L87)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options?` | [HttpOptions](../modules/_httpclient_types_.md#httpoptions) |

**Returns:** *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

___

###  patch

▸ **patch**<**Body**>(`uri`: string, `options?`: [HttpOptions](../modules/_httpclient_types_.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:109](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L109)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options?` | [HttpOptions](../modules/_httpclient_types_.md#httpoptions) |

**Returns:** *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

___

###  post

▸ **post**<**Body**>(`uri`: string, `options?`: [HttpOptions](../modules/_httpclient_types_.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:95](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L95)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options?` | [HttpOptions](../modules/_httpclient_types_.md#httpoptions) |

**Returns:** *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

___

###  put

▸ **put**<**Body**>(`uri`: string, `options?`: [HttpOptions](../modules/_httpclient_types_.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:102](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L102)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options?` | [HttpOptions](../modules/_httpclient_types_.md#httpoptions) |

**Returns:** *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

___

###  remove

▸ **remove**<**Body**>(`uri`: string, `options?`: [HttpOptions](../modules/_httpclient_types_.md#httpoptions)): *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:116](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L116)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options?` | [HttpOptions](../modules/_httpclient_types_.md#httpoptions) |

**Returns:** *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

___

###  request

▸ **request**<**Body**>(`url`: string, `options`: [HttpRequestOptions](../interfaces/_httpclient_types_.httprequestoptions.md)): *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

*Defined in [packages/http/src/httpClient.ts:124](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L124)*

**Type parameters:**

▪ **Body**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options` | [HttpRequestOptions](../interfaces/_httpclient_types_.httprequestoptions.md) |

**Returns:** *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*
