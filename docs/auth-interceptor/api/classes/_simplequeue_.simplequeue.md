[@coolio/auth-interceptor](../README.md) › ["simpleQueue"](../modules/_simplequeue_.md) › [SimpleQueue](_simplequeue_.simplequeue.md)

# Class: SimpleQueue

Simple queue that executes Promises one by one.

## Hierarchy

* **SimpleQueue**

## Index

### Properties

* [isRunning](_simplequeue_.simplequeue.md#private-isrunning)
* [items](_simplequeue_.simplequeue.md#private-items)

### Accessors

* [length](_simplequeue_.simplequeue.md#length)

### Methods

* [clean](_simplequeue_.simplequeue.md#clean)
* [next](_simplequeue_.simplequeue.md#private-next)
* [put](_simplequeue_.simplequeue.md#put)

## Properties

### `Private` isRunning

• **isRunning**: *boolean* = false

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:12](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/simpleQueue.ts#L12)*

___

### `Private` items

• **items**: *QueueItem[]* = []

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:11](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/simpleQueue.ts#L11)*

## Accessors

###  length

• **get length**(): *number*

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:14](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/simpleQueue.ts#L14)*

**Returns:** *number*

## Methods

###  clean

▸ **clean**(`reason`: any): *void*

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:36](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/simpleQueue.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | any |

**Returns:** *void*

___

### `Private` next

▸ **next**(): *void*

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:43](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/simpleQueue.ts#L43)*

**Returns:** *void*

___

###  put

▸ **put**<**T**>(`item`: function): *Promise‹T›*

*Defined in [packages/auth-interceptor/src/simpleQueue.ts:21](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/simpleQueue.ts#L21)*

Queues specified promise and returns when it's done

**Type parameters:**

▪ **T**

**Parameters:**

▪ **item**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*
