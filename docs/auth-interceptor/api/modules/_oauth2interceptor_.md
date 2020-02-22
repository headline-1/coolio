[@coolio/auth-interceptor](../README.md) › ["oauth2Interceptor"](_oauth2interceptor_.md)

# External module: "oauth2Interceptor"

## Index

### Functions

* [createOAuth2Interceptor](_oauth2interceptor_.md#const-createoauth2interceptor)

## Functions

### `Const` createOAuth2Interceptor

▸ **createOAuth2Interceptor**(`__namedParameters`: object): *[AuthInterceptor](../classes/_authinterceptor_.authinterceptor.md)‹›*

*Defined in [packages/auth-interceptor/src/oauth2Interceptor.ts:13](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/oauth2Interceptor.ts#L13)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`authStorage` | [AuthStorage](../interfaces/_storage_authstorage_types_.authstorage.md)‹[OAuth2TokenResponse](../interfaces/_oauth2interceptor_types_.oauth2tokenresponse.md)› |
`canAuthorize` | function |
`oauth` | object |
`onAuthorizationFailure` | function |

**Returns:** *[AuthInterceptor](../classes/_authinterceptor_.authinterceptor.md)‹›*
