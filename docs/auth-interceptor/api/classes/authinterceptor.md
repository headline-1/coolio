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

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AuthInterceptorOptions](../interfaces/authinterceptoroptions.md) |

**Returns:** *[AuthInterceptor](authinterceptor.md)*

## Accessors

###  pendingRequestCount

• **get pendingRequestCount**(): *number*

**Returns:** *number*

## Methods

###  onIntercept

▸ **onIntercept**<**Body**>(`request`: HttpFetch‹Body›, `options`: NormalizedHttpOptions): *HttpFetch‹Body›*

**Type parameters:**

▪ **Body**

**Parameters:**

Name | Type |
------ | ------ |
`request` | HttpFetch‹Body› |
`options` | NormalizedHttpOptions |

**Returns:** *HttpFetch‹Body›*
