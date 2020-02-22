# Interface: HttpResponse <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [RawHttpResponse](rawhttpresponse.md)

  ↳ **HttpResponse**

## Index

### Properties

* [headers](httpresponse.md#headers)
* [ok](httpresponse.md#ok)
* [redirected](httpresponse.md#redirected)
* [status](httpresponse.md#status)
* [statusText](httpresponse.md#statustext)
* [url](httpresponse.md#url)

### Methods

* [abort](httpresponse.md#abort)
* [arrayBuffer](httpresponse.md#arraybuffer)
* [parsedBody](httpresponse.md#parsedbody)
* [text](httpresponse.md#text)

## Properties

###  headers

• **headers**: *[HttpResponseHeaders](../classes/httpresponseheaders.md)*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[headers](rawhttpresponse.md#headers)*

*Defined in [packages/http/src/httpClient.types.ts:5](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.types.ts#L5)*

___

###  ok

• **ok**: *boolean*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[ok](rawhttpresponse.md#ok)*

*Defined in [packages/http/src/httpClient.types.ts:6](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.types.ts#L6)*

___

###  redirected

• **redirected**: *boolean*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[redirected](rawhttpresponse.md#redirected)*

*Defined in [packages/http/src/httpClient.types.ts:7](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.types.ts#L7)*

___

###  status

• **status**: *number*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[status](rawhttpresponse.md#status)*

*Defined in [packages/http/src/httpClient.types.ts:8](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.types.ts#L8)*

___

###  statusText

• **statusText**: *string*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[statusText](rawhttpresponse.md#statustext)*

*Defined in [packages/http/src/httpClient.types.ts:9](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.types.ts#L9)*

___

###  url

• **url**: *string*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[url](rawhttpresponse.md#url)*

*Defined in [packages/http/src/httpClient.types.ts:10](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.types.ts#L10)*

## Methods

###  abort

▸ **abort**(): *void*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[abort](rawhttpresponse.md#abort)*

*Defined in [packages/http/src/httpClient.types.ts:16](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.types.ts#L16)*

**Returns:** *void*

___

###  arrayBuffer

▸ **arrayBuffer**(): *Promise‹ArrayBuffer›*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[arrayBuffer](rawhttpresponse.md#arraybuffer)*

*Defined in [packages/http/src/httpClient.types.ts:12](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.types.ts#L12)*

**Returns:** *Promise‹ArrayBuffer›*

___

###  parsedBody

▸ **parsedBody**(): *Promise‹T›*

*Defined in [packages/http/src/httpClient.types.ts:20](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.types.ts#L20)*

**Returns:** *Promise‹T›*

___

###  text

▸ **text**(): *Promise‹string›*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[text](rawhttpresponse.md#text)*

*Defined in [packages/http/src/httpClient.types.ts:14](https://github.com/headline-1/coolio/blob/c80476b/packages/http/src/httpClient.types.ts#L14)*

**Returns:** *Promise‹string›*
