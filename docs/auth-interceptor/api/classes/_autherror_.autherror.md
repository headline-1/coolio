[@coolio/auth-interceptor](../README.md) › ["authError"](../modules/_autherror_.md) › [AuthError](_autherror_.autherror.md)

# Class: AuthError

## Hierarchy

* [Error](_autherror_.autherror.md#static-error)

  ↳ **AuthError**

## Index

### Constructors

* [constructor](_autherror_.autherror.md#constructor)

### Properties

* [cause](_autherror_.autherror.md#optional-cause)
* [message](_autherror_.autherror.md#message)
* [name](_autherror_.autherror.md#name)
* [stack](_autherror_.autherror.md#optional-stack)
* [Error](_autherror_.autherror.md#static-error)

## Constructors

###  constructor

\+ **new AuthError**(`message`: string, `cause?`: [Error](_autherror_.autherror.md#static-error)): *[AuthError](_autherror_.autherror.md)*

*Defined in [packages/auth-interceptor/src/authError.ts:2](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authError.ts#L2)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`cause?` | [Error](_autherror_.autherror.md#static-error) |

**Returns:** *[AuthError](_autherror_.autherror.md)*

## Properties

### `Optional` cause

• **cause**? : *[Error](_autherror_.autherror.md#static-error)*

*Defined in [packages/auth-interceptor/src/authError.ts:2](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authError.ts#L2)*

___

###  message

• **message**: *string*

*Inherited from [AuthError](_autherror_.autherror.md).[message](_autherror_.autherror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [AuthError](_autherror_.autherror.md).[name](_autherror_.autherror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [AuthError](_autherror_.autherror.md).[stack](_autherror_.autherror.md#optional-stack)*

*Overrides [AuthError](_autherror_.autherror.md).[stack](_autherror_.autherror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
