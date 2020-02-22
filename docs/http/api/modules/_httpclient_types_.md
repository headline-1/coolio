[@coolio/http](../README.md) › ["httpClient.types"](_httpclient_types_.md)

# External module: "httpClient.types"

## Index

### Enumerations

* [HttpMethod](../enums/_httpclient_types_.httpmethod.md)

### Interfaces

* [HttpInterceptorInterface](../interfaces/_httpclient_types_.httpinterceptorinterface.md)
* [HttpRequestOptions](../interfaces/_httpclient_types_.httprequestoptions.md)
* [HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)
* [NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md)
* [RawHttpResponse](../interfaces/_httpclient_types_.rawhttpresponse.md)

### Type aliases

* [BodyParser](_httpclient_types_.md#bodyparser)
* [BodySerializer](_httpclient_types_.md#bodyserializer)
* [HttpBody](_httpclient_types_.md#httpbody)
* [HttpFetch](_httpclient_types_.md#httpfetch)
* [HttpHeaders](_httpclient_types_.md#httpheaders)
* [HttpInterceptor](_httpclient_types_.md#httpinterceptor)
* [HttpInterceptorFunction](_httpclient_types_.md#httpinterceptorfunction)
* [HttpOptions](_httpclient_types_.md#httpoptions)
* [HttpRequestHandler](_httpclient_types_.md#httprequesthandler)
* [NormalizedHttpBody](_httpclient_types_.md#normalizedhttpbody)
* [RequestMode](_httpclient_types_.md#requestmode)

## Type aliases

###  BodyParser

Ƭ **BodyParser**: *function*

*Defined in [packages/http/src/httpClient.types.ts:23](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L23)*

#### Type declaration:

▸ (`response`: [RawHttpResponse](../interfaces/_httpclient_types_.rawhttpresponse.md)): *[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [RawHttpResponse](../interfaces/_httpclient_types_.rawhttpresponse.md) |

___

###  BodySerializer

Ƭ **BodySerializer**: *function*

*Defined in [packages/http/src/httpClient.types.ts:25](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L25)*

#### Type declaration:

▸ (`request`: [HttpOptions](_httpclient_types_.md#httpoptions)): *[NormalizedHttpBody](_httpclient_types_.md#normalizedhttpbody)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpOptions](_httpclient_types_.md#httpoptions) |

___

###  HttpBody

Ƭ **HttpBody**: *object | TypedArray | string*

*Defined in [packages/http/src/httpClient.types.ts:29](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L29)*

___

###  HttpFetch

Ƭ **HttpFetch**: *function*

*Defined in [packages/http/src/httpClient.types.ts:27](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L27)*

#### Type declaration:

▸ (): *Promise‹[HttpResponse](../interfaces/_httpclient_types_.httpresponse.md)‹Body››*

___

###  HttpHeaders

Ƭ **HttpHeaders**: *Record‹string, string | number | boolean | undefined | null›*

*Defined in [packages/http/src/httpClient.types.ts:31](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L31)*

___

###  HttpInterceptor

Ƭ **HttpInterceptor**: *[HttpInterceptorFunction](_httpclient_types_.md#httpinterceptorfunction) | [HttpInterceptorInterface](../interfaces/_httpclient_types_.httpinterceptorinterface.md)*

*Defined in [packages/http/src/httpClient.types.ts:42](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L42)*

___

###  HttpInterceptorFunction

Ƭ **HttpInterceptorFunction**: *function*

*Defined in [packages/http/src/httpClient.types.ts:37](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L37)*

#### Type declaration:

▸ <**Body**>(`request`: [HttpFetch](_httpclient_types_.md#httpfetch)‹Body›, `options`: [NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md)): *[HttpFetch](_httpclient_types_.md#httpfetch)‹Body›*

**Type parameters:**

▪ **Body**

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpFetch](_httpclient_types_.md#httpfetch)‹Body› |
`options` | [NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md) |

___

###  HttpOptions

Ƭ **HttpOptions**: *Partial‹[HttpRequestOptions](../interfaces/_httpclient_types_.httprequestoptions.md)›*

*Defined in [packages/http/src/httpClient.types.ts:64](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L64)*

___

###  HttpRequestHandler

Ƭ **HttpRequestHandler**: *function*

*Defined in [packages/http/src/httpClient.types.ts:79](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L79)*

#### Type declaration:

▸ (`requestOptions`: [NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md)): *Promise‹[RawHttpResponse](../interfaces/_httpclient_types_.rawhttpresponse.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`requestOptions` | [NormalizedHttpOptions](../interfaces/_httpclient_types_.normalizedhttpoptions.md) |

___

###  NormalizedHttpBody

Ƭ **NormalizedHttpBody**: *string | TypedArray | undefined*

*Defined in [packages/http/src/httpClient.types.ts:66](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L66)*

___

###  RequestMode

Ƭ **RequestMode**: *"navigate" | "same-origin" | "no-cors" | "cors"*

*Defined in [packages/http/src/httpClient.types.ts:52](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/httpClient.types.ts#L52)*
