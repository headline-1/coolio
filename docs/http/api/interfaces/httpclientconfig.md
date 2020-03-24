# HttpClientConfig

A set of configuration options, which allows [HttpClient](../classes/httpclient.md) to perform requests and process responses.

## Type parameters

▪ **T**

Common body shape defined by [bodyParser](httpclientconfig.md#optional-bodyparser).

## Hierarchy

* **HttpClientConfig**

## Index

### Properties

* [baseUrl](httpclientconfig.md#optional-baseurl)
* [bodyParser](httpclientconfig.md#optional-bodyparser)
* [bodySerializer](httpclientconfig.md#optional-bodyserializer)
* [headers](httpclientconfig.md#optional-headers)
* [queryParserOptions](httpclientconfig.md#optional-queryparseroptions)
* [querySerializerOptions](httpclientconfig.md#optional-queryserializeroptions)
* [requestHandler](httpclientconfig.md#requesthandler)
* [requestTimeout](httpclientconfig.md#optional-requesttimeout)

## Properties

### `Optional` baseUrl

• **baseUrl**? : _undefined \| string_

URL that is applied to all requests without specified protocol and domain.

### `Optional` bodyParser

• **bodyParser**? : [_BodyParser_](../#bodyparser)_‹T›_

A utility that parses and normalizes body of a response received from server. Can be used to decode JSON object, URL-encoded body or plain text. Built-in [bodyParser](httpclientconfig.md#optional-bodyparser) supports case-conversion.

### `Optional` bodySerializer

• **bodySerializer**? : [_BodySerializer_](../#bodyserializer)

A utility that parses and normalizes body of a request sent to server. Can be used to encode JSON object, URL-encoded body or plain text. Built-in [bodySerializer](httpclientconfig.md#optional-bodyserializer) supports case-conversion.

### `Optional` headers

• **headers**? : [_HttpHeaders_](../#httpheaders)

Headers that will be passed to all requests. To add headers dynamically, you can use an interceptor instead.

### `Optional` queryParserOptions

• **queryParserOptions**? : _qs.IParseOptions_

Allow to parse query options in a different way than the standard one.

### `Optional` querySerializerOptions

• **querySerializerOptions**? : _qs.IStringifyOptions_

Allow to serialize query options in a different way than the standard one.

### requestHandler

• **requestHandler**: [_HttpRequestHandler_](../#httprequesthandler)

An implementation of request handler, which handles "low-level" HTTP communication. Result of executing a request via RequestHandler is a normalized object, which can be further processed by interceptors and HttpClient.

* For Node.js environment, use [httpRequestHandler](../#const-httprequesthandler)
* For browser environments, use [fetchRequestHandler](../#const-fetchrequesthandler)
* For React Native and any other environment, use [xhrRequestHandler](../#const-xhrrequesthandler)

### `Optional` requestTimeout

• **requestTimeout**? : _undefined \| number_

Standard timeout, triggered when server does not respond with headers within specified period of time.

**`default`** [DEFAULT\_REQUEST\_TIMEOUT\_MS](../#const-default_request_timeout_ms)

