# Class: HttpResponseHeaders

## Hierarchy

* **HttpResponseHeaders**

## Index

### Constructors

* [constructor](httpresponseheaders.md#constructor)

### Properties

* [map](httpresponseheaders.md#map)

### Methods

* [get](httpresponseheaders.md#get)
* [set](httpresponseheaders.md#set)

## Constructors

###  constructor

\+ **new HttpResponseHeaders**(`headers`: IncomingHttpHeaders | [HttpHeaders](../README.md#httpheaders) | Headers | string): *[HttpResponseHeaders](httpresponseheaders.md)*

*Defined in [packages/http/src/httpResponseHeaders.ts:6](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpResponseHeaders.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`headers` | IncomingHttpHeaders &#124; [HttpHeaders](../README.md#httpheaders) &#124; Headers &#124; string | {} |

**Returns:** *[HttpResponseHeaders](httpresponseheaders.md)*

## Properties

###  map

• **map**: *Record‹string, string›*

*Defined in [packages/http/src/httpResponseHeaders.ts:6](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpResponseHeaders.ts#L6)*

## Methods

###  get

▸ **get**(`key`: string): *undefined | string*

*Defined in [packages/http/src/httpResponseHeaders.ts:33](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpResponseHeaders.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *undefined | string*

___

###  set

▸ **set**(`key`: string, `value`: any): *void*

*Defined in [packages/http/src/httpResponseHeaders.ts:29](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpResponseHeaders.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*
