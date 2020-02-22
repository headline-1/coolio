[@coolio/http](../README.md) › ["httpClient.types"](../modules/_httpclient_types_.md) › [HttpResponse](_httpclient_types_.httpresponse.md)

# Interface: HttpResponse <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [RawHttpResponse](_httpclient_types_.rawhttpresponse.md)

  ↳ **HttpResponse**

## Index

### Properties

* [headers](_httpclient_types_.httpresponse.md#headers)
* [ok](_httpclient_types_.httpresponse.md#ok)
* [redirected](_httpclient_types_.httpresponse.md#redirected)
* [status](_httpclient_types_.httpresponse.md#status)
* [statusText](_httpclient_types_.httpresponse.md#statustext)
* [url](_httpclient_types_.httpresponse.md#url)

### Methods

* [abort](_httpclient_types_.httpresponse.md#abort)
* [arrayBuffer](_httpclient_types_.httpresponse.md#arraybuffer)
* [parsedBody](_httpclient_types_.httpresponse.md#parsedbody)
* [text](_httpclient_types_.httpresponse.md#text)

## Properties

###  headers

• **headers**: *[HttpResponseHeaders](../classes/_httpresponseheaders_.httpresponseheaders.md)*

*Inherited from [RawHttpResponse](_httpclient_types_.rawhttpresponse.md).[headers](_httpclient_types_.rawhttpresponse.md#headers)*

*Defined in [packages/http/src/httpClient.types.ts:5](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L5)*

___

###  ok

• **ok**: *boolean*

*Inherited from [RawHttpResponse](_httpclient_types_.rawhttpresponse.md).[ok](_httpclient_types_.rawhttpresponse.md#ok)*

*Defined in [packages/http/src/httpClient.types.ts:6](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L6)*

___

###  redirected

• **redirected**: *boolean*

*Inherited from [RawHttpResponse](_httpclient_types_.rawhttpresponse.md).[redirected](_httpclient_types_.rawhttpresponse.md#redirected)*

*Defined in [packages/http/src/httpClient.types.ts:7](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L7)*

___

###  status

• **status**: *number*

*Inherited from [RawHttpResponse](_httpclient_types_.rawhttpresponse.md).[status](_httpclient_types_.rawhttpresponse.md#status)*

*Defined in [packages/http/src/httpClient.types.ts:8](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L8)*

___

###  statusText

• **statusText**: *string*

*Inherited from [RawHttpResponse](_httpclient_types_.rawhttpresponse.md).[statusText](_httpclient_types_.rawhttpresponse.md#statustext)*

*Defined in [packages/http/src/httpClient.types.ts:9](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L9)*

___

###  url

• **url**: *string*

*Inherited from [RawHttpResponse](_httpclient_types_.rawhttpresponse.md).[url](_httpclient_types_.rawhttpresponse.md#url)*

*Defined in [packages/http/src/httpClient.types.ts:10](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L10)*

## Methods

###  abort

▸ **abort**(): *void*

*Inherited from [RawHttpResponse](_httpclient_types_.rawhttpresponse.md).[abort](_httpclient_types_.rawhttpresponse.md#abort)*

*Defined in [packages/http/src/httpClient.types.ts:16](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L16)*

**Returns:** *void*

___

###  arrayBuffer

▸ **arrayBuffer**(): *Promise‹ArrayBuffer›*

*Inherited from [RawHttpResponse](_httpclient_types_.rawhttpresponse.md).[arrayBuffer](_httpclient_types_.rawhttpresponse.md#arraybuffer)*

*Defined in [packages/http/src/httpClient.types.ts:12](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L12)*

**Returns:** *Promise‹ArrayBuffer›*

___

###  parsedBody

▸ **parsedBody**(): *Promise‹T›*

*Defined in [packages/http/src/httpClient.types.ts:20](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L20)*

**Returns:** *Promise‹T›*

___

###  text

▸ **text**(): *Promise‹string›*

*Inherited from [RawHttpResponse](_httpclient_types_.rawhttpresponse.md).[text](_httpclient_types_.rawhttpresponse.md#text)*

*Defined in [packages/http/src/httpClient.types.ts:14](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L14)*

**Returns:** *Promise‹string›*
