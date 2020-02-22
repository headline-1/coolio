[@coolio/http](../README.md) › ["requestHandlers/mock.requestHandler"](../modules/_requesthandlers_mock_requesthandler_.md) › [Endpoint](_requesthandlers_mock_requesthandler_.endpoint.md)

# Interface: Endpoint

## Hierarchy

* **Endpoint**

## Index

### Properties

* [handler](_requesthandlers_mock_requesthandler_.endpoint.md#handler)
* [match](_requesthandlers_mock_requesthandler_.endpoint.md#match)

## Properties

###  handler

• **handler**: *function*

*Defined in [packages/http/src/requestHandlers/mock.requestHandler.ts:29](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/requestHandlers/mock.requestHandler.ts#L29)*

#### Type declaration:

▸ (`request`: [NormalizedHttpOptions](_httpclient_types_.normalizedhttpoptions.md)): *Promise‹[RawHttpResponse](_httpclient_types_.rawhttpresponse.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [NormalizedHttpOptions](_httpclient_types_.normalizedhttpoptions.md) |

___

###  match

• **match**: *string | RegExp*

*Defined in [packages/http/src/requestHandlers/mock.requestHandler.ts:28](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/requestHandlers/mock.requestHandler.ts#L28)*
