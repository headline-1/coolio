# Class: AuthInterceptor

## Hierarchy

* **AuthInterceptor**

## Implements

* HttpInterceptorInterface

## Index

### Constructors

* [constructor](authinterceptor.md#constructor)

### Properties

* [options](authinterceptor.md#private-options)
* [queue](authinterceptor.md#private-queue)

### Accessors

* [pendingRequestCount](authinterceptor.md#pendingrequestcount)

### Methods

* [handleAuthorizationError](authinterceptor.md#private-handleauthorizationerror)
* [handleUnauthorizedResponse](authinterceptor.md#private-handleunauthorizedresponse)
* [onIntercept](authinterceptor.md#onintercept)
* [requestReauthorization](authinterceptor.md#private-requestreauthorization)

## Constructors

###  constructor

\+ **new AuthInterceptor**(`options`: [AuthInterceptorOptions](../interfaces/authinterceptoroptions.md)): *[AuthInterceptor](authinterceptor.md)*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:19](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/authInterceptor.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AuthInterceptorOptions](../interfaces/authinterceptoroptions.md) |

**Returns:** *[AuthInterceptor](authinterceptor.md)*

## Properties

### `Private` options

• **options**: *[AuthInterceptorOptions](../interfaces/authinterceptoroptions.md)*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:21](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/authInterceptor.ts#L21)*

___

### `Private` queue

• **queue**: *[SimpleQueue](simplequeue.md)‹›* = new SimpleQueue()

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:19](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/authInterceptor.ts#L19)*

## Accessors

###  pendingRequestCount

• **get pendingRequestCount**(): *number*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:24](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/authInterceptor.ts#L24)*

**Returns:** *number*

## Methods

### `Private` handleAuthorizationError

▸ **handleAuthorizationError**(`error`: any): *Promise‹never›*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:61](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/authInterceptor.ts#L61)*

Called when:
- reauthorization fails,
- a second request fails after reauthorization

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *Promise‹never›*

___

### `Private` handleUnauthorizedResponse

▸ **handleUnauthorizedResponse**<**Body**>(`request`: HttpFetch‹Body›, `onUnauthorizedResponse`: function): *Promise‹HttpResponse‹Body››*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:68](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/authInterceptor.ts#L68)*

**Type parameters:**

▪ **Body**

**Parameters:**

▪ **request**: *HttpFetch‹Body›*

▪ **onUnauthorizedResponse**: *function*

▸ (`error`: HttpResponseError): *Promise‹HttpResponse‹Body››*

**Parameters:**

Name | Type |
------ | ------ |
`error` | HttpResponseError |

**Returns:** *Promise‹HttpResponse‹Body››*

___

###  onIntercept

▸ **onIntercept**<**Body**>(`request`: HttpFetch‹Body›, `options`: NormalizedHttpOptions): *HttpFetch‹Body›*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:28](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/authInterceptor.ts#L28)*

**Type parameters:**

▪ **Body**

**Parameters:**

Name | Type |
------ | ------ |
`request` | HttpFetch‹Body› |
`options` | NormalizedHttpOptions |

**Returns:** *HttpFetch‹Body›*

___

### `Private` requestReauthorization

▸ **requestReauthorization**(): *Promise‹void›*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:48](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/authInterceptor.ts#L48)*

**Returns:** *Promise‹void›*
