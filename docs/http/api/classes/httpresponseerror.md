# HttpResponseError

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

### constructor

+ **new HttpResponseError**\(`response`: [HttpResponse](../interfaces/httpresponse.md)‹T›, `message?`: undefined \| string\): [_HttpResponseError_](httpresponseerror.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `response` | [HttpResponse](../interfaces/httpresponse.md)‹T› |
| `message?` | undefined \| string |

**Returns:** [_HttpResponseError_](httpresponseerror.md)

## Properties

### message

• **message**: _string_

_Inherited from_ [_HttpRequestError_](httprequesterror.md)_._[_message_](httprequesterror.md#message)

### name

• **name**: _string_

_Inherited from_ [_HttpRequestError_](httprequesterror.md)_._[_name_](httprequesterror.md#name)

### response

• **response**: [_HttpResponse_](../interfaces/httpresponse.md)_‹T›_

### `Optional` stack

• **stack**? : _undefined \| string_

_Inherited from_ [_HttpRequestError_](httprequesterror.md)_._[_stack_](httprequesterror.md#optional-stack)

_Overrides_ [_HttpRequestError_](httprequesterror.md)_._[_stack_](httprequesterror.md#optional-stack)

### status

• **status**: [_HttpCode_](../enums/httpcode.md)

### `Static` Error

▪ **Error**: _ErrorConstructor_

