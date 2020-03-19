# API

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

* [BodyParser](./#bodyparser)
* [BodyParserImplementation](./#bodyparserimplementation)
* [BodySerializer](./#bodyserializer)
* [BufferEncoding](./#bufferencoding)
* [ContentTypeMap](./#contenttypemap)
* [HttpBody](./#httpbody)
* [HttpFetch](./#httpfetch)
* [HttpHeaders](./#httpheaders)
* [HttpInterceptor](./#httpinterceptor)
* [HttpInterceptorFunction](./#httpinterceptorfunction)
* [HttpOptions](./#httpoptions)
* [HttpRequestHandler](./#httprequesthandler)
* [MockHttpRequestHandler](./#mockhttprequesthandler)
* [NormalizedHttpBody](./#normalizedhttpbody)
* [PromiseFunction](./#promisefunction)
* [RequestMode](./#requestmode)

### Variables

* [DEFAULT\_REQUEST\_TIMEOUT\_MS](./#const-default_request_timeout_ms)
* [DONE](./#const-done)
* [HEADERS\_RECEIVED](./#const-headers_received)
* [TypedArray](./#typedarray)
* [symbol](./#const-symbol)

### Functions

* [bodyParser](./#const-bodyparser)
* [bodySerializer](./#const-bodyserializer)
* [cacheParsedBody](./#const-cacheparsedbody)
* [createAsyncBodyHandler](./#const-createasyncbodyhandler)
* [createErrorInterceptor](./#const-createerrorinterceptor)
* [createFormData](./#const-createformdata)
* [createFormDataImpl](./#const-createformdataimpl)
* [createHttpResponse](./#const-createhttpresponse)
* [createLoggingInterceptor](./#const-createlogginginterceptor)
* [createRedirectionInterceptor](./#const-createredirectioninterceptor)
* [createSimpleServer](./#const-createsimpleserver)
* [deepKeyMap](./#const-deepkeymap)
* [defaultHeaders](./#const-defaultheaders)
* [encodeArrayBuffer](./#const-encodearraybuffer)
* [encodeText](./#const-encodetext)
* [fetchRequestHandler](./#const-fetchrequesthandler)
* [getBoundaryFromContentTypeHeader](./#const-getboundaryfromcontenttypeheader)
* [getCaseConverter](./#const-getcaseconverter)
* [getEncodingFromHeaders](./#const-getencodingfromheaders)
* [getHeader](./#const-getheader)
* [getHostname](./#const-gethostname)
* [handleRequest](./#const-handlerequest)
* [httpRequestHandler](./#const-httprequesthandler)
* [isFormData](./#const-isformdata)
* [isHttpInterceptorInterface](./#const-ishttpinterceptorinterface)
* [isHttpRequestError](./#const-ishttprequesterror)
* [isHttpResponseError](./#const-ishttpresponseerror)
* [mockRequestHandler](./#const-mockrequesthandler)
* [noConversion](./#const-noconversion)
* [parseHeaders](./#const-parseheaders)
* [passthroughParser](./#const-passthroughparser)
* [processMultipartBody](./#const-processmultipartbody)
* [readBlob](./#const-readblob)
* [sanitizeHeaders](./#const-sanitizeheaders)
* [sleep](./#const-sleep)
* [splitWords](./#const-splitwords)
* [switchContentType](./#switchcontenttype)
* [toCamelCase](./#const-tocamelcase)
* [toKebabCase](./#const-tokebabcase)
* [toPascalCase](./#const-topascalcase)
* [toScreamingSnakeCase](./#const-toscreamingsnakecase)
* [toSnakeCase](./#const-tosnakecase)
* [toUrlEncoded](./#const-tourlencoded)
* [urlCombine](./#const-urlcombine)
* [urlDecode](./#const-urldecode)
* [urlDestruct](./#const-urldestruct)
* [urlEncode](./#const-urlencode)
* [useInterceptor](./#const-useinterceptor)
* [xhrRequestHandler](./#const-xhrrequesthandler)

### Object literals

* [ContentTypeRegex](./#const-contenttyperegex)
* [HttpClientHelper](./#const-httpclienthelper)
* [HttpStatusText](./#const-httpstatustext)
* [Interceptors](./#const-interceptors)

## Type aliases

### BodyParser

Ƭ **BodyParser**: _function_

#### Type declaration:

▸ \(`response`: [RawHttpResponse](interfaces/rawhttpresponse.md)\): [_HttpResponse_](interfaces/httpresponse.md)_‹T›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `response` | [RawHttpResponse](interfaces/rawhttpresponse.md) |

### BodyParserImplementation

Ƭ **BodyParserImplementation**: _function_

#### Type declaration:

▸ \(`rawResponse`: [RawHttpResponse](interfaces/rawhttpresponse.md)\): _Promise‹any›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `rawResponse` | [RawHttpResponse](interfaces/rawhttpresponse.md) |

### BodySerializer

Ƭ **BodySerializer**: _function_

#### Type declaration:

▸ \(`request`: [HttpOptions](./#httpoptions)\): [_NormalizedHttpBody_](./#normalizedhttpbody)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `request` | [HttpOptions](./#httpoptions) |

### BufferEncoding

Ƭ **BufferEncoding**: _"ascii" \| "utf8" \| "utf-8" \| "utf16le" \| "ucs2" \| "ucs-2" \| "base64" \| "latin1" \| "binary" \| "hex"_

### ContentTypeMap

Ƭ **ContentTypeMap**: _Record‹keyof typeof ContentTypeRegex, T›_

### HttpBody

Ƭ **HttpBody**: _object \|_ [_TypedArray_](./#typedarray) _\| string_

### HttpFetch

Ƭ **HttpFetch**: _function_

#### Type declaration:

▸ \(\): _Promise‹_[_HttpResponse_](interfaces/httpresponse.md)_‹Body››_

### HttpHeaders

Ƭ **HttpHeaders**: _Record‹string, string \| number \| boolean \| undefined \| null›_

### HttpInterceptor

Ƭ **HttpInterceptor**: [_HttpInterceptorFunction_](./#httpinterceptorfunction) _\|_ [_HttpInterceptorInterface_](interfaces/httpinterceptorinterface.md)

### HttpInterceptorFunction

Ƭ **HttpInterceptorFunction**: _function_

#### Type declaration:

▸ &lt;**Body**&gt;\(`request`: [HttpFetch](./#httpfetch)‹Body›, `options`: [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)\): [_HttpFetch_](./#httpfetch)_‹Body›_

**Type parameters:**

▪ **Body**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `request` | [HttpFetch](./#httpfetch)‹Body› |
| `options` | [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md) |

### HttpOptions

Ƭ **HttpOptions**: _Partial‹_[_HttpRequestOptions_](interfaces/httprequestoptions.md)_›_

### HttpRequestHandler

Ƭ **HttpRequestHandler**: _function_

#### Type declaration:

▸ \(`requestOptions`: [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)\): _Promise‹_[_RawHttpResponse_](interfaces/rawhttpresponse.md)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `requestOptions` | [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md) |

### MockHttpRequestHandler

Ƭ **MockHttpRequestHandler**: [_HttpRequestHandler_](./#httprequesthandler) _& object_

### NormalizedHttpBody

Ƭ **NormalizedHttpBody**: [_TypedArray_](./#typedarray) _\| string \| undefined_

### PromiseFunction

Ƭ **PromiseFunction**: _function_

#### Type declaration:

▸ \(\): _Promise‹T›_

### RequestMode

Ƭ **RequestMode**: _"navigate" \| "same-origin" \| "no-cors" \| "cors"_

## Variables

### `Const` DEFAULT\_REQUEST\_TIMEOUT\_MS

• **DEFAULT\_REQUEST\_TIMEOUT\_MS**: _number_ = 5  _60_  1000

Default request timeout - 5 minutes.

### `Const` DONE

• **DONE**: _4_ = 4

### `Const` HEADERS\_RECEIVED

• **HEADERS\_RECEIVED**: _2_ = 2

### TypedArray

• **TypedArray**: _any_

### `Const` symbol

• **symbol**: _unique symbol_ = Symbol\('HttpResponseError'\)

## Functions

### `Const` bodyParser

▸ **bodyParser**\(`__namedParameters`: object\): _\(Anonymous function\)_

**Parameters:**

▪`Default value` **\_\_namedParameters**: _object_= {}

| Name | Type |
| :--- | :--- |
| `bodyCasing` | undefined \| [CAMEL\_CASE](enums/bodycasing.md#camel_case) \| [SNAKE\_CASE](enums/bodycasing.md#snake_case) \| [SCREAMING\_SNAKE\_CASE](enums/bodycasing.md#screaming_snake_case) \| [PASCAL\_CASE](enums/bodycasing.md#pascal_case) \| [KEBAB\_CASE](enums/bodycasing.md#kebab_case) |
| `defaultParser` |  |

**Returns:** _\(Anonymous function\)_

### `Const` bodySerializer

▸ **bodySerializer**\(`__namedParameters`: object\): [_BodySerializer_](./#bodyserializer)

**Parameters:**

▪`Default value` **\_\_namedParameters**: _object_= {}

| Name | Type |
| :--- | :--- |
| `bodyCasing` | undefined \| [CAMEL\_CASE](enums/bodycasing.md#camel_case) \| [SNAKE\_CASE](enums/bodycasing.md#snake_case) \| [SCREAMING\_SNAKE\_CASE](enums/bodycasing.md#screaming_snake_case) \| [PASCAL\_CASE](enums/bodycasing.md#pascal_case) \| [KEBAB\_CASE](enums/bodycasing.md#kebab_case) |

**Returns:** [_BodySerializer_](./#bodyserializer)

### `Const` cacheParsedBody

▸ **cacheParsedBody**&lt;**T**&gt;\(`parsedBody`: [PromiseFunction](./#promisefunction)‹T›\): [_PromiseFunction_](./#promisefunction)_‹T›_

**Type parameters:**

▪ **T**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `parsedBody` | [PromiseFunction](./#promisefunction)‹T› |

**Returns:** [_PromiseFunction_](./#promisefunction)_‹T›_

### `Const` createAsyncBodyHandler

▸ **createAsyncBodyHandler**&lt;**T**&gt;\(\): _object_

**Type parameters:**

▪ **T**

**Returns:** _object_

* **call**\(\): _Promise‹T›_
* **onBodyFailure**\(`failer`: function\): _void_
* **onBodyReceived**\(`getter`: function\): _void_

### `Const` createErrorInterceptor

▸ **createErrorInterceptor**\(\): [_HttpInterceptorFunction_](./#httpinterceptorfunction)

**Returns:** [_HttpInterceptorFunction_](./#httpinterceptorfunction)

### `Const` createFormData

▸ **createFormData**\(`body`: object\): _FormData_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `body` | object |

**Returns:** _FormData_

### `Const` createFormDataImpl

▸ **createFormDataImpl**\(`object`: object, `form`: FormData, `namespace?`: undefined \| string\): _FormData_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `object` | object |
| `form` | FormData |
| `namespace?` | undefined \| string |

**Returns:** _FormData_

### `Const` createHttpResponse

▸ **createHttpResponse**\(`__namedParameters`: object\): [_HttpResponse_](interfaces/httpresponse.md)

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name | Type | Default |
| :--- | :--- | :--- |
| `body` | undefined \| string \| Uint8Array‹› \| Uint8ClampedArray‹› \| Uint16Array‹› \| Uint32Array‹› \| Int8Array‹› \| Int16Array‹› \| Int32Array‹› \| Float32Array‹› \| Float64Array‹› | - |
| `headers` | undefined \| object | - |
| `status` | number | - |
| `url` | string | "" |

**Returns:** [_HttpResponse_](interfaces/httpresponse.md)

### `Const` createLoggingInterceptor

▸ **createLoggingInterceptor**\(`__namedParameters`: object\): [_HttpInterceptorFunction_](./#httpinterceptorfunction)

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name | Type |
| :--- | :--- |
| `logger` | function |

**Returns:** [_HttpInterceptorFunction_](./#httpinterceptorfunction)

### `Const` createRedirectionInterceptor

▸ **createRedirectionInterceptor**\(`__namedParameters`: object\): [_HttpInterceptorFunction_](./#httpinterceptorfunction)

**Parameters:**

▪`Default value` **\_\_namedParameters**: _object_= {}

| Name | Type | Default |
| :--- | :--- | :--- |
| `redirectionLimit` | number | 30 |

**Returns:** [_HttpInterceptorFunction_](./#httpinterceptorfunction)

### `Const` createSimpleServer

▸ **createSimpleServer**\(\): [_SimpleServer_](interfaces/simpleserver.md)

**Returns:** [_SimpleServer_](interfaces/simpleserver.md)

### `Const` deepKeyMap

▸ **deepKeyMap**\(`object`: any, `mapper`: function\): _any_

**Parameters:**

▪ **object**: _any_

▪ **mapper**: _function_

▸ \(`key`: string\): _string_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `key` | string |

**Returns:** _any_

### `Const` defaultHeaders

▸ **defaultHeaders**\(`_host`: string\): _object_

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `_host` | string | "" |

**Returns:** _object_

* **Accept**: _string_ = "application/json,application/vnd.api+json"
* **Content-Type**: [_ContentType_](enums/contenttype.md) = ContentType.JSON

### `Const` encodeArrayBuffer

▸ **encodeArrayBuffer**\(`data`: [TypedArray](./#typedarray) \| string \| undefined, `encoding`: [BufferEncoding](./#bufferencoding)\): _Uint8Array‹›_

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `data` | [TypedArray](./#typedarray) \| string \| undefined | "" |
| `encoding` | [BufferEncoding](./#bufferencoding) | "utf8" |

**Returns:** _Uint8Array‹›_

### `Const` encodeText

▸ **encodeText**\(`buffer`: ArrayBuffer, `encoding`: string\): _string_

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `buffer` | ArrayBuffer | - |
| `encoding` | string | "utf8" |

**Returns:** _string_

### `Const` fetchRequestHandler

▸ **fetchRequestHandler**\(`fetchRequestHandlerOptions`: [FetchRequestHandlerOptions](interfaces/fetchrequesthandleroptions.md)\): [_HttpRequestHandler_](./#httprequesthandler)

Creates a new [HttpRequestHandler](./#httprequesthandler) that uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) underneath. Does not support _timeout_ property. Abort is possible only after headers were received.

**Parameters:**

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `fetchRequestHandlerOptions` | [FetchRequestHandlerOptions](interfaces/fetchrequesthandleroptions.md) | {} | default Fetch API options attached to all requests |

**Returns:** [_HttpRequestHandler_](./#httprequesthandler)

### `Const` getBoundaryFromContentTypeHeader

▸ **getBoundaryFromContentTypeHeader**\(`header`: string\[\]\): _string_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `header` | string\[\] |

**Returns:** _string_

### `Const` getCaseConverter

▸ **getCaseConverter**\(`bodyCasing?`: [BodyCasing](enums/bodycasing.md)\): _toCamelCase_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `bodyCasing?` | [BodyCasing](enums/bodycasing.md) |

**Returns:** _toCamelCase_

### `Const` getEncodingFromHeaders

▸ **getEncodingFromHeaders**\(`headers`: [HttpResponseHeaders](classes/httpresponseheaders.md) \| undefined, `fallback`: string\): _string_

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `headers` | [HttpResponseHeaders](classes/httpresponseheaders.md) \| undefined | - |
| `fallback` | string | "utf8" |

**Returns:** _string_

### `Const` getHeader

▸ **getHeader**\(`headers`: [HttpHeaders](./#httpheaders) \| undefined, `header`: string\): _string \| undefined_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `headers` | [HttpHeaders](./#httpheaders) \| undefined |
| `header` | string |

**Returns:** _string \| undefined_

### `Const` getHostname

▸ **getHostname**\(`url`: string\): _string_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `url` | string |

**Returns:** _string_

### `Const` handleRequest

▸ **handleRequest**\(`code`: number, `body`: any, `contentType`: string\): _Promise‹_[_HttpResponse_](interfaces/httpresponse.md)_›_

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `code` | number | - |
| `body` | any | - |
| `contentType` | string | ContentType.TEXT |

**Returns:** _Promise‹_[_HttpResponse_](interfaces/httpresponse.md)_›_

### `Const` httpRequestHandler

▸ **httpRequestHandler**\(`requestHandlerOptions`: [HttpRequestHandlerOptions](interfaces/httprequesthandleroptions.md)\): [_HttpRequestHandler_](./#httprequesthandler)

Creates a new [HttpRequestHandler](./#httprequesthandler) that uses native Node.js [HTTP](https://nodejs.org/api/http.html) & [HTTPS](https://nodejs.org/api/https.html) modules underneath. Does not support _mode_ property.

**Parameters:**

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `requestHandlerOptions` | [HttpRequestHandlerOptions](interfaces/httprequesthandleroptions.md) | {} | default native options attached to all requests |

**Returns:** [_HttpRequestHandler_](./#httprequesthandler)

### `Const` isFormData

▸ **isFormData**\(`object`: any\): _object is FormData_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `object` | any |

**Returns:** _object is FormData_

### `Const` isHttpInterceptorInterface

▸ **isHttpInterceptorInterface**\(`interceptor`: [HttpInterceptor](./#httpinterceptor)\): _interceptor is HttpInterceptorInterface_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `interceptor` | [HttpInterceptor](./#httpinterceptor) |

**Returns:** _interceptor is HttpInterceptorInterface_

### `Const` isHttpRequestError

▸ **isHttpRequestError**\(`error`: any\): _error is HttpRequestError_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `error` | any |

**Returns:** _error is HttpRequestError_

### `Const` isHttpResponseError

▸ **isHttpResponseError**\(`error`: any\): _error is HttpResponseError_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `error` | any |

**Returns:** _error is HttpResponseError_

### `Const` mockRequestHandler

▸ **mockRequestHandler**\(`mockOptions`: [MockOptions](interfaces/mockoptions.md)\): [_MockHttpRequestHandler_](./#mockhttprequesthandler)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `mockOptions` | [MockOptions](interfaces/mockoptions.md) |

**Returns:** [_MockHttpRequestHandler_](./#mockhttprequesthandler)

### `Const` noConversion

▸ **noConversion**\(`object`: any\): _any_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `object` | any |

**Returns:** _any_

### `Const` parseHeaders

▸ **parseHeaders**\(`headers`: Headers\): _Record‹string, string›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `headers` | Headers |

**Returns:** _Record‹string, string›_

### `Const` passthroughParser

▸ **passthroughParser**\(`response`: [RawHttpResponse](interfaces/rawhttpresponse.md)\): _object_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `response` | [RawHttpResponse](interfaces/rawhttpresponse.md) |

**Returns:** _object_

* **parsedBody**: _any_ = \(response as any\).parsedBody \|\| \(\(\) =&gt; response.arrayBuffer\(\)\)

### `Const` processMultipartBody

▸ **processMultipartBody**\(`body`: string, `boundary`: string\): _never_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `body` | string |
| `boundary` | string |

**Returns:** _never_

### `Const` readBlob

▸ **readBlob**\(`blob`: Blob\): _Promise‹ArrayBuffer›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blob` | Blob |

**Returns:** _Promise‹ArrayBuffer›_

### `Const` sanitizeHeaders

▸ **sanitizeHeaders**\(...`multipleHeaders`: undefined \| object\[\]\): _Record‹string, string›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...multipleHeaders` | undefined \| object\[\] |

**Returns:** _Record‹string, string›_

### `Const` sleep

▸ **sleep**\(`ms`: number\): _Promise‹unknown›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `ms` | number |

**Returns:** _Promise‹unknown›_

### `Const` splitWords

▸ **splitWords**\(`text`: string\): _string\[\]_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `text` | string |

**Returns:** _string\[\]_

### switchContentType

▸ **switchContentType**&lt;**T**&gt;\(`contentType`: string, `map`: [ContentTypeMap](./#contenttypemap)‹T›, `defaultResult`: T\): _T_

**Type parameters:**

▪ **T**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `contentType` | string |
| `map` | [ContentTypeMap](./#contenttypemap)‹T› |
| `defaultResult` | T |

**Returns:** _T_

▸ **switchContentType**&lt;**T**&gt;\(`contentType`: string, `map`: [ContentTypeMap](./#contenttypemap)‹T›\): _T \| undefined_

**Type parameters:**

▪ **T**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `contentType` | string |
| `map` | [ContentTypeMap](./#contenttypemap)‹T› |

**Returns:** _T \| undefined_

### `Const` toCamelCase

▸ **toCamelCase**\(`object`: any\): _any_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `object` | any |

**Returns:** _any_

### `Const` toKebabCase

▸ **toKebabCase**\(`object`: any\): _any_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `object` | any |

**Returns:** _any_

### `Const` toPascalCase

▸ **toPascalCase**\(`object`: any\): _any_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `object` | any |

**Returns:** _any_

### `Const` toScreamingSnakeCase

▸ **toScreamingSnakeCase**\(`object`: any\): _any_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `object` | any |

**Returns:** _any_

### `Const` toSnakeCase

▸ **toSnakeCase**\(`object`: any\): _any_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `object` | any |

**Returns:** _any_

### `Const` toUrlEncoded

▸ **toUrlEncoded**\(`obj`: object\): _string_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `obj` | object |

**Returns:** _string_

### `Const` urlCombine

▸ **urlCombine**\(`sourceUrl`: string, `sourceQuery?`: undefined \| object, `options?`: qs.IStringifyOptions\): _string_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `sourceUrl` | string |
| `sourceQuery?` | undefined \| object |
| `options?` | qs.IStringifyOptions |

**Returns:** _string_

### `Const` urlDecode

▸ **urlDecode**&lt;**T**&gt;\(`value`: string, `options?`: qs.IParseOptions\): _T_

**Type parameters:**

▪ **T**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `value` | string |
| `options?` | qs.IParseOptions |

**Returns:** _T_

### `Const` urlDestruct

▸ **urlDestruct**\(`url`: string, `options?`: qs.IParseOptions\): _object_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `url` | string |
| `options?` | qs.IParseOptions |

**Returns:** _object_

* **query**: _any_
* **url**: _string_

### `Const` urlEncode

▸ **urlEncode**\(`value`: any, `options?`: qs.IStringifyOptions\): _string_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `value` | any |
| `options?` | qs.IStringifyOptions |

**Returns:** _string_

### `Const` useInterceptor

▸ **useInterceptor**\(`normalizedOptions`: [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md)\): _\(Anonymous function\)_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `normalizedOptions` | [NormalizedHttpOptions](interfaces/normalizedhttpoptions.md) |

**Returns:** _\(Anonymous function\)_

### `Const` xhrRequestHandler

▸ **xhrRequestHandler**\(`_?`: [XhrRequestHandlerOptions](interfaces/xhrrequesthandleroptions.md)\): [_HttpRequestHandler_](./#httprequesthandler)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `_?` | [XhrRequestHandlerOptions](interfaces/xhrrequesthandleroptions.md) |

**Returns:** [_HttpRequestHandler_](./#httprequesthandler)

## Object literals

### `Const` ContentTypeRegex

### ▪ **ContentTypeRegex**: _object_

### JSON

• **JSON**: _RegExp‹›_ = /^application\/\(json\|.++json\)$/

### MULTIPART

• **MULTIPART**: _RegExp‹›_ = /^multipart\//

### TEXT

• **TEXT**: _RegExp‹›_ = /^text\//

### URL\_ENCODED

• **URL\_ENCODED**: _RegExp‹›_ = /^application\/x-www-form-urlencoded$/

### `Const` HttpClientHelper

### ▪ **HttpClientHelper**: _object_

### defaultHeaders

• **defaultHeaders**: [_defaultHeaders_](./#const-defaultheaders)

### getHostname

• **getHostname**: _getHostname_

### toUrlEncoded

• **toUrlEncoded**: [_toUrlEncoded_](./#const-tourlencoded)

### `Const` HttpStatusText

### ▪ **HttpStatusText**: _object_

### \_\_computed

• **\_\_computed**: _string_ = "Network Authentication Required"

### `Const` Interceptors

### ▪ **Interceptors**: _object_

### createErrorInterceptor

• **createErrorInterceptor**: _createErrorInterceptor_

### createLoggingInterceptor

• **createLoggingInterceptor**: _createLoggingInterceptor_

### createRedirectionInterceptor

• **createRedirectionInterceptor**: _createRedirectionInterceptor_

