# @coolio/http

## Index

### Enumerations

* [BodyCasing](enums/bodycasing.md)
* [ContentType](enums/contenttype.md)
* [HttpCode](enums/httpcode.md)
* [HttpMethod](enums/httpmethod.md)
* [ParsedBodyCacheState](enums/parsedbodycachestate.md)

### Classes

* [HttpClient](classes/httpclient.md)
* [HttpRequestError](classes/httprequesterror.md)
* [HttpResponseError](classes/httpresponseerror.md)
* [HttpResponseHeaders](classes/httpresponseheaders.md)

### Interfaces

* [BodyParserOptions](interfaces/bodyparseroptions.md)
* [BodySerializerOptions](interfaces/bodyserializeroptions.md)
* [CreateSimpleServerParams](interfaces/createsimpleserverparams.md)
* [Endpoint](interfaces/endpoint.md)
* [FetchRequestHandlerOptions](interfaces/fetchrequesthandleroptions.md)
* [HttpClientConfig](interfaces/httpclientconfig.md)
* [HttpInterceptorInterface](interfaces/httpinterceptorinterface.md)
* [HttpRequestHandlerOptions](interfaces/httprequesthandleroptions.md)
* [HttpRequestOptions](interfaces/httprequestoptions.md)
* [HttpResponse](interfaces/httpresponse.md)
* [HttpResponseOptions](interfaces/httpresponseoptions.md)
* [Log](interfaces/log.md)
* [LoggingInterceptorOptions](interfaces/logginginterceptoroptions.md)
* [MockOptions](interfaces/mockoptions.md)
* [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)
* [RawHttpResponse](interfaces/rawhttpresponse.md)
* [RedirectionInterceptorOptions](interfaces/redirectioninterceptoroptions.md)
* [SimpleEndpoint](interfaces/simpleendpoint.md)
* [SimpleServer](interfaces/simpleserver.md)

### Type aliases

* [BodyParser](README.md#bodyparser)
* [BodyParserImplementation](README.md#bodyparserimplementation)
* [BodySerializer](README.md#bodyserializer)
* [BufferEncoding](README.md#bufferencoding)
* [ContentTypeMap](README.md#contenttypemap)
* [HeadersProvider](README.md#headersprovider)
* [HttpBody](README.md#httpbody)
* [HttpFetch](README.md#httpfetch)
* [HttpHeaders](README.md#httpheaders)
* [HttpInterceptor](README.md#httpinterceptor)
* [HttpInterceptorFunction](README.md#httpinterceptorfunction)
* [HttpOptions](README.md#httpoptions)
* [HttpRequestHandler](README.md#httprequesthandler)
* [MockHttpRequestHandler](README.md#mockhttprequesthandler)
* [NormalizedHttpBody](README.md#normalizedhttpbody)
* [PromiseFunction](README.md#promisefunction)
* [RequestMode](README.md#requestmode)

### Variables

* [DEFAULT_REQUEST_TIMEOUT_MS](README.md#const-default_request_timeout_ms)
* [DONE](README.md#const-done)
* [HEADERS_RECEIVED](README.md#const-headers_received)
* [TypedArray](README.md#typedarray)
* [symbol](README.md#const-symbol)

### Functions

* [bodyParser](README.md#const-bodyparser)
* [bodySerializer](README.md#const-bodyserializer)
* [cacheParsedBody](README.md#const-cacheparsedbody)
* [createAsyncBodyHandler](README.md#const-createasyncbodyhandler)
* [createErrorInterceptor](README.md#const-createerrorinterceptor)
* [createHttpResponse](README.md#const-createhttpresponse)
* [createLoggingInterceptor](README.md#const-createlogginginterceptor)
* [createRedirectionInterceptor](README.md#const-createredirectioninterceptor)
* [createSimpleServer](README.md#const-createsimpleserver)
* [deepKeyMap](README.md#const-deepkeymap)
* [defaultHeaders](README.md#const-defaultheaders)
* [encodeArrayBuffer](README.md#const-encodearraybuffer)
* [encodeText](README.md#const-encodetext)
* [fetchRequestHandler](README.md#const-fetchrequesthandler)
* [getCaseConverter](README.md#const-getcaseconverter)
* [getEncodingFromHeaders](README.md#const-getencodingfromheaders)
* [getHeader](README.md#const-getheader)
* [getHostname](README.md#const-gethostname)
* [handleRequest](README.md#const-handlerequest)
* [httpRequestHandler](README.md#const-httprequesthandler)
* [isHttpInterceptorInterface](README.md#const-ishttpinterceptorinterface)
* [isHttpRequestError](README.md#const-ishttprequesterror)
* [isHttpResponseError](README.md#const-ishttpresponseerror)
* [mergeRequestOptions](README.md#const-mergerequestoptions)
* [mockRequestHandler](README.md#const-mockrequesthandler)
* [noConversion](README.md#const-noconversion)
* [parseHeaders](README.md#const-parseheaders)
* [passthroughParser](README.md#const-passthroughparser)
* [sanitizeHeaders](README.md#const-sanitizeheaders)
* [sleep](README.md#const-sleep)
* [splitWords](README.md#const-splitwords)
* [switchContentType](README.md#switchcontenttype)
* [toCamelCase](README.md#const-tocamelcase)
* [toKebabCase](README.md#const-tokebabcase)
* [toPascalCase](README.md#const-topascalcase)
* [toSnakeCase](README.md#const-tosnakecase)
* [toUrlEncoded](README.md#const-tourlencoded)
* [urlCombine](README.md#const-urlcombine)
* [urlDecode](README.md#const-urldecode)
* [urlDestruct](README.md#const-urldestruct)
* [urlEncode](README.md#const-urlencode)
* [useInterceptor](README.md#const-useinterceptor)
* [xhrRequestHandler](README.md#const-xhrrequesthandler)

### Object literals

* [ContentTypeRegex](README.md#const-contenttyperegex)
* [HttpClientHelper](README.md#const-httpclienthelper)
* [HttpStatusText](README.md#const-httpstatustext)
* [Interceptors](README.md#const-interceptors)

## Type aliases

###  BodyParser

Ƭ **BodyParser**: *function*

*Defined in [packages/http/src/httpClient.types.ts:23](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L23)*

#### Type declaration:

▸ (`response`: [RawHttpResponse](interfaces/rawhttpresponse.md)): *[HttpResponse](interfaces/httpresponse.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [RawHttpResponse](interfaces/rawhttpresponse.md) |

___

###  BodyParserImplementation

Ƭ **BodyParserImplementation**: *function*

*Defined in [packages/http/src/bodyParser.ts:6](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/bodyParser.ts#L6)*

#### Type declaration:

▸ (`rawResponse`: [RawHttpResponse](interfaces/rawhttpresponse.md)): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`rawResponse` | [RawHttpResponse](interfaces/rawhttpresponse.md) |

___

###  BodySerializer

Ƭ **BodySerializer**: *function*

*Defined in [packages/http/src/httpClient.types.ts:25](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L25)*

#### Type declaration:

▸ (`request`: [HttpOptions](README.md#httpoptions)): *[NormalizedHttpBody](README.md#normalizedhttpbody)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpOptions](README.md#httpoptions) |

___

###  BufferEncoding

Ƭ **BufferEncoding**: *"ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex"*

*Defined in [packages/http/src/helpers/encoder.helper.ts:5](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/encoder.helper.ts#L5)*

___

###  ContentTypeMap

Ƭ **ContentTypeMap**: *Record‹keyof typeof ContentTypeRegex, T›*

*Defined in [packages/http/src/contentType.ts:14](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/contentType.ts#L14)*

___

###  HeadersProvider

Ƭ **HeadersProvider**: *function*

*Defined in [packages/http/src/httpClient.ts:27](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L27)*

#### Type declaration:

▸ (`host`: string): *Promise‹[HttpHeaders](README.md#httpheaders)› | [HttpHeaders](README.md#httpheaders)*

**Parameters:**

Name | Type |
------ | ------ |
`host` | string |

___

###  HttpBody

Ƭ **HttpBody**: *object | [TypedArray](README.md#typedarray) | string*

*Defined in [packages/http/src/httpClient.types.ts:29](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L29)*

___

###  HttpFetch

Ƭ **HttpFetch**: *function*

*Defined in [packages/http/src/httpClient.types.ts:27](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L27)*

#### Type declaration:

▸ (): *Promise‹[HttpResponse](interfaces/httpresponse.md)‹Body››*

___

###  HttpHeaders

Ƭ **HttpHeaders**: *Record‹string, string | number | boolean | undefined | null›*

*Defined in [packages/http/src/httpClient.types.ts:31](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L31)*

___

###  HttpInterceptor

Ƭ **HttpInterceptor**: *[HttpInterceptorFunction](README.md#httpinterceptorfunction) | [HttpInterceptorInterface](interfaces/httpinterceptorinterface.md)*

*Defined in [packages/http/src/httpClient.types.ts:42](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L42)*

___

###  HttpInterceptorFunction

Ƭ **HttpInterceptorFunction**: *function*

*Defined in [packages/http/src/httpClient.types.ts:37](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L37)*

#### Type declaration:

▸ <**Body**>(`request`: [HttpFetch](README.md#httpfetch)‹Body›, `options`: [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)): *[HttpFetch](README.md#httpfetch)‹Body›*

**Type parameters:**

▪ **Body**

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpFetch](README.md#httpfetch)‹Body› |
`options` | [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md) |

___

###  HttpOptions

Ƭ **HttpOptions**: *Partial‹[HttpRequestOptions](interfaces/httprequestoptions.md)›*

*Defined in [packages/http/src/httpClient.types.ts:64](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L64)*

___

###  HttpRequestHandler

Ƭ **HttpRequestHandler**: *function*

*Defined in [packages/http/src/httpClient.types.ts:79](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L79)*

#### Type declaration:

▸ (`requestOptions`: [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)): *Promise‹[RawHttpResponse](interfaces/rawhttpresponse.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`requestOptions` | [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md) |

___

###  MockHttpRequestHandler

Ƭ **MockHttpRequestHandler**: *[HttpRequestHandler](README.md#httprequesthandler) & object*

*Defined in [packages/http/src/requestHandlers/mock.requestHandler.ts:36](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/mock.requestHandler.ts#L36)*

___

###  NormalizedHttpBody

Ƭ **NormalizedHttpBody**: *string | [TypedArray](README.md#typedarray) | undefined*

*Defined in [packages/http/src/httpClient.types.ts:66](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L66)*

___

###  PromiseFunction

Ƭ **PromiseFunction**: *function*

*Defined in [packages/http/src/helpers/parsedBodyCache.helper.ts:1](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/parsedBodyCache.helper.ts#L1)*

#### Type declaration:

▸ (): *Promise‹T›*

___

###  RequestMode

Ƭ **RequestMode**: *"navigate" | "same-origin" | "no-cors" | "cors"*

*Defined in [packages/http/src/httpClient.types.ts:52](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L52)*

## Variables

### `Const` DEFAULT_REQUEST_TIMEOUT_MS

• **DEFAULT_REQUEST_TIMEOUT_MS**: *number* = 5 * 60 * 1000

*Defined in [packages/http/src/httpClient.ts:25](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L25)*

Default request timeout - 5 minutes.

___

### `Const` DONE

• **DONE**: *4* = 4

*Defined in [packages/http/src/requestHandlers/xhr.requestHandler.ts:7](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/xhr.requestHandler.ts#L7)*

___

### `Const` HEADERS_RECEIVED

• **HEADERS_RECEIVED**: *2* = 2

*Defined in [packages/http/src/requestHandlers/xhr.requestHandler.ts:6](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/xhr.requestHandler.ts#L6)*

___

###  TypedArray

• **TypedArray**: *any*

*Defined in [packages/http/src/httpClient.types.ts:2](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.types.ts#L2)*

*Defined in [packages/http/src/helpers/encoder.helper.ts:1](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/encoder.helper.ts#L1)*

___

### `Const` symbol

• **symbol**: *unique symbol* = Symbol('HttpResponseError')

*Defined in [packages/http/src/httpRequestError.ts:3](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpRequestError.ts#L3)*

*Defined in [packages/http/src/httpResponseError.ts:4](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpResponseError.ts#L4)*

## Functions

### `Const` bodyParser

▸ **bodyParser**(`__namedParameters`: object): *(Anonymous function)*

*Defined in [packages/http/src/bodyParser.ts:13](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/bodyParser.ts#L13)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`bodyCasing` | undefined &#124; [CAMEL_CASE](enums/bodycasing.md#camel_case) &#124; [SNAKE_CASE](enums/bodycasing.md#snake_case) &#124; [PASCAL_CASE](enums/bodycasing.md#pascal_case) &#124; [KEBAB_CASE](enums/bodycasing.md#kebab_case) |
`defaultParser` |  |

**Returns:** *(Anonymous function)*

___

### `Const` bodySerializer

▸ **bodySerializer**(`__namedParameters`: object): *[BodySerializer](README.md#bodyserializer)*

*Defined in [packages/http/src/bodySerializer.ts:13](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/bodySerializer.ts#L13)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`bodyCasing` | undefined &#124; [CAMEL_CASE](enums/bodycasing.md#camel_case) &#124; [SNAKE_CASE](enums/bodycasing.md#snake_case) &#124; [PASCAL_CASE](enums/bodycasing.md#pascal_case) &#124; [KEBAB_CASE](enums/bodycasing.md#kebab_case) |

**Returns:** *[BodySerializer](README.md#bodyserializer)*

___

### `Const` cacheParsedBody

▸ **cacheParsedBody**<**T**>(`parsedBody`: [PromiseFunction](README.md#promisefunction)‹T›): *[PromiseFunction](README.md#promisefunction)‹T›*

*Defined in [packages/http/src/helpers/parsedBodyCache.helper.ts:9](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/parsedBodyCache.helper.ts#L9)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parsedBody` | [PromiseFunction](README.md#promisefunction)‹T› |

**Returns:** *[PromiseFunction](README.md#promisefunction)‹T›*

___

### `Const` createAsyncBodyHandler

▸ **createAsyncBodyHandler**<**T**>(): *object*

*Defined in [packages/http/src/requestHandlers/xhr.requestHandler.ts:9](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/xhr.requestHandler.ts#L9)*

**Type parameters:**

▪ **T**

**Returns:** *object*

* **call**(): *Promise‹T›*

* **onBodyFailure**(`failer`: function): *void*

* **onBodyReceived**(`getter`: function): *void*

___

### `Const` createErrorInterceptor

▸ **createErrorInterceptor**(): *[HttpInterceptorFunction](README.md#httpinterceptorfunction)*

*Defined in [packages/http/src/interceptors/errorInterceptor.ts:4](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/interceptors/errorInterceptor.ts#L4)*

**Returns:** *[HttpInterceptorFunction](README.md#httpinterceptorfunction)*

___

### `Const` createHttpResponse

▸ **createHttpResponse**(`__namedParameters`: object): *[HttpResponse](interfaces/httpresponse.md)*

*Defined in [packages/http/src/httpResponse.ts:14](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpResponse.ts#L14)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`body` | undefined &#124; string &#124; Uint8Array‹› &#124; Uint8ClampedArray‹› &#124; Uint16Array‹› &#124; Uint32Array‹› &#124; Int8Array‹› &#124; Int16Array‹› &#124; Int32Array‹› &#124; Float32Array‹› &#124; Float64Array‹› | - |
`headers` | undefined &#124; object | - |
`status` | number | - |
`url` | string | "" |

**Returns:** *[HttpResponse](interfaces/httpresponse.md)*

___

### `Const` createLoggingInterceptor

▸ **createLoggingInterceptor**(`__namedParameters`: object): *[HttpInterceptorFunction](README.md#httpinterceptorfunction)*

*Defined in [packages/http/src/interceptors/loggingInterceptor.ts:14](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/interceptors/loggingInterceptor.ts#L14)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`logger` | function |

**Returns:** *[HttpInterceptorFunction](README.md#httpinterceptorfunction)*

___

### `Const` createRedirectionInterceptor

▸ **createRedirectionInterceptor**(`__namedParameters`: object): *[HttpInterceptorFunction](README.md#httpinterceptorfunction)*

*Defined in [packages/http/src/interceptors/redirectionInterceptor.ts:8](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/interceptors/redirectionInterceptor.ts#L8)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`redirectionLimit` | number | 30 |

**Returns:** *[HttpInterceptorFunction](README.md#httpinterceptorfunction)*

___

### `Const` createSimpleServer

▸ **createSimpleServer**(`__namedParameters`: object): *[SimpleServer](interfaces/simpleserver.md)*

*Defined in [packages/http/src/testing/createSimpleServer.helper.ts:26](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/testing/createSimpleServer.helper.ts#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`endpoints` | [SimpleEndpoint](interfaces/simpleendpoint.md)[] |
`headers` | OutgoingHttpHeaders |
`status` | number |

**Returns:** *[SimpleServer](interfaces/simpleserver.md)*

___

### `Const` deepKeyMap

▸ **deepKeyMap**(`object`: any, `mapper`: function): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:15](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/caseConversion.helper.ts#L15)*

**Parameters:**

▪ **object**: *any*

▪ **mapper**: *function*

▸ (`key`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *any*

___

### `Const` defaultHeaders

▸ **defaultHeaders**(`_host`: string): *object*

*Defined in [packages/http/src/helpers/httpClient.helper.ts:4](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/httpClient.helper.ts#L4)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_host` | string | "" |

**Returns:** *object*

* **Accept**: *string* = "application/json,application/vnd.api+json"

* **Content-Type**: *[ContentType](enums/contenttype.md)* = ContentType.JSON

___

### `Const` encodeArrayBuffer

▸ **encodeArrayBuffer**(`data`: [TypedArray](README.md#typedarray) | string | undefined, `encoding`: [BufferEncoding](README.md#bufferencoding)): *Uint8Array‹›*

*Defined in [packages/http/src/helpers/encoder.helper.ts:31](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/encoder.helper.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | [TypedArray](README.md#typedarray) &#124; string &#124; undefined | "" |
`encoding` | [BufferEncoding](README.md#bufferencoding) | "utf8" |

**Returns:** *Uint8Array‹›*

___

### `Const` encodeText

▸ **encodeText**(`buffer`: ArrayBuffer, `encoding`: string): *string*

*Defined in [packages/http/src/helpers/encoder.helper.ts:36](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/encoder.helper.ts#L36)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`buffer` | ArrayBuffer | - |
`encoding` | string | "utf8" |

**Returns:** *string*

___

### `Const` fetchRequestHandler

▸ **fetchRequestHandler**(`fetchRequestHandlerOptions`: [FetchRequestHandlerOptions](interfaces/fetchrequesthandleroptions.md)): *[HttpRequestHandler](README.md#httprequesthandler)*

*Defined in [packages/http/src/requestHandlers/fetch.requestHandler.ts:17](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/fetch.requestHandler.ts#L17)*

Creates a new [HttpRequestHandler](README.md#httprequesthandler) that uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) underneath.
Does not support *timeout* property.
Abort is possible only after headers were received.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`fetchRequestHandlerOptions` | [FetchRequestHandlerOptions](interfaces/fetchrequesthandleroptions.md) | {} | default Fetch API options attached to all requests  |

**Returns:** *[HttpRequestHandler](README.md#httprequesthandler)*

___

### `Const` getCaseConverter

▸ **getCaseConverter**(`bodyCasing?`: [BodyCasing](enums/bodycasing.md)): *toCamelCase*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:51](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/caseConversion.helper.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`bodyCasing?` | [BodyCasing](enums/bodycasing.md) |

**Returns:** *toCamelCase*

___

### `Const` getEncodingFromHeaders

▸ **getEncodingFromHeaders**(`headers`: [HttpResponseHeaders](classes/httpresponseheaders.md) | undefined, `fallback`: string): *string*

*Defined in [packages/http/src/helpers/encoder.helper.ts:23](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/encoder.helper.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`headers` | [HttpResponseHeaders](classes/httpresponseheaders.md) &#124; undefined | - |
`fallback` | string | "utf8" |

**Returns:** *string*

___

### `Const` getHeader

▸ **getHeader**(`headers`: [HttpHeaders](README.md#httpheaders) | undefined, `header`: string): *string | undefined*

*Defined in [packages/http/src/helpers/headers.helper.ts:3](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/headers.helper.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [HttpHeaders](README.md#httpheaders) &#124; undefined |
`header` | string |

**Returns:** *string | undefined*

___

### `Const` getHostname

▸ **getHostname**(`url`: string): *string*

*Defined in [packages/http/src/helpers/httpClient.helper.ts:29](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/httpClient.helper.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *string*

___

### `Const` handleRequest

▸ **handleRequest**(`code`: number, `body`: any, `contentType`: string): *Promise‹[HttpResponse](interfaces/httpresponse.md)›*

*Defined in [packages/http/src/requestHandlers/mock.requestHandler.ts:8](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/mock.requestHandler.ts#L8)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`code` | number | - |
`body` | any | - |
`contentType` | string | ContentType.TEXT |

**Returns:** *Promise‹[HttpResponse](interfaces/httpresponse.md)›*

___

### `Const` httpRequestHandler

▸ **httpRequestHandler**(`requestHandlerOptions`: [HttpRequestHandlerOptions](interfaces/httprequesthandleroptions.md)): *[HttpRequestHandler](README.md#httprequesthandler)*

*Defined in [packages/http/src/requestHandlers/http.requestHandler.ts:19](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/http.requestHandler.ts#L19)*

Creates a new [HttpRequestHandler](README.md#httprequesthandler) that uses native Node.js [HTTP](https://nodejs.org/api/http.html) & [HTTPS](https://nodejs.org/api/https.html) modules underneath.
Does not support *mode* property.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`requestHandlerOptions` | [HttpRequestHandlerOptions](interfaces/httprequesthandleroptions.md) | {} | default native options attached to all requests  |

**Returns:** *[HttpRequestHandler](README.md#httprequesthandler)*

___

### `Const` isHttpInterceptorInterface

▸ **isHttpInterceptorInterface**(`interceptor`: [HttpInterceptor](README.md#httpinterceptor)): *interceptor is HttpInterceptorInterface*

*Defined in [packages/http/src/httpClient.ts:89](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`interceptor` | [HttpInterceptor](README.md#httpinterceptor) |

**Returns:** *interceptor is HttpInterceptorInterface*

___

### `Const` isHttpRequestError

▸ **isHttpRequestError**(`error`: any): *error is HttpRequestError*

*Defined in [packages/http/src/httpRequestError.ts:14](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpRequestError.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *error is HttpRequestError*

___

### `Const` isHttpResponseError

▸ **isHttpResponseError**(`error`: any): *error is HttpResponseError*

*Defined in [packages/http/src/httpResponseError.ts:17](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpResponseError.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *error is HttpResponseError*

___

### `Const` mergeRequestOptions

▸ **mergeRequestOptions**(`defaultRequestOptions`: RequestInit | undefined, `requestOptions`: [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)): *RequestInit & [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)*

*Defined in [packages/http/src/requestHandlers/fetch.requestHandler.ts:62](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/fetch.requestHandler.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultRequestOptions` | RequestInit &#124; undefined |
`requestOptions` | [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md) |

**Returns:** *RequestInit & [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)*

___

### `Const` mockRequestHandler

▸ **mockRequestHandler**(`mockOptions`: [MockOptions](interfaces/mockoptions.md)): *[MockHttpRequestHandler](README.md#mockhttprequesthandler)*

*Defined in [packages/http/src/requestHandlers/mock.requestHandler.ts:40](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/mock.requestHandler.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`mockOptions` | [MockOptions](interfaces/mockoptions.md) |

**Returns:** *[MockHttpRequestHandler](README.md#mockhttprequesthandler)*

___

### `Const` noConversion

▸ **noConversion**(`object`: any): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:49](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/caseConversion.helper.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` parseHeaders

▸ **parseHeaders**(`headers`: Headers): *Record‹string, string›*

*Defined in [packages/http/src/helpers/headers.helper.ts:12](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/headers.helper.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | Headers |

**Returns:** *Record‹string, string›*

___

### `Const` passthroughParser

▸ **passthroughParser**(`response`: [RawHttpResponse](interfaces/rawhttpresponse.md)): *object*

*Defined in [packages/http/src/httpClient.ts:104](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [RawHttpResponse](interfaces/rawhttpresponse.md) |

**Returns:** *object*

* **parsedBody**: *any* = (response as any).parsedBody || (() => response.arrayBuffer())

___

### `Const` sanitizeHeaders

▸ **sanitizeHeaders**(`headers`: Record‹string, any›): *Record‹string, string›*

*Defined in [packages/http/src/helpers/httpClient.helper.ts:19](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/httpClient.helper.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | Record‹string, any› |

**Returns:** *Record‹string, string›*

___

### `Const` sleep

▸ **sleep**(`ms`: number): *Promise‹unknown›*

*Defined in [packages/http/src/helpers/sleep.helper.ts:1](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/sleep.helper.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *Promise‹unknown›*

___

### `Const` splitWords

▸ **splitWords**(`text`: string): *string[]*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:11](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/caseConversion.helper.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *string[]*

___

###  switchContentType

▸ **switchContentType**<**T**>(`contentType`: string, `map`: [ContentTypeMap](README.md#contenttypemap)‹T›, `defaultResult`: T): *T*

*Defined in [packages/http/src/contentType.ts:16](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/contentType.ts#L16)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string |
`map` | [ContentTypeMap](README.md#contenttypemap)‹T› |
`defaultResult` | T |

**Returns:** *T*

▸ **switchContentType**<**T**>(`contentType`: string, `map`: [ContentTypeMap](README.md#contenttypemap)‹T›): *T | undefined*

*Defined in [packages/http/src/contentType.ts:17](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/contentType.ts#L17)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string |
`map` | [ContentTypeMap](README.md#contenttypemap)‹T› |

**Returns:** *T | undefined*

___

### `Const` toCamelCase

▸ **toCamelCase**(`object`: any): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:31](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/caseConversion.helper.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toKebabCase

▸ **toKebabCase**(`object`: any): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:45](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/caseConversion.helper.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toPascalCase

▸ **toPascalCase**(`object`: any): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:37](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/caseConversion.helper.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toSnakeCase

▸ **toSnakeCase**(`object`: any): *any*

*Defined in [packages/http/src/helpers/caseConversion.helper.ts:41](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/caseConversion.helper.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toUrlEncoded

▸ **toUrlEncoded**(`obj`: object): *string*

*Defined in [packages/http/src/helpers/httpClient.helper.ts:9](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/httpClient.helper.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | object |

**Returns:** *string*

___

### `Const` urlCombine

▸ **urlCombine**(`sourceUrl`: string, `sourceQuery?`: undefined | object, `options?`: qs.IStringifyOptions): *string*

*Defined in [packages/http/src/helpers/urlEncoding.helper.ts:15](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/urlEncoding.helper.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`sourceUrl` | string |
`sourceQuery?` | undefined &#124; object |
`options?` | qs.IStringifyOptions |

**Returns:** *string*

___

### `Const` urlDecode

▸ **urlDecode**<**T**>(`value`: string, `options?`: qs.IParseOptions): *T*

*Defined in [packages/http/src/helpers/urlEncoding.helper.ts:28](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/urlEncoding.helper.ts#L28)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`options?` | qs.IParseOptions |

**Returns:** *T*

___

### `Const` urlDestruct

▸ **urlDestruct**(`url`: string, `options?`: qs.IParseOptions): *object*

*Defined in [packages/http/src/helpers/urlEncoding.helper.ts:4](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/urlEncoding.helper.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options?` | qs.IParseOptions |

**Returns:** *object*

* **query**: *any*

* **url**: *string*

___

### `Const` urlEncode

▸ **urlEncode**(`value`: any, `options?`: qs.IStringifyOptions): *string*

*Defined in [packages/http/src/helpers/urlEncoding.helper.ts:24](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/urlEncoding.helper.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`options?` | qs.IStringifyOptions |

**Returns:** *string*

___

### `Const` useInterceptor

▸ **useInterceptor**(`normalizedOptions`: [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)): *(Anonymous function)*

*Defined in [packages/http/src/httpClient.ts:94](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpClient.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`normalizedOptions` | [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md) |

**Returns:** *(Anonymous function)*

___

### `Const` xhrRequestHandler

▸ **xhrRequestHandler**(): *[HttpRequestHandler](README.md#httprequesthandler)*

*Defined in [packages/http/src/requestHandlers/xhr.requestHandler.ts:51](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/xhr.requestHandler.ts#L51)*

**Returns:** *[HttpRequestHandler](README.md#httprequesthandler)*

## Object literals

### `Const` ContentTypeRegex

### ▪ **ContentTypeRegex**: *object*

*Defined in [packages/http/src/contentType.ts:8](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/contentType.ts#L8)*

###  JSON

• **JSON**: *RegExp‹›* = /^application\/(json|.+\+json)$/

*Defined in [packages/http/src/contentType.ts:10](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/contentType.ts#L10)*

###  TEXT

• **TEXT**: *RegExp‹›* = /^text\//

*Defined in [packages/http/src/contentType.ts:9](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/contentType.ts#L9)*

###  URL_ENCODED

• **URL_ENCODED**: *RegExp‹›* = /^application\/x-www-form-urlencoded$/

*Defined in [packages/http/src/contentType.ts:11](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/contentType.ts#L11)*

___

### `Const` HttpClientHelper

### ▪ **HttpClientHelper**: *object*

*Defined in [packages/http/src/helpers/httpClient.helper.ts:34](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/httpClient.helper.ts#L34)*

###  defaultHeaders

• **defaultHeaders**: *[defaultHeaders](README.md#const-defaultheaders)*

*Defined in [packages/http/src/helpers/httpClient.helper.ts:35](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/httpClient.helper.ts#L35)*

###  getHostname

• **getHostname**: *getHostname*

*Defined in [packages/http/src/helpers/httpClient.helper.ts:38](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/httpClient.helper.ts#L38)*

###  sanitizeHeaders

• **sanitizeHeaders**: *[sanitizeHeaders](README.md#const-sanitizeheaders)*

*Defined in [packages/http/src/helpers/httpClient.helper.ts:37](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/httpClient.helper.ts#L37)*

###  toUrlEncoded

• **toUrlEncoded**: *[toUrlEncoded](README.md#const-tourlencoded)*

*Defined in [packages/http/src/helpers/httpClient.helper.ts:36](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/helpers/httpClient.helper.ts#L36)*

___

### `Const` HttpStatusText

### ▪ **HttpStatusText**: *object*

*Defined in [packages/http/src/httpCodes.ts:52](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L52)*

###  __computed

• **__computed**: *string* = "Network Authentication Required"

*Defined in [packages/http/src/httpCodes.ts:53](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L53)*

*Defined in [packages/http/src/httpCodes.ts:54](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L54)*

*Defined in [packages/http/src/httpCodes.ts:55](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L55)*

*Defined in [packages/http/src/httpCodes.ts:56](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L56)*

*Defined in [packages/http/src/httpCodes.ts:57](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L57)*

*Defined in [packages/http/src/httpCodes.ts:58](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L58)*

*Defined in [packages/http/src/httpCodes.ts:59](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L59)*

*Defined in [packages/http/src/httpCodes.ts:60](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L60)*

*Defined in [packages/http/src/httpCodes.ts:61](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L61)*

*Defined in [packages/http/src/httpCodes.ts:62](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L62)*

*Defined in [packages/http/src/httpCodes.ts:63](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L63)*

*Defined in [packages/http/src/httpCodes.ts:64](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L64)*

*Defined in [packages/http/src/httpCodes.ts:65](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L65)*

*Defined in [packages/http/src/httpCodes.ts:66](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L66)*

*Defined in [packages/http/src/httpCodes.ts:67](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L67)*

*Defined in [packages/http/src/httpCodes.ts:68](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L68)*

*Defined in [packages/http/src/httpCodes.ts:69](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L69)*

*Defined in [packages/http/src/httpCodes.ts:70](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L70)*

*Defined in [packages/http/src/httpCodes.ts:71](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L71)*

*Defined in [packages/http/src/httpCodes.ts:72](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L72)*

*Defined in [packages/http/src/httpCodes.ts:73](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L73)*

*Defined in [packages/http/src/httpCodes.ts:74](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L74)*

*Defined in [packages/http/src/httpCodes.ts:75](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L75)*

*Defined in [packages/http/src/httpCodes.ts:76](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L76)*

*Defined in [packages/http/src/httpCodes.ts:77](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L77)*

*Defined in [packages/http/src/httpCodes.ts:78](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L78)*

*Defined in [packages/http/src/httpCodes.ts:79](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L79)*

*Defined in [packages/http/src/httpCodes.ts:80](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L80)*

*Defined in [packages/http/src/httpCodes.ts:81](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L81)*

*Defined in [packages/http/src/httpCodes.ts:82](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L82)*

*Defined in [packages/http/src/httpCodes.ts:83](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L83)*

*Defined in [packages/http/src/httpCodes.ts:84](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L84)*

*Defined in [packages/http/src/httpCodes.ts:85](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L85)*

*Defined in [packages/http/src/httpCodes.ts:86](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L86)*

*Defined in [packages/http/src/httpCodes.ts:87](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L87)*

*Defined in [packages/http/src/httpCodes.ts:88](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L88)*

*Defined in [packages/http/src/httpCodes.ts:89](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L89)*

*Defined in [packages/http/src/httpCodes.ts:90](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L90)*

*Defined in [packages/http/src/httpCodes.ts:91](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L91)*

*Defined in [packages/http/src/httpCodes.ts:92](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L92)*

*Defined in [packages/http/src/httpCodes.ts:93](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L93)*

*Defined in [packages/http/src/httpCodes.ts:94](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L94)*

*Defined in [packages/http/src/httpCodes.ts:95](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L95)*

*Defined in [packages/http/src/httpCodes.ts:96](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L96)*

*Defined in [packages/http/src/httpCodes.ts:97](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L97)*

*Defined in [packages/http/src/httpCodes.ts:98](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L98)*

*Defined in [packages/http/src/httpCodes.ts:99](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L99)*

*Defined in [packages/http/src/httpCodes.ts:100](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/httpCodes.ts#L100)*

___

### `Const` Interceptors

### ▪ **Interceptors**: *object*

*Defined in [packages/http/src/interceptors/index.ts:5](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/interceptors/index.ts#L5)*

###  createErrorInterceptor

• **createErrorInterceptor**: *createErrorInterceptor*

*Defined in [packages/http/src/interceptors/index.ts:6](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/interceptors/index.ts#L6)*

###  createLoggingInterceptor

• **createLoggingInterceptor**: *createLoggingInterceptor*

*Defined in [packages/http/src/interceptors/index.ts:7](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/interceptors/index.ts#L7)*

###  createRedirectionInterceptor

• **createRedirectionInterceptor**: *createRedirectionInterceptor*

*Defined in [packages/http/src/interceptors/index.ts:8](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/interceptors/index.ts#L8)*
