# Class: InMemoryAuthStorage <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **InMemoryAuthStorage**

## Implements

* [AuthStorage](../interfaces/authstorage.md)‹T›

## Index

### Properties

* [data](inmemoryauthstorage.md#private-optional-data)

### Methods

* [getData](inmemoryauthstorage.md#getdata)
* [setData](inmemoryauthstorage.md#setdata)

## Properties

### `Private` `Optional` data

• **data**? : *T*

*Defined in [packages/auth-interceptor/src/storage/inMemory.authStorage.ts:4](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/storage/inMemory.authStorage.ts#L4)*

## Methods

###  getData

▸ **getData**(): *T | undefined*

*Implementation of [AuthStorage](../interfaces/authstorage.md)*

*Defined in [packages/auth-interceptor/src/storage/inMemory.authStorage.ts:6](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/storage/inMemory.authStorage.ts#L6)*

**Returns:** *T | undefined*

___

###  setData

▸ **setData**(`data`: T): *void*

*Implementation of [AuthStorage](../interfaces/authstorage.md)*

*Defined in [packages/auth-interceptor/src/storage/inMemory.authStorage.ts:10](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/storage/inMemory.authStorage.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *void*
