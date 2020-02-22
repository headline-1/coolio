[@coolio/http](../README.md) › ["httpRequestError"](../modules/_httprequesterror_.md) › [HttpRequestError](_httprequesterror_.httprequesterror.md)

# Class: HttpRequestError <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Error](_httprequesterror_.httprequesterror.md#static-error)

  ↳ **HttpRequestError**

## Index

### Constructors

* [constructor](_httprequesterror_.httprequesterror.md#constructor)

### Properties

* [__symbol](_httprequesterror_.httprequesterror.md#private-__symbol)
* [message](_httprequesterror_.httprequesterror.md#message)
* [name](_httprequesterror_.httprequesterror.md#name)
* [options](_httprequesterror_.httprequesterror.md#options)
* [stack](_httprequesterror_.httprequesterror.md#optional-stack)
* [Error](_httprequesterror_.httprequesterror.md#static-error)

## Constructors

###  constructor

\+ **new HttpRequestError**(`options`: [NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md), `message?`: undefined | string): *[HttpRequestError](_httprequesterror_.httprequesterror.md)*

*Defined in [packages/http/src/httpRequestError.ts:6](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpRequestError.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md) |
`message?` | undefined &#124; string |

**Returns:** *[HttpRequestError](_httprequesterror_.httprequesterror.md)*

## Properties

### `Private` __symbol

• **__symbol**: *symbol* = symbol

*Defined in [packages/http/src/httpRequestError.ts:6](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpRequestError.ts#L6)*

___

###  message

• **message**: *string*

*Inherited from [HttpRequestError](_httprequesterror_.httprequesterror.md).[message](_httprequesterror_.httprequesterror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [HttpRequestError](_httprequesterror_.httprequesterror.md).[name](_httprequesterror_.httprequesterror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

###  options

• **options**: *[NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md)*

*Defined in [packages/http/src/httpRequestError.ts:8](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpRequestError.ts#L8)*

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [HttpRequestError](_httprequesterror_.httprequesterror.md).[stack](_httprequesterror_.httprequesterror.md#optional-stack)*

*Overrides [HttpRequestError](_httprequesterror_.httprequesterror.md).[stack](_httprequesterror_.httprequesterror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
