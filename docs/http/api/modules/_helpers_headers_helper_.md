[@coolio/http](../README.md) › ["helpers/headers.helper"](_helpers_headers_helper_.md)

# External module: "helpers/headers.helper"

## Index

### Functions

* [getHeader](_helpers_headers_helper_.md#const-getheader)
* [parseHeaders](_helpers_headers_helper_.md#const-parseheaders)

## Functions

### `Const` getHeader

▸ **getHeader**(`headers`: [HttpHeaders](_httpclient_types_.md#httpheaders) | undefined, `header`: string): *string | undefined*

*Defined in [packages/http/src/helpers/headers.helper.ts:3](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/headers.helper.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [HttpHeaders](_httpclient_types_.md#httpheaders) &#124; undefined |
`header` | string |

**Returns:** *string | undefined*

___

### `Const` parseHeaders

▸ **parseHeaders**(`headers`: Headers): *Record‹string, string›*

*Defined in [packages/http/src/helpers/headers.helper.ts:12](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/headers.helper.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | Headers |

**Returns:** *Record‹string, string›*
