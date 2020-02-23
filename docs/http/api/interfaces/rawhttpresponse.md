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

___

###  ok

• **ok**: *boolean*

___

###  redirected

• **redirected**: *boolean*

___

###  status

• **status**: *number*

___

###  statusText

• **statusText**: *string*

___

###  url

• **url**: *string*

## Methods

###  abort

▸ **abort**(): *void*

**Returns:** *void*

___

###  arrayBuffer

▸ **arrayBuffer**(): *Promise‹ArrayBuffer›*

**Returns:** *Promise‹ArrayBuffer›*

___

###  text

▸ **text**(): *Promise‹string›*

**Returns:** *Promise‹string›*
