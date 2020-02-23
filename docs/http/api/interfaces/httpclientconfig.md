# Interface: HttpClientConfig <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **HttpClientConfig**

## Index

### Properties

* [baseUrl](httpclientconfig.md#optional-baseurl)
* [bodyParser](httpclientconfig.md#optional-bodyparser)
* [bodySerializer](httpclientconfig.md#optional-bodyserializer)
* [defaultHeadersProvider](httpclientconfig.md#optional-defaultheadersprovider)
* [followRedirections](httpclientconfig.md#optional-followredirections)
* [queryParserOptions](httpclientconfig.md#optional-queryparseroptions)
* [querySerializerOptions](httpclientconfig.md#optional-queryserializeroptions)
* [requestHandler](httpclientconfig.md#requesthandler)
* [requestTimeout](httpclientconfig.md#optional-requesttimeout)

## Properties

### `Optional` baseUrl

• **baseUrl**? : *undefined | string*

*Defined in [packages/http/src/httpClient.ts:31](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L31)*

___

### `Optional` bodyParser

• **bodyParser**? : *[BodyParser](../README.md#bodyparser)‹T›*

*Defined in [packages/http/src/httpClient.ts:29](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L29)*

___

### `Optional` bodySerializer

• **bodySerializer**? : *[BodySerializer](../README.md#bodyserializer)*

*Defined in [packages/http/src/httpClient.ts:30](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L30)*

___

### `Optional` defaultHeadersProvider

• **defaultHeadersProvider**? : *[HeadersProvider](../README.md#headersprovider)*

*Defined in [packages/http/src/httpClient.ts:28](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L28)*

___

### `Optional` followRedirections

• **followRedirections**? : *undefined | false | true*

*Defined in [packages/http/src/httpClient.ts:32](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L32)*

___

### `Optional` queryParserOptions

• **queryParserOptions**? : *qs.IParseOptions*

*Defined in [packages/http/src/httpClient.ts:33](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L33)*

___

### `Optional` querySerializerOptions

• **querySerializerOptions**? : *qs.IStringifyOptions*

*Defined in [packages/http/src/httpClient.ts:34](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L34)*

___

###  requestHandler

• **requestHandler**: *[HttpRequestHandler](../README.md#httprequesthandler)*

*Defined in [packages/http/src/httpClient.ts:27](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L27)*

___

### `Optional` requestTimeout

• **requestTimeout**? : *undefined | number*

*Defined in [packages/http/src/httpClient.ts:35](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.ts#L35)*
