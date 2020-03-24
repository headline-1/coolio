# Interface: HttpClientConfig <**T**>

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

• **baseUrl**? : *undefined | string*

URL that is applied to all requests without specified protocol and domain.

___

### `Optional` bodyParser

• **bodyParser**? : *[BodyParser](../README.md#bodyparser)‹T›*

A utility that parses and normalizes body of a response received from server.
Can be used to decode JSON object, URL-encoded body or plain text.
Built-in [bodyParser](httpclientconfig.md#optional-bodyparser) supports case-conversion.

___

### `Optional` bodySerializer

• **bodySerializer**? : *[BodySerializer](../README.md#bodyserializer)*

A utility that parses and normalizes body of a request sent to server.
Can be used to encode JSON object, URL-encoded body or plain text.
Built-in [bodySerializer](httpclientconfig.md#optional-bodyserializer) supports case-conversion.

___

### `Optional` headers

• **headers**? : *[HttpHeaders](../README.md#httpheaders)*

Headers that will be passed to all requests.
To add headers dynamically, you can use an interceptor instead.

___

### `Optional` queryParserOptions

• **queryParserOptions**? : *qs.IParseOptions*

Allow to parse query options in a different way than the standard one.

___

### `Optional` querySerializerOptions

• **querySerializerOptions**? : *qs.IStringifyOptions*

Allow to serialize query options in a different way than the standard one.

___

###  requestHandler

• **requestHandler**: *[HttpRequestHandler](../README.md#httprequesthandler)*

An implementation of request handler, which handles "low-level" HTTP communication.
Result of executing a request via RequestHandler is a normalized object,
which can be further processed by interceptors and HttpClient.

- For Node.js environment, use [httpRequestHandler](../README.md#const-httprequesthandler)
- For browser environments, use [fetchRequestHandler](../README.md#const-fetchrequesthandler)
- For React Native and any other environment, use [xhrRequestHandler](../README.md#const-xhrrequesthandler)

___

### `Optional` requestTimeout

• **requestTimeout**? : *undefined | number*

Standard timeout, triggered when server does not respond with headers within specified period of time.

**`default`** [DEFAULT_REQUEST_TIMEOUT_MS](../README.md#const-default_request_timeout_ms)
