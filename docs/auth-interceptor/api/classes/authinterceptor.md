# Class: AuthInterceptor

## Hierarchy

* **AuthInterceptor**

## Implements

* HttpInterceptorInterface

## Index

### Constructors

* [constructor](authinterceptor.md#constructor)

### Accessors

* [pendingRequestCount](authinterceptor.md#pendingrequestcount)

### Methods

* [onIntercept](authinterceptor.md#onintercept)

## Constructors

###  constructor

\+ **new AuthInterceptor**(`options`: [AuthInterceptorOptions](../interfaces/authinterceptoroptions.md)): *[AuthInterceptor](authinterceptor.md)*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:19](https://github.com/headline-1/coolio/blob/0131267/packages/auth-interceptor/src/authInterceptor.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AuthInterceptorOptions](../interfaces/authinterceptoroptions.md) |

**Returns:** *[AuthInterceptor](authinterceptor.md)*

## Accessors

###  pendingRequestCount

• **get pendingRequestCount**(): *number*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:24](https://github.com/headline-1/coolio/blob/0131267/packages/auth-interceptor/src/authInterceptor.ts#L24)*

**Returns:** *number*

## Methods

###  onIntercept

▸ **onIntercept**<**Body**>(`request`: HttpFetch‹Body›, `options`: NormalizedHttpOptions): *HttpFetch‹Body›*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:28](https://github.com/headline-1/coolio/blob/0131267/packages/auth-interceptor/src/authInterceptor.ts#L28)*

**Type parameters:**

▪ **Body**

**Parameters:**

Name | Type |
------ | ------ |
`request` | HttpFetch‹Body› |
`options` | NormalizedHttpOptions |

**Returns:** *HttpFetch‹Body›*
