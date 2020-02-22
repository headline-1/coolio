[@coolio/http](../README.md) › ["httpResponseError"](../modules/_httpresponseerror_.md) › [HttpResponseError](_httpresponseerror_.httpresponseerror.md)

# Class: HttpResponseError <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Error](_httprequesterror_.httprequesterror.md#static-error)

  ↳ **HttpResponseError**

## Index

### Constructors

* [constructor](_httpresponseerror_.httpresponseerror.md#constructor)

### Properties

* [__symbol](_httpresponseerror_.httpresponseerror.md#private-__symbol)
* [message](_httpresponseerror_.httpresponseerror.md#message)
* [name](_httpresponseerror_.httpresponseerror.md#name)
* [response](_httpresponseerror_.httpresponseerror.md#response)
* [stack](_httpresponseerror_.httpresponseerror.md#optional-stack)
* [status](_httpresponseerror_.httpresponseerror.md#status)
* [Error](_httpresponseerror_.httpresponseerror.md#static-error)

## Constructors

###  constructor

\+ **new HttpResponseError**(`response`: [HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹T›, `message?`: undefined | string): *[HttpResponseError](_httpresponseerror_.httpresponseerror.md)*

*Defined in [packages/http/src/httpResponseError.ts:8](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpResponseError.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹T› |
`message?` | undefined &#124; string |

**Returns:** *[HttpResponseError](_httpresponseerror_.httpresponseerror.md)*

## Properties

### `Private` __symbol

• **__symbol**: *symbol* = symbol

*Defined in [packages/http/src/httpResponseError.ts:8](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpResponseError.ts#L8)*

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

###  response

• **response**: *[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹T›*

*Defined in [packages/http/src/httpResponseError.ts:10](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpResponseError.ts#L10)*

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [HttpRequestError](_httprequesterror_.httprequesterror.md).[stack](_httprequesterror_.httprequesterror.md#optional-stack)*

*Overrides [HttpRequestError](_httprequesterror_.httprequesterror.md).[stack](_httprequesterror_.httprequesterror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

###  status

• **status**: *[HttpCode](../enums/_httpcodes_.httpcode.md)*

*Defined in [packages/http/src/httpResponseError.ts:7](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpResponseError.ts#L7)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
