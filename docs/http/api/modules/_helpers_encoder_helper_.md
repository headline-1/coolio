[@coolio/http](../README.md) › ["helpers/encoder.helper"](_helpers_encoder_helper_.md)

# External module: "helpers/encoder.helper"

## Index

### Type aliases

* [BufferEncoding](_helpers_encoder_helper_.md#bufferencoding)

### Functions

* [encodeArrayBuffer](_helpers_encoder_helper_.md#const-encodearraybuffer)
* [encodeText](_helpers_encoder_helper_.md#const-encodetext)
* [getEncodingFromHeaders](_helpers_encoder_helper_.md#const-getencodingfromheaders)

## Type aliases

###  BufferEncoding

Ƭ **BufferEncoding**: *"ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex"*

*Defined in [packages/http/src/helpers/encoder.helper.ts:5](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/encoder.helper.ts#L5)*

## Functions

### `Const` encodeArrayBuffer

▸ **encodeArrayBuffer**(`data`: TypedArray | string | undefined, `encoding`: [BufferEncoding](_helpers_encoder_helper_.md#bufferencoding)): *Uint8Array‹›*

*Defined in [packages/http/src/helpers/encoder.helper.ts:31](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/encoder.helper.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | TypedArray &#124; string &#124; undefined | "" |
`encoding` | [BufferEncoding](_helpers_encoder_helper_.md#bufferencoding) | "utf8" |

**Returns:** *Uint8Array‹›*

___

### `Const` encodeText

▸ **encodeText**(`buffer`: ArrayBuffer, `encoding`: string): *string*

*Defined in [packages/http/src/helpers/encoder.helper.ts:36](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/encoder.helper.ts#L36)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`buffer` | ArrayBuffer | - |
`encoding` | string | "utf8" |

**Returns:** *string*

___

### `Const` getEncodingFromHeaders

▸ **getEncodingFromHeaders**(`headers`: [HttpResponseHeaders](../classes/_httpresponseheaders_.httpresponseheaders.md) | undefined, `fallback`: string): *string*

*Defined in [packages/http/src/helpers/encoder.helper.ts:23](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/encoder.helper.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`headers` | [HttpResponseHeaders](../classes/_httpresponseheaders_.httpresponseheaders.md) &#124; undefined | - |
`fallback` | string | "utf8" |

**Returns:** *string*
