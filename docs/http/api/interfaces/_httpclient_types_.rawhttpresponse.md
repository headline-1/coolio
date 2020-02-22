[@coolio/http](../README.md) › ["httpClient.types"](../modules/_httpclient_types_.md) › [RawHttpResponse](_httpclient_types_.rawhttpresponse.md)

# Interface: RawHttpResponse

## Hierarchy

* **RawHttpResponse**

  ↳ [HttpResponse](_httpclient_types_.httpresponse.md)

## Index

### Properties

* [headers](_httpclient_types_.rawhttpresponse.md#headers)
* [ok](_httpclient_types_.rawhttpresponse.md#ok)
* [redirected](_httpclient_types_.rawhttpresponse.md#redirected)
* [status](_httpclient_types_.rawhttpresponse.md#status)
* [statusText](_httpclient_types_.rawhttpresponse.md#statustext)
* [url](_httpclient_types_.rawhttpresponse.md#url)

### Methods

* [abort](_httpclient_types_.rawhttpresponse.md#abort)
* [arrayBuffer](_httpclient_types_.rawhttpresponse.md#arraybuffer)
* [text](_httpclient_types_.rawhttpresponse.md#text)

## Properties

###  headers

• **headers**: *[HttpResponseHeaders](../classes/_httpresponseheaders_.httpresponseheaders.md)*

*Defined in [packages/http/src/httpClient.types.ts:5](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L5)*

___

###  ok

• **ok**: *boolean*

*Defined in [packages/http/src/httpClient.types.ts:6](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L6)*

___

###  redirected

• **redirected**: *boolean*

*Defined in [packages/http/src/httpClient.types.ts:7](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L7)*

___

###  status

• **status**: *number*

*Defined in [packages/http/src/httpClient.types.ts:8](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L8)*

___

###  statusText

• **statusText**: *string*

*Defined in [packages/http/src/httpClient.types.ts:9](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L9)*

___

###  url

• **url**: *string*

*Defined in [packages/http/src/httpClient.types.ts:10](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L10)*

## Methods

###  abort

▸ **abort**(): *void*

*Defined in [packages/http/src/httpClient.types.ts:16](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L16)*

**Returns:** *void*

___

###  arrayBuffer

▸ **arrayBuffer**(): *Promise‹ArrayBuffer›*

*Defined in [packages/http/src/httpClient.types.ts:12](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L12)*

**Returns:** *Promise‹ArrayBuffer›*

___

###  text

▸ **text**(): *Promise‹string›*

*Defined in [packages/http/src/httpClient.types.ts:14](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L14)*

**Returns:** *Promise‹string›*
