# Interface: Endpoint

## Hierarchy

* **Endpoint**

## Index

### Properties

* [handler](endpoint.md#handler)
* [match](endpoint.md#match)

## Properties

###  handler

• **handler**: *function*

*Defined in [packages/http/src/requestHandlers/mock.requestHandler.ts:29](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/mock.requestHandler.ts#L29)*

#### Type declaration:

▸ (`request`: [NormalizedHttpOptions](normalizedhttpoptions.md)): *Promise‹[RawHttpResponse](rawhttpresponse.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [NormalizedHttpOptions](normalizedhttpoptions.md) |

___

###  match

• **match**: *string | RegExp*

*Defined in [packages/http/src/requestHandlers/mock.requestHandler.ts:28](https://github.com/headline-1/coolio/blob/0131267/packages/http/src/requestHandlers/mock.requestHandler.ts#L28)*
