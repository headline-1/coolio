[@coolio/auth-interceptor](../README.md) › ["authInterceptor"](../modules/_authinterceptor_.md) › [AuthInterceptor](_authinterceptor_.authinterceptor.md)

# Class: AuthInterceptor

## Hierarchy

* **AuthInterceptor**

## Implements

* HttpInterceptorInterface

## Index

### Constructors

* [constructor](_authinterceptor_.authinterceptor.md#constructor)

### Properties

* [options](_authinterceptor_.authinterceptor.md#private-options)
* [queue](_authinterceptor_.authinterceptor.md#private-queue)

### Accessors

* [pendingRequestCount](_authinterceptor_.authinterceptor.md#pendingrequestcount)

### Methods

* [handleAuthorizationError](_authinterceptor_.authinterceptor.md#private-handleauthorizationerror)
* [handleUnauthorizedResponse](_authinterceptor_.authinterceptor.md#private-handleunauthorizedresponse)
* [onIntercept](_authinterceptor_.authinterceptor.md#onintercept)
* [requestReauthorization](_authinterceptor_.authinterceptor.md#private-requestreauthorization)

## Constructors

###  constructor

\+ **new AuthInterceptor**(`options`: [AuthInterceptorOptions](../interfaces/_authinterceptor_types_.authinterceptoroptions.md)): *[AuthInterceptor](_authinterceptor_.authinterceptor.md)*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:19](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authInterceptor.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AuthInterceptorOptions](../interfaces/_authinterceptor_types_.authinterceptoroptions.md) |

**Returns:** *[AuthInterceptor](_authinterceptor_.authinterceptor.md)*

## Properties

### `Private` options

• **options**: *[AuthInterceptorOptions](../interfaces/_authinterceptor_types_.authinterceptoroptions.md)*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:21](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authInterceptor.ts#L21)*

___

### `Private` queue

• **queue**: *[SimpleQueue](_simplequeue_.simplequeue.md)‹›* = new SimpleQueue()

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:19](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authInterceptor.ts#L19)*

## Accessors

###  pendingRequestCount

• **get pendingRequestCount**(): *number*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:24](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authInterceptor.ts#L24)*

**Returns:** *number*

## Methods

### `Private` handleAuthorizationError

▸ **handleAuthorizationError**(`error`: any): *Promise‹never›*

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:61](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authInterceptor.ts#L61)*

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

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:68](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authInterceptor.ts#L68)*

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

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:28](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authInterceptor.ts#L28)*

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

*Defined in [packages/auth-interceptor/src/authInterceptor.ts:48](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/authInterceptor.ts#L48)*

**Returns:** *Promise‹void›*
