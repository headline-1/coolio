[@coolio/http](../README.md) › ["requestHandlers/mock.requestHandler"](_requesthandlers_mock_requesthandler_.md)

# External module: "requestHandlers/mock.requestHandler"

## Index

### Interfaces

* [Endpoint](../interfaces/_requesthandlers_mock_requesthandler_.endpoint.md)
* [MockOptions](../interfaces/_requesthandlers_mock_requesthandler_.mockoptions.md)

### Type aliases

* [MockHttpRequestHandler](_requesthandlers_mock_requesthandler_.md#mockhttprequesthandler)

### Functions

* [handleRequest](_requesthandlers_mock_requesthandler_.md#const-handlerequest)
* [mockRequestHandler](_requesthandlers_mock_requesthandler_.md#const-mockrequesthandler)

## Type aliases

###  MockHttpRequestHandler

Ƭ **MockHttpRequestHandler**: *[HttpRequestHandler](_httpclient_types_.md#httprequesthandler) & object*

*Defined in [packages/http/src/requestHandlers/mock.requestHandler.ts:36](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/requestHandlers/mock.requestHandler.ts#L36)*

## Functions

### `Const` handleRequest

▸ **handleRequest**(`code`: number, `body`: any, `contentType`: string): *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)›*

*Defined in [packages/http/src/requestHandlers/mock.requestHandler.ts:8](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/requestHandlers/mock.requestHandler.ts#L8)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`code` | number | - |
`body` | any | - |
`contentType` | string | ContentType.TEXT |

**Returns:** *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)›*

___

### `Const` mockRequestHandler

▸ **mockRequestHandler**(`mockOptions`: [MockOptions](../interfaces/_requesthandlers_mock_requesthandler_.mockoptions.md)): *[MockHttpRequestHandler](_requesthandlers_mock_requesthandler_.md#mockhttprequesthandler)*

*Defined in [packages/http/src/requestHandlers/mock.requestHandler.ts:40](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/requestHandlers/mock.requestHandler.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`mockOptions` | [MockOptions](../interfaces/_requesthandlers_mock_requesthandler_.mockoptions.md) |

**Returns:** *[MockHttpRequestHandler](_requesthandlers_mock_requesthandler_.md#mockhttprequesthandler)*
