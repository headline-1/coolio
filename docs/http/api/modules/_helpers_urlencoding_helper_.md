[@coolio/http](../README.md) › ["helpers/urlEncoding.helper"](_helpers_urlencoding_helper_.md)

# External module: "helpers/urlEncoding.helper"

## Index

### Functions

* [urlCombine](_helpers_urlencoding_helper_.md#const-urlcombine)
* [urlDecode](_helpers_urlencoding_helper_.md#const-urldecode)
* [urlDestruct](_helpers_urlencoding_helper_.md#const-urldestruct)
* [urlEncode](_helpers_urlencoding_helper_.md#const-urlencode)

## Functions

### `Const` urlCombine

▸ **urlCombine**(`sourceUrl`: string, `sourceQuery?`: undefined | object, `options?`: qs.IStringifyOptions): *string*

*Defined in [packages/http/src/helpers/urlEncoding.helper.ts:15](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/urlEncoding.helper.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`sourceUrl` | string |
`sourceQuery?` | undefined &#124; object |
`options?` | qs.IStringifyOptions |

**Returns:** *string*

___

### `Const` urlDecode

▸ **urlDecode**<**T**>(`value`: string, `options?`: qs.IParseOptions): *T*

*Defined in [packages/http/src/helpers/urlEncoding.helper.ts:28](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/urlEncoding.helper.ts#L28)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`options?` | qs.IParseOptions |

**Returns:** *T*

___

### `Const` urlDestruct

▸ **urlDestruct**(`url`: string, `options?`: qs.IParseOptions): *object*

*Defined in [packages/http/src/helpers/urlEncoding.helper.ts:4](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/urlEncoding.helper.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options?` | qs.IParseOptions |

**Returns:** *object*

* **query**: *any*

* **url**: *string*

___

### `Const` urlEncode

▸ **urlEncode**(`value`: any, `options?`: qs.IStringifyOptions): *string*

*Defined in [packages/http/src/helpers/urlEncoding.helper.ts:24](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/urlEncoding.helper.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`options?` | qs.IStringifyOptions |

**Returns:** *string*
