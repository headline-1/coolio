[@coolio/auth-interceptor](../README.md) › ["storage/authStorage.types"](../modules/_storage_authstorage_types_.md) › [AuthStorage](_storage_authstorage_types_.authstorage.md)

# Interface: AuthStorage <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **AuthStorage**

## Implemented by

* [InMemoryAuthStorage](../classes/_storage_inmemory_authstorage_.inmemoryauthstorage.md)

## Index

### Methods

* [getData](_storage_authstorage_types_.authstorage.md#getdata)
* [setData](_storage_authstorage_types_.authstorage.md#setdata)

## Methods

###  getData

▸ **getData**(): *[Promisable](../modules/_promisable_.md#promisable)‹T | undefined›*

*Defined in [packages/auth-interceptor/src/storage/authStorage.types.ts:4](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/storage/authStorage.types.ts#L4)*

**Returns:** *[Promisable](../modules/_promisable_.md#promisable)‹T | undefined›*

___

###  setData

▸ **setData**(`t`: T): *[Promisable](../modules/_promisable_.md#promisable)*

*Defined in [packages/auth-interceptor/src/storage/authStorage.types.ts:6](https://github.com/headline-1/coolio/blob/32658f8/packages/auth-interceptor/src/storage/authStorage.types.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *[Promisable](../modules/_promisable_.md#promisable)*
