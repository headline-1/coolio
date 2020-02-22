[@coolio/http](../README.md) › ["httpResponseHeaders"](../modules/_httpresponseheaders_.md) › [HttpResponseHeaders](_httpresponseheaders_.httpresponseheaders.md)

# Class: HttpResponseHeaders

## Hierarchy

* **HttpResponseHeaders**

## Index

### Constructors

* [constructor](_httpresponseheaders_.httpresponseheaders.md#constructor)

### Properties

* [map](_httpresponseheaders_.httpresponseheaders.md#map)

### Methods

* [get](_httpresponseheaders_.httpresponseheaders.md#get)
* [set](_httpresponseheaders_.httpresponseheaders.md#set)

## Constructors

###  constructor

\+ **new HttpResponseHeaders**(`headers`: IncomingHttpHeaders | [HttpHeaders](../modules/_httpclient_types_.md#httpheaders) | Headers | string): *[HttpResponseHeaders](_httpresponseheaders_.httpresponseheaders.md)*

*Defined in [packages/http/src/httpResponseHeaders.ts:6](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpResponseHeaders.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`headers` | IncomingHttpHeaders &#124; [HttpHeaders](../modules/_httpclient_types_.md#httpheaders) &#124; Headers &#124; string | {} |

**Returns:** *[HttpResponseHeaders](_httpresponseheaders_.httpresponseheaders.md)*

## Properties

###  map

• **map**: *Record‹string, string›*

*Defined in [packages/http/src/httpResponseHeaders.ts:6](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpResponseHeaders.ts#L6)*

## Methods

###  get

▸ **get**(`key`: string): *undefined | string*

*Defined in [packages/http/src/httpResponseHeaders.ts:33](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpResponseHeaders.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *undefined | string*

___

###  set

▸ **set**(`key`: string, `value`: any): *void*

*Defined in [packages/http/src/httpResponseHeaders.ts:29](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpResponseHeaders.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*
