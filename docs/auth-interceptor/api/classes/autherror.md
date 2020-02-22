# Class: AuthError

## Hierarchy

* [Error](autherror.md#static-error)

  ↳ **AuthError**

## Index

### Constructors

* [constructor](autherror.md#constructor)

### Properties

* [cause](autherror.md#optional-cause)
* [message](autherror.md#message)
* [name](autherror.md#name)
* [stack](autherror.md#optional-stack)
* [Error](autherror.md#static-error)

## Constructors

###  constructor

\+ **new AuthError**(`message`: string, `cause?`: [Error](autherror.md#static-error)): *[AuthError](autherror.md)*

*Defined in [packages/auth-interceptor/src/authError.ts:2](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/authError.ts#L2)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`cause?` | [Error](autherror.md#static-error) |

**Returns:** *[AuthError](autherror.md)*

## Properties

### `Optional` cause

• **cause**? : *[Error](autherror.md#static-error)*

*Defined in [packages/auth-interceptor/src/authError.ts:2](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/authError.ts#L2)*

___

###  message

• **message**: *string*

*Inherited from [AuthError](autherror.md).[message](autherror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [AuthError](autherror.md).[name](autherror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [AuthError](autherror.md).[stack](autherror.md#optional-stack)*

*Overrides [AuthError](autherror.md).[stack](autherror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
