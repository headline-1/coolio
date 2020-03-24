# AuthInterceptor

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

### constructor

+ **new AuthInterceptor**\(`options`: [AuthInterceptorOptions](../interfaces/authinterceptoroptions.md)\): [_AuthInterceptor_](authinterceptor.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `options` | [AuthInterceptorOptions](../interfaces/authinterceptoroptions.md) |

**Returns:** [_AuthInterceptor_](authinterceptor.md)

## Accessors

### pendingRequestCount

• **get pendingRequestCount**\(\): _number_

**Returns:** _number_

## Methods

### onIntercept

▸ **onIntercept**&lt;**Body**&gt;\(`request`: HttpFetch‹Body›, `options`: NormalizedHttpOptions\): _HttpFetch‹Body›_

**Type parameters:**

▪ **Body**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `request` | HttpFetch‹Body› |
| `options` | NormalizedHttpOptions |

**Returns:** _HttpFetch‹Body›_

