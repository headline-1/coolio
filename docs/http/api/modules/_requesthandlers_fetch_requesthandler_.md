[@coolio/http](../README.md) › ["requestHandlers/fetch.requestHandler"](_requesthandlers_fetch_requesthandler_.md)

# External module: "requestHandlers/fetch.requestHandler"

## Index

### Interfaces

* [FetchRequestHandlerOptions](../interfaces/_requesthandlers_fetch_requesthandler_.fetchrequesthandleroptions.md)

### Functions

* [fetchRequestHandler](_requesthandlers_fetch_requesthandler_.md#const-fetchrequesthandler)
* [mergeRequestOptions](_requesthandlers_fetch_requesthandler_.md#const-mergerequestoptions)

## Functions

### `Const` fetchRequestHandler

▸ **fetchRequestHandler**(`fetchRequestHandlerOptions`: [FetchRequestHandlerOptions](../interfaces/_requesthandlers_fetch_requesthandler_.fetchrequesthandleroptions.md)): *[HttpRequestHandler](_httpclient_types_.md#httprequesthandler)*

*Defined in [packages/http/src/requestHandlers/fetch.requestHandler.ts:17](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/requestHandlers/fetch.requestHandler.ts#L17)*

Creates a new [HttpRequestHandler](_httpclient_types_.md#httprequesthandler) that uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) underneath.
Does not support *timeout* property.
Abort is possible only after headers were received.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`fetchRequestHandlerOptions` | [FetchRequestHandlerOptions](../interfaces/_requesthandlers_fetch_requesthandler_.fetchrequesthandleroptions.md) | {} | default Fetch API options attached to all requests  |

**Returns:** *[HttpRequestHandler](_httpclient_types_.md#httprequesthandler)*

___

### `Const` mergeRequestOptions

▸ **mergeRequestOptions**(`defaultRequestOptions`: RequestInit | undefined, `requestOptions`: [NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md)): *RequestInit & [NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md)*

*Defined in [packages/http/src/requestHandlers/fetch.requestHandler.ts:62](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/requestHandlers/fetch.requestHandler.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultRequestOptions` | RequestInit &#124; undefined |
`requestOptions` | [NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md) |

**Returns:** *RequestInit & [NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md)*
