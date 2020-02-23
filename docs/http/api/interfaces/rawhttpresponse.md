# Interface: RawHttpResponse

## Hierarchy

* **RawHttpResponse**

  ↳ [HttpResponse](httpresponse.md)

## Index

### Properties

* [headers](rawhttpresponse.md#headers)
* [ok](rawhttpresponse.md#ok)
* [redirected](rawhttpresponse.md#redirected)
* [status](rawhttpresponse.md#status)
* [statusText](rawhttpresponse.md#statustext)
* [url](rawhttpresponse.md#url)

### Methods

* [abort](rawhttpresponse.md#abort)
* [arrayBuffer](rawhttpresponse.md#arraybuffer)
* [text](rawhttpresponse.md#text)

## Properties

###  headers

• **headers**: *[HttpResponseHeaders](../classes/httpresponseheaders.md)*

*Defined in [packages/http/src/httpClient.types.ts:5](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.types.ts#L5)*

___

###  ok

• **ok**: *boolean*

*Defined in [packages/http/src/httpClient.types.ts:6](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.types.ts#L6)*

___

###  redirected

• **redirected**: *boolean*

*Defined in [packages/http/src/httpClient.types.ts:7](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.types.ts#L7)*

___

###  status

• **status**: *number*

*Defined in [packages/http/src/httpClient.types.ts:8](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.types.ts#L8)*

___

###  statusText

• **statusText**: *string*

*Defined in [packages/http/src/httpClient.types.ts:9](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.types.ts#L9)*

___

###  url

• **url**: *string*

*Defined in [packages/http/src/httpClient.types.ts:10](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.types.ts#L10)*

## Methods

###  abort

▸ **abort**(): *void*

*Defined in [packages/http/src/httpClient.types.ts:16](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.types.ts#L16)*

**Returns:** *void*

___

###  arrayBuffer

▸ **arrayBuffer**(): *Promise‹ArrayBuffer›*

*Defined in [packages/http/src/httpClient.types.ts:12](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.types.ts#L12)*

**Returns:** *Promise‹ArrayBuffer›*

___

###  text

▸ **text**(): *Promise‹string›*

*Defined in [packages/http/src/httpClient.types.ts:14](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpClient.types.ts#L14)*

**Returns:** *Promise‹string›*
