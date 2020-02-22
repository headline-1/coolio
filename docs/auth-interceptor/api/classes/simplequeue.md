# Class: SimpleQueue

Simple queue that executes Promises one by one.

## Hierarchy

* **SimpleQueue**

## Index

### Properties

* [isRunning](simplequeue.md#private-isrunning)
* [items](simplequeue.md#private-items)

### Accessors

* [length](simplequeue.md#length)

### Methods

* [clean](simplequeue.md#clean)
* [next](simplequeue.md#private-next)
* [put](simplequeue.md#put)

## Properties

### `Private` isRunning

• **isRunning**: *boolean* = false

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:12](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/simpleQueue.ts#L12)*

___

### `Private` items

• **items**: *[QueueItem](../README.md#queueitem)[]* = []

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:11](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/simpleQueue.ts#L11)*

## Accessors

###  length

• **get length**(): *number*

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:14](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/simpleQueue.ts#L14)*

**Returns:** *number*

## Methods

###  clean

▸ **clean**(`reason`: any): *void*

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:36](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/simpleQueue.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | any |

**Returns:** *void*

___

### `Private` next

▸ **next**(): *void*

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:43](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/simpleQueue.ts#L43)*

**Returns:** *void*

___

###  put

▸ **put**<**T**>(`item`: function): *Promise‹T›*

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:21](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/simpleQueue.ts#L21)*

Queues specified promise and returns when it's done

**Type parameters:**

▪ **T**

**Parameters:**

▪ **item**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*
