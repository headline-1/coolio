# SimpleQueue

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

### length

• **get length**\(\): _number_

**Returns:** _number_

## Methods

### clean

▸ **clean**\(`reason`: any\): _void_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `reason` | any |

**Returns:** _void_

### put

▸ **put**&lt;**T**&gt;\(`item`: function\): _Promise‹T›_

Queues specified promise and returns when it's done

**Type parameters:**

▪ **T**

**Parameters:**

▪ **item**: _function_

▸ \(\): _Promise‹T›_

**Returns:** _Promise‹T›_

