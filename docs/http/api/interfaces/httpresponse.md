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

___

###  ok

• **ok**: *boolean*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[ok](rawhttpresponse.md#ok)*

___

###  redirected

• **redirected**: *boolean*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[redirected](rawhttpresponse.md#redirected)*

___

###  status

• **status**: *number*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[status](rawhttpresponse.md#status)*

___

###  statusText

• **statusText**: *string*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[statusText](rawhttpresponse.md#statustext)*

___

###  url

• **url**: *string*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[url](rawhttpresponse.md#url)*

## Methods

###  abort

▸ **abort**(): *void*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[abort](rawhttpresponse.md#abort)*

**Returns:** *void*

___

###  arrayBuffer

▸ **arrayBuffer**(): *Promise‹ArrayBuffer›*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[arrayBuffer](rawhttpresponse.md#arraybuffer)*

**Returns:** *Promise‹ArrayBuffer›*

___

###  parsedBody

▸ **parsedBody**(): *Promise‹T›*

**Returns:** *Promise‹T›*

___

###  text

▸ **text**(): *Promise‹string›*

*Inherited from [RawHttpResponse](rawhttpresponse.md).[text](rawhttpresponse.md#text)*

**Returns:** *Promise‹string›*
