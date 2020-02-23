# Interface: OAuth2InterceptorOptions

## Hierarchy

* **OAuth2InterceptorOptions**

## Index

### Properties

* [authStorage](oauth2interceptoroptions.md#authstorage)
* [canAuthorize](oauth2interceptoroptions.md#canauthorize)
* [oauth](oauth2interceptoroptions.md#oauth)
* [onAuthorizationFailure](oauth2interceptoroptions.md#onauthorizationfailure)

## Properties

###  authStorage

• **authStorage**: *[AuthStorage](authstorage.md)‹[OAuth2TokenResponse](oauth2tokenresponse.md)›*

*Defined in [packages/auth-interceptor/src/oauth2Interceptor.types.ts:49](https://github.com/headline-1/coolio/blob/0131267/packages/auth-interceptor/src/oauth2Interceptor.types.ts#L49)*

Data storage for OAuth credentials. Uses InMemoryAuthStorage by default.
One can implement their own storage, i.e. backed by Redux or LocalStorage.

___

###  canAuthorize

• **canAuthorize**: *function*

*Defined in [packages/auth-interceptor/src/oauth2Interceptor.types.ts:62](https://github.com/headline-1/coolio/blob/0131267/packages/auth-interceptor/src/oauth2Interceptor.types.ts#L62)*

Determine if request should be processed, by checking request's options (i.e. check for a domain match)

**`param`** Request options

#### Type declaration:

▸ (`options`: NormalizedHttpOptions): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`options` | NormalizedHttpOptions |

___

###  oauth

• **oauth**: *object*

*Defined in [packages/auth-interceptor/src/oauth2Interceptor.types.ts:17](https://github.com/headline-1/coolio/blob/0131267/packages/auth-interceptor/src/oauth2Interceptor.types.ts#L17)*

#### Type declaration:

* **clientId**: *string*

* **clientSecret**? : *undefined | string*

* **contentType**? : *ContentType*

* **httpClientOptions**: *HttpClientConfig*

* **refreshTokenUrl**: *string*

___

###  onAuthorizationFailure

• **onAuthorizationFailure**: *function*

*Defined in [packages/auth-interceptor/src/oauth2Interceptor.types.ts:56](https://github.com/headline-1/coolio/blob/0131267/packages/auth-interceptor/src/oauth2Interceptor.types.ts#L56)*

This function is called when:
- authorize() function throws an error,
- a second call to an api endpoint results in 401.

#### Type declaration:

▸ (`err`: [AuthError](../classes/autherror.md)): *[Promisable](../README.md#promisable)*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [AuthError](../classes/autherror.md) |
