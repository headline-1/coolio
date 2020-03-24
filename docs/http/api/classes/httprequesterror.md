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

___

###  name

• **name**: *string*

*Inherited from [HttpRequestError](httprequesterror.md).[name](httprequesterror.md#name)*

___

###  options

• **options**: *[NormalizedHttpOptions](../interfaces/normalizedhttpoptions.md)*

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [HttpRequestError](httprequesterror.md).[stack](httprequesterror.md#optional-stack)*

*Overrides [HttpRequestError](httprequesterror.md).[stack](httprequesterror.md#optional-stack)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*
