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

**Returns:** *number*

## Methods

###  clean

▸ **clean**(`reason`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | any |

**Returns:** *void*

___

###  put

▸ **put**<**T**>(`item`: function): *Promise‹T›*

Queues specified promise and returns when it's done

**Type parameters:**

▪ **T**

**Parameters:**

▪ **item**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*
