# Interface: AuthStorage <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **AuthStorage**

## Implemented by

* [InMemoryAuthStorage](../classes/inmemoryauthstorage.md)

## Index

### Methods

* [getData](authstorage.md#getdata)
* [setData](authstorage.md#setdata)

## Methods

###  getData

▸ **getData**(): *[Promisable](../README.md#promisable)‹T | undefined›*

*Defined in [packages/auth-interceptor/src/storage/authStorage.types.ts:4](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/storage/authStorage.types.ts#L4)*

**Returns:** *[Promisable](../README.md#promisable)‹T | undefined›*

___

###  setData

▸ **setData**(`t`: T): *[Promisable](../README.md#promisable)*

*Defined in [packages/auth-interceptor/src/storage/authStorage.types.ts:6](https://github.com/headline-1/coolio/blob/c80476b/packages/auth-interceptor/src/storage/authStorage.types.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *[Promisable](../README.md#promisable)*
