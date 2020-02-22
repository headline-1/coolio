[@coolio/http](../README.md) › ["contentType"](_contenttype_.md)

# External module: "contentType"

## Index

### Enumerations

* [ContentType](../enums/_contenttype_.contenttype.md)

### Type aliases

* [ContentTypeMap](_contenttype_.md#contenttypemap)

### Functions

* [switchContentType](_contenttype_.md#switchcontenttype)

### Object literals

* [ContentTypeRegex](_contenttype_.md#const-contenttyperegex)

## Type aliases

###  ContentTypeMap

Ƭ **ContentTypeMap**: *Record‹keyof typeof ContentTypeRegex, T›*

*Defined in [packages/http/src/contentType.ts:14](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/contentType.ts#L14)*

## Functions

###  switchContentType

▸ **switchContentType**<**T**>(`contentType`: string, `map`: [ContentTypeMap](_contenttype_.md#contenttypemap)‹T›, `defaultResult`: T): *T*

*Defined in [packages/http/src/contentType.ts:16](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/contentType.ts#L16)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string |
`map` | [ContentTypeMap](_contenttype_.md#contenttypemap)‹T› |
`defaultResult` | T |

**Returns:** *T*

▸ **switchContentType**<**T**>(`contentType`: string, `map`: [ContentTypeMap](_contenttype_.md#contenttypemap)‹T›): *T | undefined*

*Defined in [packages/http/src/contentType.ts:17](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/contentType.ts#L17)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string |
`map` | [ContentTypeMap](_contenttype_.md#contenttypemap)‹T› |

**Returns:** *T | undefined*

## Object literals

### `Const` ContentTypeRegex

### ▪ **ContentTypeRegex**: *object*

*Defined in [packages/http/src/contentType.ts:8](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/contentType.ts#L8)*

###  JSON

• **JSON**: *RegExp‹›* = /^application\/(json|.+\+json)$/

*Defined in [packages/http/src/contentType.ts:10](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/contentType.ts#L10)*

###  TEXT

• **TEXT**: *RegExp‹›* = /^text\//

*Defined in [packages/http/src/contentType.ts:9](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/contentType.ts#L9)*

###  URL_ENCODED

• **URL_ENCODED**: *RegExp‹›* = /^application\/x-www-form-urlencoded$/

*Defined in [packages/http/src/contentType.ts:11](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/contentType.ts#L11)*
