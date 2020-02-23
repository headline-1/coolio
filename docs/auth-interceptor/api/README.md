# @coolio/auth-interceptor

## Index

### Classes

* [AuthError](classes/autherror.md)
* [AuthInterceptor](classes/authinterceptor.md)
* [InMemoryAuthStorage](classes/inmemoryauthstorage.md)
* [SimpleQueue](classes/simplequeue.md)

### Interfaces

* [AuthInterceptorOptions](interfaces/authinterceptoroptions.md)
* [AuthStorage](interfaces/authstorage.md)
* [OAuth2InterceptorOptions](interfaces/oauth2interceptoroptions.md)
* [OAuth2TokenResponse](interfaces/oauth2tokenresponse.md)

### Type aliases

* [Promisable](README.md#promisable)
* [QueueItem](README.md#queueitem)

### Functions

* [createAuthInterceptor](README.md#const-createauthinterceptor)
* [createOAuth2Interceptor](README.md#const-createoauth2interceptor)
* [hasUnauthorizedResponseCode](README.md#const-hasunauthorizedresponsecode)
* [isUnauthorizedError](README.md#const-isunauthorizederror)

## Type aliases

###  Promisable

Ƭ **Promisable**: *T | Promise‹T›*

___

###  QueueItem

Ƭ **QueueItem**: *object*

#### Type declaration:

* **fail**(): *function*

  * (`reason`: any): *void*

* **run**(): *function*

  * (): *Promise‹void›*

## Functions

### `Const` createAuthInterceptor

▸ **createAuthInterceptor**(`options`: [AuthInterceptorOptions](interfaces/authinterceptoroptions.md)): *[AuthInterceptor](classes/authinterceptor.md)‹›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AuthInterceptorOptions](interfaces/authinterceptoroptions.md) |

**Returns:** *[AuthInterceptor](classes/authinterceptor.md)‹›*

___

### `Const` createOAuth2Interceptor

▸ **createOAuth2Interceptor**(`__namedParameters`: object): *[AuthInterceptor](classes/authinterceptor.md)‹›*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`authStorage` | [AuthStorage](interfaces/authstorage.md)‹[OAuth2TokenResponse](interfaces/oauth2tokenresponse.md)› |
`canAuthorize` | function |
`oauth` | object |
`onAuthorizationFailure` | function |

**Returns:** *[AuthInterceptor](classes/authinterceptor.md)‹›*

___

### `Const` hasUnauthorizedResponseCode

▸ **hasUnauthorizedResponseCode**(`response`: HttpResponse): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`response` | HttpResponse |

**Returns:** *boolean*

___

### `Const` isUnauthorizedError

▸ **isUnauthorizedError**(`error`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *boolean*
