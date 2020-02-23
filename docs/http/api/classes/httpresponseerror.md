# Class: HttpResponseError <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Error](httprequesterror.md#static-error)

  ↳ **HttpResponseError**

## Index

### Constructors

* [constructor](httpresponseerror.md#constructor)

### Properties

* [message](httpresponseerror.md#message)
* [name](httpresponseerror.md#name)
* [response](httpresponseerror.md#response)
* [stack](httpresponseerror.md#optional-stack)
* [status](httpresponseerror.md#status)
* [Error](httpresponseerror.md#static-error)

## Constructors

###  constructor

\+ **new HttpResponseError**(`response`: [HttpResponse](../interfaces/httpresponse.md)‹T›, `message?`: undefined | string): *[HttpResponseError](httpresponseerror.md)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [HttpResponse](../interfaces/httpresponse.md)‹T› |
`message?` | undefined &#124; string |

**Returns:** *[HttpResponseError](httpresponseerror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [HttpRequestError](httprequesterror.md).[message](httprequesterror.md#message)*

___

###  name

• **name**: *string*

*Inherited from [HttpRequestError](httprequesterror.md).[name](httprequesterror.md#name)*

___

###  response

• **response**: *[HttpResponse](../interfaces/httpresponse.md)‹T›*

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [HttpRequestError](httprequesterror.md).[stack](httprequesterror.md#optional-stack)*

*Overrides [HttpRequestError](httprequesterror.md).[stack](httprequesterror.md#optional-stack)*

___

###  status

• **status**: *[HttpCode](../enums/httpcode.md)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*
