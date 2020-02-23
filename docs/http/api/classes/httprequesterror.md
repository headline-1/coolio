# Class: HttpRequestError <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Error](httprequesterror.md#static-error)

  ↳ **HttpRequestError**

## Index

### Constructors

* [constructor](httprequesterror.md#constructor)

### Properties

* [message](httprequesterror.md#message)
* [name](httprequesterror.md#name)
* [options](httprequesterror.md#options)
* [stack](httprequesterror.md#optional-stack)
* [Error](httprequesterror.md#static-error)

## Constructors

###  constructor

\+ **new HttpRequestError**(`options`: [NormalizedHttpOptions](../interfaces/normalizedhttpoptions.md), `message?`: undefined | string): *[HttpRequestError](httprequesterror.md)*

*Defined in [packages/http/src/httpRequestError.ts:6](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpRequestError.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [NormalizedHttpOptions](../interfaces/normalizedhttpoptions.md) |
`message?` | undefined &#124; string |

**Returns:** *[HttpRequestError](httprequesterror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [HttpRequestError](httprequesterror.md).[message](httprequesterror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [HttpRequestError](httprequesterror.md).[name](httprequesterror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

###  options

• **options**: *[NormalizedHttpOptions](../interfaces/normalizedhttpoptions.md)*

*Defined in [packages/http/src/httpRequestError.ts:8](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpRequestError.ts#L8)*

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [HttpRequestError](httprequesterror.md).[stack](httprequesterror.md#optional-stack)*

*Overrides [HttpRequestError](httprequesterror.md).[stack](httprequesterror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
