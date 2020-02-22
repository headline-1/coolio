[@coolio/auth-interceptor](../README.md) › ["storage/inMemory.authStorage"](../modules/_storage_inmemory_authstorage_.md) › [InMemoryAuthStorage](_storage_inmemory_authstorage_.inmemoryauthstorage.md)

# Class: InMemoryAuthStorage <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **InMemoryAuthStorage**

## Implements

* [AuthStorage](../interfaces/_storage_authstorage_types_.authstorage.md)‹T›

## Index

### Properties

* [data](_storage_inmemory_authstorage_.inmemoryauthstorage.md#private-optional-data)

### Methods

* [getData](_storage_inmemory_authstorage_.inmemoryauthstorage.md#getdata)
* [setData](_storage_inmemory_authstorage_.inmemoryauthstorage.md#setdata)

## Properties

### `Private` `Optional` data

• **data**? : *T*

*Defined in [packages/auth-interceptor/src/storage/inMemory.authStorage.ts:4](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/storage/inMemory.authStorage.ts#L4)*

## Methods

###  getData

▸ **getData**(): *T | undefined*

*Implementation of [AuthStorage](../interfaces/_storage_authstorage_types_.authstorage.md)*

*Defined in [packages/auth-interceptor/src/storage/inMemory.authStorage.ts:6](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/storage/inMemory.authStorage.ts#L6)*

**Returns:** *T | undefined*

___

###  setData

▸ **setData**(`data`: T): *void*

*Implementation of [AuthStorage](../interfaces/_storage_authstorage_types_.authstorage.md)*

*Defined in [packages/auth-interceptor/src/storage/inMemory.authStorage.ts:10](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/storage/inMemory.authStorage.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *void*
