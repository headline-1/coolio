[@coolio/auth-interceptor](../README.md) › ["authInterceptor"](_authinterceptor_.md)

# External module: "authInterceptor"

## Index

### Classes

* [AuthInterceptor](../classes/_authinterceptor_.authinterceptor.md)

### Functions

* [createAuthInterceptor](_authinterceptor_.md#const-createauthinterceptor)
* [hasUnauthorizedResponseCode](_authinterceptor_.md#const-hasunauthorizedresponsecode)
* [isUnauthorizedError](_authinterceptor_.md#const-isunauthorizederror)

## Functions

### `Const` createAuthInterceptor

▸ **createAuthInterceptor**(`options`: [AuthInterceptorOptions](../interfaces/_authinterceptor_types_.authinterceptoroptions.md)): *[AuthInterceptor](../classes/_authinterceptor_.authinterceptor.md)‹›*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:87](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authInterceptor.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AuthInterceptorOptions](../interfaces/_authinterceptor_types_.authinterceptoroptions.md) |

**Returns:** *[AuthInterceptor](../classes/_authinterceptor_.authinterceptor.md)‹›*

___

### `Const` hasUnauthorizedResponseCode

▸ **hasUnauthorizedResponseCode**(`response`: HttpResponse): *boolean*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:14](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authInterceptor.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | HttpResponse |

**Returns:** *boolean*

___

### `Const` isUnauthorizedError

▸ **isUnauthorizedError**(`error`: any): *boolean*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:15](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authInterceptor.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *boolean*
