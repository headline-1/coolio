# HttpResponseHeaders

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

### constructor

+ **new HttpResponseHeaders**\(`headers`: IncomingHttpHeaders \| [HttpHeaders](../#httpheaders) \| Headers \| string\): [_HttpResponseHeaders_](httpresponseheaders.md)

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `headers` | IncomingHttpHeaders \| [HttpHeaders](../#httpheaders) \| Headers \| string | {} |

**Returns:** [_HttpResponseHeaders_](httpresponseheaders.md)

## Properties

### map

• **map**: _Record‹string, string›_

## Methods

### get

▸ **get**\(`key`: string\): _undefined \| string_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `key` | string |

**Returns:** _undefined \| string_

### set

▸ **set**\(`key`: string, `value`: any\): _void_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `key` | string |
| `value` | any |

**Returns:** _void_

