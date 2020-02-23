# Class: SimpleQueue

Simple queue that executes Promises one by one.

## Hierarchy

* **SimpleQueue**

## Index

### Accessors

* [length](simplequeue.md#length)

### Methods

* [clean](simplequeue.md#clean)
* [put](simplequeue.md#put)

## Accessors

###  length

• **get length**(): *number*

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:14](https://github.com/headline-1/coolio/blob/420fd1d/packages/auth-interceptor/src/simpleQueue.ts#L14)*

**Returns:** *number*

## Methods

###  clean

▸ **clean**(`reason`: any): *void*

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:36](https://github.com/headline-1/coolio/blob/420fd1d/packages/auth-interceptor/src/simpleQueue.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | any |

**Returns:** *void*

___

###  put

▸ **put**<**T**>(`item`: function): *Promise‹T›*

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:21](https://github.com/headline-1/coolio/blob/420fd1d/packages/auth-interceptor/src/simpleQueue.ts#L21)*

Queues specified promise and returns when it's done

**Type parameters:**

▪ **T**

**Parameters:**

▪ **item**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*
