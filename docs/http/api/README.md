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
* [SimpleServer](interfaces/simpleserver.md)
* [XhrRequestHandlerOptions](interfaces/xhrrequesthandleroptions.md)

### Type aliases

* [BodyParser](README.md#bodyparser)
* [BodyParserImplementation](README.md#bodyparserimplementation)
* [BodySerializer](README.md#bodyserializer)
* [BufferEncoding](README.md#bufferencoding)
* [ContentTypeMap](README.md#contenttypemap)
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
* [createFormData](README.md#const-createformdata)
* [createFormDataImpl](README.md#const-createformdataimpl)
* [createHttpResponse](README.md#const-createhttpresponse)
* [createLoggingInterceptor](README.md#const-createlogginginterceptor)
* [createRedirectionInterceptor](README.md#const-createredirectioninterceptor)
* [createSimpleServer](README.md#const-createsimpleserver)
* [deepKeyMap](README.md#const-deepkeymap)
* [defaultHeaders](README.md#const-defaultheaders)
* [encodeArrayBuffer](README.md#const-encodearraybuffer)
* [encodeText](README.md#const-encodetext)
* [fetchRequestHandler](README.md#const-fetchrequesthandler)
* [getBoundaryFromContentTypeHeader](README.md#const-getboundaryfromcontenttypeheader)
* [getCaseConverter](README.md#const-getcaseconverter)
* [getEncodingFromHeaders](README.md#const-getencodingfromheaders)
* [getHeader](README.md#const-getheader)
* [getHostname](README.md#const-gethostname)
* [handleRequest](README.md#const-handlerequest)
* [httpRequestHandler](README.md#const-httprequesthandler)
* [isFormData](README.md#const-isformdata)
* [isHttpInterceptorInterface](README.md#const-ishttpinterceptorinterface)
* [isHttpRequestError](README.md#const-ishttprequesterror)
* [isHttpResponseError](README.md#const-ishttpresponseerror)
* [mockRequestHandler](README.md#const-mockrequesthandler)
* [noConversion](README.md#const-noconversion)
* [parseHeaders](README.md#const-parseheaders)
* [passthroughParser](README.md#const-passthroughparser)
* [processMultipartBody](README.md#const-processmultipartbody)
* [readBlob](README.md#const-readblob)
* [sanitizeHeaders](README.md#const-sanitizeheaders)
* [sleep](README.md#const-sleep)
* [splitWords](README.md#const-splitwords)
* [switchContentType](README.md#switchcontenttype)
* [toCamelCase](README.md#const-tocamelcase)
* [toKebabCase](README.md#const-tokebabcase)
* [toPascalCase](README.md#const-topascalcase)
* [toScreamingSnakeCase](README.md#const-toscreamingsnakecase)
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

#### Type declaration:

▸ (`response`: [RawHttpResponse](interfaces/rawhttpresponse.md)): *[HttpResponse](interfaces/httpresponse.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [RawHttpResponse](interfaces/rawhttpresponse.md) |

___

###  BodyParserImplementation

Ƭ **BodyParserImplementation**: *function*

#### Type declaration:

▸ (`rawResponse`: [RawHttpResponse](interfaces/rawhttpresponse.md)): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`rawResponse` | [RawHttpResponse](interfaces/rawhttpresponse.md) |

___

###  BodySerializer

Ƭ **BodySerializer**: *function*

#### Type declaration:

▸ (`request`: [HttpOptions](README.md#httpoptions)): *[NormalizedHttpBody](README.md#normalizedhttpbody)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpOptions](README.md#httpoptions) |

___

###  BufferEncoding

Ƭ **BufferEncoding**: *"ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex"*

___

###  ContentTypeMap

Ƭ **ContentTypeMap**: *Record‹keyof typeof ContentTypeRegex, T›*

___

###  HttpBody

Ƭ **HttpBody**: *object | [TypedArray](README.md#typedarray) | string*

___

###  HttpFetch

Ƭ **HttpFetch**: *function*

#### Type declaration:

▸ (): *Promise‹[HttpResponse](interfaces/httpresponse.md)‹Body››*

___

###  HttpHeaders

Ƭ **HttpHeaders**: *Record‹string, string | number | boolean | undefined | null›*

___

###  HttpInterceptor

Ƭ **HttpInterceptor**: *[HttpInterceptorFunction](README.md#httpinterceptorfunction) | [HttpInterceptorInterface](interfaces/httpinterceptorinterface.md)*

___

###  HttpInterceptorFunction

Ƭ **HttpInterceptorFunction**: *function*

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

___

###  HttpRequestHandler

Ƭ **HttpRequestHandler**: *function*

#### Type declaration:

▸ (`requestOptions`: [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)): *Promise‹[RawHttpResponse](interfaces/rawhttpresponse.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`requestOptions` | [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md) |

___

###  MockHttpRequestHandler

Ƭ **MockHttpRequestHandler**: *[HttpRequestHandler](README.md#httprequesthandler) & object*

___

###  NormalizedHttpBody

Ƭ **NormalizedHttpBody**: *[TypedArray](README.md#typedarray) | string | undefined*

___

###  PromiseFunction

Ƭ **PromiseFunction**: *function*

#### Type declaration:

▸ (): *Promise‹T›*

___

###  RequestMode

Ƭ **RequestMode**: *"navigate" | "same-origin" | "no-cors" | "cors"*

## Variables

### `Const` DEFAULT_REQUEST_TIMEOUT_MS

• **DEFAULT_REQUEST_TIMEOUT_MS**: *number* = 5 * 60 * 1000

Default request timeout - 5 minutes.

___

### `Const` DONE

• **DONE**: *4* = 4

___

### `Const` HEADERS_RECEIVED

• **HEADERS_RECEIVED**: *2* = 2

___

###  TypedArray

• **TypedArray**: *any*

___

### `Const` symbol

• **symbol**: *unique symbol* = Symbol('HttpResponseError')

## Functions

### `Const` bodyParser

▸ **bodyParser**(`__namedParameters`: object): *(Anonymous function)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`bodyCasing` | undefined &#124; [CAMEL_CASE](enums/bodycasing.md#camel_case) &#124; [SNAKE_CASE](enums/bodycasing.md#snake_case) &#124; [SCREAMING_SNAKE_CASE](enums/bodycasing.md#screaming_snake_case) &#124; [PASCAL_CASE](enums/bodycasing.md#pascal_case) &#124; [KEBAB_CASE](enums/bodycasing.md#kebab_case) |
`defaultParser` |  |

**Returns:** *(Anonymous function)*

___

### `Const` bodySerializer

▸ **bodySerializer**(`__namedParameters`: object): *[BodySerializer](README.md#bodyserializer)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`bodyCasing` | undefined &#124; [CAMEL_CASE](enums/bodycasing.md#camel_case) &#124; [SNAKE_CASE](enums/bodycasing.md#snake_case) &#124; [SCREAMING_SNAKE_CASE](enums/bodycasing.md#screaming_snake_case) &#124; [PASCAL_CASE](enums/bodycasing.md#pascal_case) &#124; [KEBAB_CASE](enums/bodycasing.md#kebab_case) |

**Returns:** *[BodySerializer](README.md#bodyserializer)*

___

### `Const` cacheParsedBody

▸ **cacheParsedBody**<**T**>(`parsedBody`: [PromiseFunction](README.md#promisefunction)‹T›): *[PromiseFunction](README.md#promisefunction)‹T›*

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

**Type parameters:**

▪ **T**

**Returns:** *object*

* **call**(): *Promise‹T›*

* **onBodyFailure**(`failer`: function): *void*

* **onBodyReceived**(`getter`: function): *void*

___

### `Const` createErrorInterceptor

▸ **createErrorInterceptor**(): *[HttpInterceptorFunction](README.md#httpinterceptorfunction)*

**Returns:** *[HttpInterceptorFunction](README.md#httpinterceptorfunction)*

___

### `Const` createFormData

▸ **createFormData**(`body`: object): *FormData*

**Parameters:**

Name | Type |
------ | ------ |
`body` | object |

**Returns:** *FormData*

___

### `Const` createFormDataImpl

▸ **createFormDataImpl**(`object`: object, `form`: FormData, `namespace?`: undefined | string): *FormData*

**Parameters:**

Name | Type |
------ | ------ |
`object` | object |
`form` | FormData |
`namespace?` | undefined &#124; string |

**Returns:** *FormData*

___

### `Const` createHttpResponse

▸ **createHttpResponse**(`__namedParameters`: object): *[HttpResponse](interfaces/httpresponse.md)*

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

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`logger` | function |

**Returns:** *[HttpInterceptorFunction](README.md#httpinterceptorfunction)*

___

### `Const` createRedirectionInterceptor

▸ **createRedirectionInterceptor**(`__namedParameters`: object): *[HttpInterceptorFunction](README.md#httpinterceptorfunction)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`redirectionLimit` | number | 30 |

**Returns:** *[HttpInterceptorFunction](README.md#httpinterceptorfunction)*

___

### `Const` createSimpleServer

▸ **createSimpleServer**(): *[SimpleServer](interfaces/simpleserver.md)*

**Returns:** *[SimpleServer](interfaces/simpleserver.md)*

___

### `Const` deepKeyMap

▸ **deepKeyMap**(`object`: any, `mapper`: function): *any*

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

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | [TypedArray](README.md#typedarray) &#124; string &#124; undefined | "" |
`encoding` | [BufferEncoding](README.md#bufferencoding) | "utf8" |

**Returns:** *Uint8Array‹›*

___

### `Const` encodeText

▸ **encodeText**(`buffer`: ArrayBuffer, `encoding`: string): *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`buffer` | ArrayBuffer | - |
`encoding` | string | "utf8" |

**Returns:** *string*

___

### `Const` fetchRequestHandler

▸ **fetchRequestHandler**(`fetchRequestHandlerOptions`: [FetchRequestHandlerOptions](interfaces/fetchrequesthandleroptions.md)): *[HttpRequestHandler](README.md#httprequesthandler)*

Creates a new [HttpRequestHandler](README.md#httprequesthandler) that uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) underneath.
Does not support *timeout* property.
Abort is possible only after headers were received.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`fetchRequestHandlerOptions` | [FetchRequestHandlerOptions](interfaces/fetchrequesthandleroptions.md) | {} | default Fetch API options attached to all requests  |

**Returns:** *[HttpRequestHandler](README.md#httprequesthandler)*

___

### `Const` getBoundaryFromContentTypeHeader

▸ **getBoundaryFromContentTypeHeader**(`header`: string[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`header` | string[] |

**Returns:** *string*

___

### `Const` getCaseConverter

▸ **getCaseConverter**(`bodyCasing?`: [BodyCasing](enums/bodycasing.md)): *toCamelCase*

**Parameters:**

Name | Type |
------ | ------ |
`bodyCasing?` | [BodyCasing](enums/bodycasing.md) |

**Returns:** *toCamelCase*

___

### `Const` getEncodingFromHeaders

▸ **getEncodingFromHeaders**(`headers`: [HttpResponseHeaders](classes/httpresponseheaders.md) | undefined, `fallback`: string): *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`headers` | [HttpResponseHeaders](classes/httpresponseheaders.md) &#124; undefined | - |
`fallback` | string | "utf8" |

**Returns:** *string*

___

### `Const` getHeader

▸ **getHeader**(`headers`: [HttpHeaders](README.md#httpheaders) | undefined, `header`: string): *string | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [HttpHeaders](README.md#httpheaders) &#124; undefined |
`header` | string |

**Returns:** *string | undefined*

___

### `Const` getHostname

▸ **getHostname**(`url`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *string*

___

### `Const` handleRequest

▸ **handleRequest**(`code`: number, `body`: any, `contentType`: string): *Promise‹[HttpResponse](interfaces/httpresponse.md)›*

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

Creates a new [HttpRequestHandler](README.md#httprequesthandler) that uses native Node.js [HTTP](https://nodejs.org/api/http.html) & [HTTPS](https://nodejs.org/api/https.html) modules underneath.
Does not support *mode* property.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`requestHandlerOptions` | [HttpRequestHandlerOptions](interfaces/httprequesthandleroptions.md) | {} | default native options attached to all requests  |

**Returns:** *[HttpRequestHandler](README.md#httprequesthandler)*

___

### `Const` isFormData

▸ **isFormData**(`object`: any): *object is FormData*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is FormData*

___

### `Const` isHttpInterceptorInterface

▸ **isHttpInterceptorInterface**(`interceptor`: [HttpInterceptor](README.md#httpinterceptor)): *interceptor is HttpInterceptorInterface*

**Parameters:**

Name | Type |
------ | ------ |
`interceptor` | [HttpInterceptor](README.md#httpinterceptor) |

**Returns:** *interceptor is HttpInterceptorInterface*

___

### `Const` isHttpRequestError

▸ **isHttpRequestError**(`error`: any): *error is HttpRequestError*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *error is HttpRequestError*

___

### `Const` isHttpResponseError

▸ **isHttpResponseError**(`error`: any): *error is HttpResponseError*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *error is HttpResponseError*

___

### `Const` mockRequestHandler

▸ **mockRequestHandler**(`mockOptions`: [MockOptions](interfaces/mockoptions.md)): *[MockHttpRequestHandler](README.md#mockhttprequesthandler)*

**Parameters:**

Name | Type |
------ | ------ |
`mockOptions` | [MockOptions](interfaces/mockoptions.md) |

**Returns:** *[MockHttpRequestHandler](README.md#mockhttprequesthandler)*

___

### `Const` noConversion

▸ **noConversion**(`object`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` parseHeaders

▸ **parseHeaders**(`headers`: Headers): *Record‹string, string›*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | Headers |

**Returns:** *Record‹string, string›*

___

### `Const` passthroughParser

▸ **passthroughParser**(`response`: [RawHttpResponse](interfaces/rawhttpresponse.md)): *object*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [RawHttpResponse](interfaces/rawhttpresponse.md) |

**Returns:** *object*

* **parsedBody**: *any* = (response as any).parsedBody || (() => response.arrayBuffer())

___

### `Const` processMultipartBody

▸ **processMultipartBody**(`body`: string, `boundary`: string): *never*

**Parameters:**

Name | Type |
------ | ------ |
`body` | string |
`boundary` | string |

**Returns:** *never*

___

### `Const` readBlob

▸ **readBlob**(`blob`: Blob): *Promise‹ArrayBuffer›*

**Parameters:**

Name | Type |
------ | ------ |
`blob` | Blob |

**Returns:** *Promise‹ArrayBuffer›*

___

### `Const` sanitizeHeaders

▸ **sanitizeHeaders**(...`multipleHeaders`: undefined | object[]): *Record‹string, string›*

**Parameters:**

Name | Type |
------ | ------ |
`...multipleHeaders` | undefined &#124; object[] |

**Returns:** *Record‹string, string›*

___

### `Const` sleep

▸ **sleep**(`ms`: number): *Promise‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *Promise‹unknown›*

___

### `Const` splitWords

▸ **splitWords**(`text`: string): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *string[]*

___

###  switchContentType

▸ **switchContentType**<**T**>(`contentType`: string, `map`: [ContentTypeMap](README.md#contenttypemap)‹T›, `defaultResult`: T): *T*

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

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toKebabCase

▸ **toKebabCase**(`object`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toPascalCase

▸ **toPascalCase**(`object`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toScreamingSnakeCase

▸ **toScreamingSnakeCase**(`object`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toSnakeCase

▸ **toSnakeCase**(`object`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

### `Const` toUrlEncoded

▸ **toUrlEncoded**(`obj`: object): *string*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | object |

**Returns:** *string*

___

### `Const` urlCombine

▸ **urlCombine**(`sourceUrl`: string, `sourceQuery?`: undefined | object, `options?`: qs.IStringifyOptions): *string*

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

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`options?` | qs.IStringifyOptions |

**Returns:** *string*

___

### `Const` useInterceptor

▸ **useInterceptor**(`normalizedOptions`: [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`normalizedOptions` | [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md) |

**Returns:** *(Anonymous function)*

___

### `Const` xhrRequestHandler

▸ **xhrRequestHandler**(`_?`: [XhrRequestHandlerOptions](interfaces/xhrrequesthandleroptions.md)): *[HttpRequestHandler](README.md#httprequesthandler)*

**Parameters:**

Name | Type |
------ | ------ |
`_?` | [XhrRequestHandlerOptions](interfaces/xhrrequesthandleroptions.md) |

**Returns:** *[HttpRequestHandler](README.md#httprequesthandler)*

## Object literals

### `Const` ContentTypeRegex

### ▪ **ContentTypeRegex**: *object*

###  JSON

• **JSON**: *RegExp‹›* = /^application\/(json|.+\+json)$/

###  MULTIPART

• **MULTIPART**: *RegExp‹›* = /^multipart\//

###  TEXT

• **TEXT**: *RegExp‹›* = /^text\//

###  URL_ENCODED

• **URL_ENCODED**: *RegExp‹›* = /^application\/x-www-form-urlencoded$/

___

### `Const` HttpClientHelper

### ▪ **HttpClientHelper**: *object*

###  defaultHeaders

• **defaultHeaders**: *[defaultHeaders](README.md#const-defaultheaders)*

###  getHostname

• **getHostname**: *getHostname*

###  toUrlEncoded

• **toUrlEncoded**: *[toUrlEncoded](README.md#const-tourlencoded)*

___

### `Const` HttpStatusText

### ▪ **HttpStatusText**: *object*

###  __computed

• **__computed**: *string* = "Network Authentication Required"

___

### `Const` Interceptors

### ▪ **Interceptors**: *object*

###  createErrorInterceptor

• **createErrorInterceptor**: *createErrorInterceptor*

###  createLoggingInterceptor

• **createLoggingInterceptor**: *createLoggingInterceptor*

###  createRedirectionInterceptor

• **createRedirectionInterceptor**: *createRedirectionInterceptor*
