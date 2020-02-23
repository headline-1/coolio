# Interface: HttpClientConfig <**T**>

A set of configuration options, which allows [HttpClient](../classes/httpclient.md) to perform

## Type parameters

▪ **T**

## Hierarchy

* **HttpClientConfig**

## Index

### Properties

* [baseUrl](httpclientconfig.md#optional-baseurl)
* [bodyParser](httpclientconfig.md#optional-bodyparser)
* [bodySerializer](httpclientconfig.md#optional-bodyserializer)
* [defaultHeadersProvider](httpclientconfig.md#optional-defaultheadersprovider)
* [queryParserOptions](httpclientconfig.md#optional-queryparseroptions)
* [querySerializerOptions](httpclientconfig.md#optional-queryserializeroptions)
* [requestHandler](httpclientconfig.md#requesthandler)
* [requestTimeout](httpclientconfig.md#optional-requesttimeout)

## Properties

### `Optional` baseUrl

• **baseUrl**? : *undefined | string*

*Defined in [packages/http/src/httpClient.ts:69](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L69)*

URL that is applied to all requests without specified protocol and domain.

___

### `Optional` bodyParser

• **bodyParser**? : *[BodyParser](../README.md#bodyparser)‹T›*

*Defined in [packages/http/src/httpClient.ts:57](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L57)*

A utility that parses and normalizes body of a response received from server.
Can be used to decode JSON object, URL-encoded body or plain text.
Built-in [bodyParser](httpclientconfig.md#optional-bodyparser) supports case-conversion.

___

### `Optional` bodySerializer

• **bodySerializer**? : *[BodySerializer](../README.md#bodyserializer)*

*Defined in [packages/http/src/httpClient.ts:64](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L64)*

A utility that parses and normalizes body of a request sent to server.
Can be used to encode JSON object, URL-encoded body or plain text.
Built-in [bodySerializer](httpclientconfig.md#optional-bodyserializer) supports case-conversion.

___

### `Optional` defaultHeadersProvider

• **defaultHeadersProvider**? : *[HeadersProvider](../README.md#headersprovider)*

*Defined in [packages/http/src/httpClient.ts:50](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L50)*

Old way of passing global headers to requests.
To add headers dynamically, you can use an interceptor instead.
To add a set of static headers, pass them to request handler options directly.

**`deprecated`** 

___

### `Optional` queryParserOptions

• **queryParserOptions**? : *qs.IParseOptions*

*Defined in [packages/http/src/httpClient.ts:74](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L74)*

Allow to parse query options in a different way than the standard one.

___

### `Optional` querySerializerOptions

• **querySerializerOptions**? : *qs.IStringifyOptions*

*Defined in [packages/http/src/httpClient.ts:79](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L79)*

Allow to serialize query options in a different way than the standard one.

___

###  requestHandler

• **requestHandler**: *[HttpRequestHandler](../README.md#httprequesthandler)*

*Defined in [packages/http/src/httpClient.ts:42](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L42)*

An implementation of request handler, which handles "low-level" HTTP communication.
Result of executing a request via RequestHandler is a normalized object,
which can be further processed by interceptors and HttpClient.

- For Node.js environment, use [httpRequestHandler](../README.md#const-httprequesthandler)
- For browser environments, use [fetchRequestHandler](../README.md#const-fetchrequesthandler)
- For React Native and any other environment, use [xhrRequestHandler](../README.md#const-xhrrequesthandler)

___

### `Optional` requestTimeout

• **requestTimeout**? : *undefined | number*

*Defined in [packages/http/src/httpClient.ts:86](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L86)*

Standard timeout, triggered when server does not respond with headers within specified period of time.

**`default`** [DEFAULT_REQUEST_TIMEOUT_MS](../README.md#const-default_request_timeout_ms)
