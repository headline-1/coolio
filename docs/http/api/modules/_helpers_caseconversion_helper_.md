[@coolio/http](../README.md) › ["helpers/caseConversion.helper"](_helpers_caseconversion_helper_.md)

# External module: "helpers/caseConversion.helper"

## Index

### Enumerations

* [BodyCasing](../enums/_helpers_caseconversion_helper_.bodycasing.md)

### Functions

* [deepKeyMap](_helpers_caseconversion_helper_.md#const-deepkeymap)
* [getCaseConverter](_helpers_caseconversion_helper_.md#const-getcaseconverter)
* [noConversion](_helpers_caseconversion_helper_.md#const-noconversion)
* [splitWords](_helpers_caseconversion_helper_.md#const-splitwords)
* [toCamelCase](_helpers_caseconversion_helper_.md#const-tocamelcase)
* [toKebabCase](_helpers_caseconversion_helper_.md#const-tokebabcase)
* [toPascalCase](_helpers_caseconversion_helper_.md#const-topascalcase)
* [toSnakeCase](_helpers_caseconversion_helper_.md#const-tosnakecase)

## Functions

### `Const` deepKeyMap

▸ **deepKeyMap**(`object`: any, `mapper`: function): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:15](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/caseConversion.helper.ts#L15)*

**Parameters:**

▪ **object**: *any*

▪ **mapper**: *function*

▸ (`key`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *any*

___

### `Const` getCaseConverter

▸ **getCaseConverter**(`bodyCasing?`: [BodyCasing](../enums/_helpers_caseconversion_helper_.bodycasing.md)): *toCamelCase*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:51](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/caseConversion.helper.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`bodyCasing?` | [BodyCasing](../enums/_helpers_caseconversion_helper_.bodycasing.md) |

**Returns:** *toCamelCase*

___

### `Const` noConversion

▸ **noConversion**(`object`: any): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:49](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/caseConversion.helper.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` splitWords

▸ **splitWords**(`text`: string): *string[]*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:11](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/caseConversion.helper.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *string[]*

___

### `Const` toCamelCase

▸ **toCamelCase**(`object`: any): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:31](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/caseConversion.helper.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toKebabCase

▸ **toKebabCase**(`object`: any): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:45](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/caseConversion.helper.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toPascalCase

▸ **toPascalCase**(`object`: any): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:37](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/caseConversion.helper.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toSnakeCase

▸ **toSnakeCase**(`object`: any): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:41](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/helpers/caseConversion.helper.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*
