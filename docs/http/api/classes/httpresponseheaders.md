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

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`headers` | IncomingHttpHeaders &#124; [HttpHeaders](../README.md#httpheaders) &#124; Headers &#124; string | {} |

**Returns:** *[HttpResponseHeaders](httpresponseheaders.md)*

## Properties

###  map

• **map**: *Record‹string, string›*

## Methods

###  get

▸ **get**(`key`: string): *undefined | string*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *undefined | string*

___

###  set

▸ **set**(`key`: string, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*
