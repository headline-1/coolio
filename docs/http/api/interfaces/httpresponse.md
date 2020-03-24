# HttpResponse

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

### headers

• **headers**: [_HttpResponseHeaders_](../classes/httpresponseheaders.md)

_Inherited from_ [_RawHttpResponse_](rawhttpresponse.md)_._[_headers_](rawhttpresponse.md#headers)

### ok

• **ok**: _boolean_

_Inherited from_ [_RawHttpResponse_](rawhttpresponse.md)_._[_ok_](rawhttpresponse.md#ok)

### redirected

• **redirected**: _boolean_

_Inherited from_ [_RawHttpResponse_](rawhttpresponse.md)_._[_redirected_](rawhttpresponse.md#redirected)

### status

• **status**: _number_

_Inherited from_ [_RawHttpResponse_](rawhttpresponse.md)_._[_status_](rawhttpresponse.md#status)

### statusText

• **statusText**: _string_

_Inherited from_ [_RawHttpResponse_](rawhttpresponse.md)_._[_statusText_](rawhttpresponse.md#statustext)

### url

• **url**: _string_

_Inherited from_ [_RawHttpResponse_](rawhttpresponse.md)_._[_url_](rawhttpresponse.md#url)

## Methods

### abort

▸ **abort**\(\): _void_

_Inherited from_ [_RawHttpResponse_](rawhttpresponse.md)_._[_abort_](rawhttpresponse.md#abort)

**Returns:** _void_

### arrayBuffer

▸ **arrayBuffer**\(\): _Promise‹ArrayBuffer›_

_Inherited from_ [_RawHttpResponse_](rawhttpresponse.md)_._[_arrayBuffer_](rawhttpresponse.md#arraybuffer)

**Returns:** _Promise‹ArrayBuffer›_

### parsedBody

▸ **parsedBody**\(\): _Promise‹T›_

**Returns:** _Promise‹T›_

### text

▸ **text**\(\): _Promise‹string›_

_Inherited from_ [_RawHttpResponse_](rawhttpresponse.md)_._[_text_](rawhttpresponse.md#text)

**Returns:** _Promise‹string›_

