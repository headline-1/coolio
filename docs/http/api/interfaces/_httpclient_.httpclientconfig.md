[@coolio/http](../README.md) › ["httpClient"](../modules/_httpclient_.md) › [HttpClientConfig](_httpclient_.httpclientconfig.md)

# Interface: HttpClientConfig <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **HttpClientConfig**

## Index

### Properties

* [baseUrl](_httpclient_.httpclientconfig.md#optional-baseurl)
* [bodyParser](_httpclient_.httpclientconfig.md#optional-bodyparser)
* [bodySerializer](_httpclient_.httpclientconfig.md#optional-bodyserializer)
* [defaultHeadersProvider](_httpclient_.httpclientconfig.md#optional-defaultheadersprovider)
* [followRedirections](_httpclient_.httpclientconfig.md#optional-followredirections)
* [queryParserOptions](_httpclient_.httpclientconfig.md#optional-queryparseroptions)
* [querySerializerOptions](_httpclient_.httpclientconfig.md#optional-queryserializeroptions)
* [requestHandler](_httpclient_.httpclientconfig.md#requesthandler)
* [requestTimeout](_httpclient_.httpclientconfig.md#optional-requesttimeout)

## Properties

### `Optional` baseUrl

• **baseUrl**? : *undefined | string*

*Defined in [packages/http/src/httpClient.ts:31](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L31)*

___

### `Optional` bodyParser

• **bodyParser**? : *[BodyParser](../modules/_httpclient_types_.md#bodyparser)‹T›*

*Defined in [packages/http/src/httpClient.ts:29](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L29)*

___

### `Optional` bodySerializer

• **bodySerializer**? : *[BodySerializer](../modules/_httpclient_types_.md#bodyserializer)*

*Defined in [packages/http/src/httpClient.ts:30](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L30)*

___

### `Optional` defaultHeadersProvider

• **defaultHeadersProvider**? : *HeadersProvider*

*Defined in [packages/http/src/httpClient.ts:28](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L28)*

___

### `Optional` followRedirections

• **followRedirections**? : *undefined | false | true*

*Defined in [packages/http/src/httpClient.ts:32](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L32)*

___

### `Optional` queryParserOptions

• **queryParserOptions**? : *qs.IParseOptions*

*Defined in [packages/http/src/httpClient.ts:33](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L33)*

___

### `Optional` querySerializerOptions

• **querySerializerOptions**? : *qs.IStringifyOptions*

*Defined in [packages/http/src/httpClient.ts:34](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L34)*

___

###  requestHandler

• **requestHandler**: *[HttpRequestHandler](../modules/_httpclient_types_.md#httprequesthandler)*

*Defined in [packages/http/src/httpClient.ts:27](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L27)*

___

### `Optional` requestTimeout

• **requestTimeout**? : *undefined | number*

*Defined in [packages/http/src/httpClient.ts:35](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.ts#L35)*
