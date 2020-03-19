# Interface: AuthInterceptorOptions

## Hierarchy

* **AuthInterceptorOptions**

## Index

### Properties

* [canAuthorize](authinterceptoroptions.md#canauthorize)
* [onAuthorizationFailure](authinterceptoroptions.md#onauthorizationfailure)
* [reauthorize](authinterceptoroptions.md#reauthorize)
* [setAuthorizationData](authinterceptoroptions.md#setauthorizationdata)

## Properties

###  canAuthorize

• **canAuthorize**: *function*

Determine if request should be processed, by checking request's options (i.e. check for a domain match)

**`param`** Request options

#### Type declaration:

▸ (`options`: NormalizedHttpOptions): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`options` | NormalizedHttpOptions |

___

###  onAuthorizationFailure

• **onAuthorizationFailure**: *function*

This function is called when:
- authorize() function throws an error,
- a second call to an api endpoint results in 401.

#### Type declaration:

▸ (`err`: [AuthError](../classes/autherror.md)): *[Promisable](../README.md#promisable)*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [AuthError](../classes/autherror.md) |

___

###  reauthorize

• **reauthorize**: *function*

Obtain authorization data. At this point previous token has expired or
Unauthorized response status code has been received. You can call refresh token endpoint.

#### Type declaration:

▸ (): *[Promisable](../README.md#promisable)*

___

###  setAuthorizationData

• **setAuthorizationData**: *function*

Insert authorization data to the request.

**`param`** Authorization data obtained earlier by {#authorize}

**`param`** Request options

#### Type declaration:

▸ (`options`: NormalizedHttpOptions): *[Promisable](../README.md#promisable)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | NormalizedHttpOptions |
