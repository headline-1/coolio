# Class: CFormData

Create readable "multipart/form-data" streams.
Can be used to submit forms
and file uploads to other web applications.

## Hierarchy

* **CFormData**

## Index

### Constructors

* [constructor](cformdata.md#constructor)

### Properties

* [DEFAULT_CONTENT_TYPE](cformdata.md#static-default_content_type)
* [LINE_BREAK](cformdata.md#static-line_break)

### Methods

* [append](cformdata.md#append)
* [delete](cformdata.md#delete)
* [forEach](cformdata.md#foreach)
* [get](cformdata.md#get)
* [getAll](cformdata.md#getall)
* [getBoundary](cformdata.md#getboundary)
* [getBuffer](cformdata.md#getbuffer)
* [getHeaders](cformdata.md#getheaders)
* [has](cformdata.md#has)
* [pipe](cformdata.md#pipe)
* [set](cformdata.md#set)
* [toString](cformdata.md#tostring)
* [from](cformdata.md#static-from)
* [isFormData](cformdata.md#static-isformdata)

## Constructors

###  constructor

\+ **new CFormData**(`data?`: any): *[CFormData](cformdata.md)*

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |

**Returns:** *[CFormData](cformdata.md)*

## Properties

### `Static` DEFAULT_CONTENT_TYPE

▪ **DEFAULT_CONTENT_TYPE**: *string* = "application/octet-stream"

___

### `Static` LINE_BREAK

▪ **LINE_BREAK**: *string* = "
"

## Methods

###  append

▸ **append**(`name`: string, `value`: any, `meta?`: [CFormDataEntryMetadata](../interfaces/cformdataentrymetadata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | any |
`meta?` | [CFormDataEntryMetadata](../interfaces/cformdataentrymetadata.md) |

**Returns:** *void*

___

###  delete

▸ **delete**(`name`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

___

###  forEach

▸ **forEach**(`callbackfn`: function): *void*

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [CFormDataValue](../README.md#cformdatavalue), `key`: string, `parent`: [CFormData](cformdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [CFormDataValue](../README.md#cformdatavalue) |
`key` | string |
`parent` | [CFormData](cformdata.md) |

**Returns:** *void*

___

###  get

▸ **get**(`name`: string): *[CFormDataValue](../README.md#cformdatavalue) | null*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[CFormDataValue](../README.md#cformdatavalue) | null*

___

###  getAll

▸ **getAll**(`name`: string): *[CFormDataValue](../README.md#cformdatavalue)[]*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[CFormDataValue](../README.md#cformdatavalue)[]*

___

###  getBoundary

▸ **getBoundary**(): *string*

**Returns:** *string*

___

###  getBuffer

▸ **getBuffer**(): *Promise‹Buffer›*

**Returns:** *Promise‹Buffer›*

___

###  getHeaders

▸ **getHeaders**(): *object*

**Returns:** *object*

* **content-type**: *string* = 'multipart/form-data; boundary=' + this.getBoundary()

___

###  has

▸ **has**(`name`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  pipe

▸ **pipe**(`writable`: Writable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`writable` | Writable |

**Returns:** *void*

___

###  set

▸ **set**(`name`: string, `value`: [CFormDataValue](../README.md#cformdatavalue) | Blob, `meta?`: [CFormDataEntryMetadata](../interfaces/cformdataentrymetadata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | [CFormDataValue](../README.md#cformdatavalue) &#124; Blob |
`meta?` | [CFormDataEntryMetadata](../interfaces/cformdataentrymetadata.md) |

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

**Returns:** *string*

___

### `Static` from

▸ **from**(`data`: any, `__namedParameters`: object): *FormData | [CFormData](cformdata.md)*

**Parameters:**

▪ **data**: *any*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`forceImplementation` | undefined &#124; "native" &#124; "custom" |

**Returns:** *FormData | [CFormData](cformdata.md)*

___

### `Static` isFormData

▸ **isFormData**(`data`: any): *data is FormData | CFormData*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *data is FormData | CFormData*
