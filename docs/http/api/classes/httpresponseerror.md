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

*Defined in [packages/http/src/httpResponseError.ts:8](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpResponseError.ts#L8)*

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

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [HttpRequestError](httprequesterror.md).[name](httprequesterror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

###  response

• **response**: *[HttpResponse](../interfaces/httpresponse.md)‹T›*

*Defined in [packages/http/src/httpResponseError.ts:10](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpResponseError.ts#L10)*

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [HttpRequestError](httprequesterror.md).[stack](httprequesterror.md#optional-stack)*

*Overrides [HttpRequestError](httprequesterror.md).[stack](httprequesterror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

###  status

• **status**: *[HttpCode](../enums/httpcode.md)*

*Defined in [packages/http/src/httpResponseError.ts:7](https://github.com/headline-1/coolio/blob/420fd1d/packages/http/src/httpResponseError.ts#L7)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
