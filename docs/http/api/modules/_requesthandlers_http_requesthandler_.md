[@coolio/http](../README.md) › ["requestHandlers/http.requestHandler"](_requesthandlers_http_requesthandler_.md)

# External module: "requestHandlers/http.requestHandler"

## Index

### Interfaces

* [HttpRequestHandlerOptions](../interfaces/_requesthandlers_http_requesthandler_.httprequesthandleroptions.md)

### Functions

* [httpRequestHandler](_requesthandlers_http_requesthandler_.md#const-httprequesthandler)

## Functions

### `Const` httpRequestHandler

▸ **httpRequestHandler**(`requestHandlerOptions`: [HttpRequestHandlerOptions](../interfaces/_requesthandlers_http_requesthandler_.httprequesthandleroptions.md)): *[HttpRequestHandler](_httpclient_types_.md#httprequesthandler)*

*Defined in [packages/http/src/requestHandlers/http.requestHandler.ts:19](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/requestHandlers/http.requestHandler.ts#L19)*

Creates a new [HttpRequestHandler](_httpclient_types_.md#httprequesthandler) that uses native Node.js [HTTP](https://nodejs.org/api/http.html) & [HTTPS](https://nodejs.org/api/https.html) modules underneath.
Does not support *mode* property.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`requestHandlerOptions` | [HttpRequestHandlerOptions](../interfaces/_requesthandlers_http_requesthandler_.httprequesthandleroptions.md) | {} | default native options attached to all requests  |

**Returns:** *[HttpRequestHandler](_httpclient_types_.md#httprequesthandler)*
