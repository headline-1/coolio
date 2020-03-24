# OAuth2InterceptorOptions

## Hierarchy

* **OAuth2InterceptorOptions**

## Index

### Properties

* [authStorage](oauth2interceptoroptions.md#authstorage)
* [canAuthorize](oauth2interceptoroptions.md#canauthorize)
* [oauth](oauth2interceptoroptions.md#oauth)
* [onAuthorizationFailure](oauth2interceptoroptions.md#onauthorizationfailure)

## Properties

### authStorage

• **authStorage**: [_AuthStorage_](authstorage.md)_‹_[_OAuth2TokenResponse_](oauth2tokenresponse.md)_›_

Data storage for OAuth credentials. Uses InMemoryAuthStorage by default. One can implement their own storage, i.e. backed by Redux or LocalStorage.

### canAuthorize

• **canAuthorize**: _function_

Determine if request should be processed, by checking request's options \(i.e. check for a domain match\)

**`param`** Request options

#### Type declaration:

▸ \(`options`: NormalizedHttpOptions\): _boolean_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `options` | NormalizedHttpOptions |

### oauth

• **oauth**: _object_

#### Type declaration:

* **clientId**: _string_
* **clientSecret**? : _undefined \| string_
* **contentType**? : _ContentType_
* **httpClientOptions**: _HttpClientConfig_
* **refreshTokenUrl**: _string_

### onAuthorizationFailure

• **onAuthorizationFailure**: _function_

This function is called when:

* authorize\(\) function throws an error,
* a second call to an api endpoint results in 401.

#### Type declaration:

▸ \(`err`: [AuthError](../classes/autherror.md)\): [_Promisable_](../#promisable)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `err` | [AuthError](../classes/autherror.md) |

