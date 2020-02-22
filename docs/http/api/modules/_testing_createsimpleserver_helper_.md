[@coolio/http](../README.md) › ["testing/createSimpleServer.helper"](_testing_createsimpleserver_helper_.md)

# External module: "testing/createSimpleServer.helper"

## Index

### Interfaces

* [CreateSimpleServerParams](../interfaces/_testing_createsimpleserver_helper_.createsimpleserverparams.md)
* [SimpleEndpoint](../interfaces/_testing_createsimpleserver_helper_.simpleendpoint.md)
* [SimpleServer](../interfaces/_testing_createsimpleserver_helper_.simpleserver.md)

### Functions

* [createSimpleServer](_testing_createsimpleserver_helper_.md#const-createsimpleserver)

## Functions

### `Const` createSimpleServer

▸ **createSimpleServer**(`__namedParameters`: object): *[SimpleServer](../interfaces/_testing_createsimpleserver_helper_.simpleserver.md)*

*Defined in [packages/http/src/testing/createSimpleServer.helper.ts:26](https://github.com/headline-1/coolio/blob/32658f8/packages/http/src/testing/createSimpleServer.helper.ts#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`endpoints` | [SimpleEndpoint](../interfaces/_testing_createsimpleserver_helper_.simpleendpoint.md)[] |
`headers` | OutgoingHttpHeaders |
`status` | number |

**Returns:** *[SimpleServer](../interfaces/_testing_createsimpleserver_helper_.simpleserver.md)*
