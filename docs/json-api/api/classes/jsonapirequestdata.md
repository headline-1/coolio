# Class: JsonApiRequestData

## Hierarchy

* **JsonApiRequestData**

## Index

### Constructors

* [constructor](jsonapirequestdata.md#constructor)

### Properties

* [body](jsonapirequestdata.md#body)
* [limit](jsonapirequestdata.md#limit)
* [offset](jsonapirequestdata.md#optional-offset)
* [options](jsonapirequestdata.md#options)
* [page](jsonapirequestdata.md#page)
* [query](jsonapirequestdata.md#query)
* [sort](jsonapirequestdata.md#sort)
* [uri](jsonapirequestdata.md#uri)

### Methods

* [getRequestOptions](jsonapirequestdata.md#getrequestoptions)

## Constructors

###  constructor

\+ **new JsonApiRequestData**(`uri`: string, `options`: [RequestBuilderOptions](../interfaces/requestbuilderoptions.md)): *[JsonApiRequestData](jsonapirequestdata.md)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`options` | [RequestBuilderOptions](../interfaces/requestbuilderoptions.md) |

**Returns:** *[JsonApiRequestData](jsonapirequestdata.md)*

## Properties

###  body

• **body**: *any*

___

###  limit

• **limit**: *number* = DEFAULT_RESOURCE_LIMIT

___

### `Optional` offset

• **offset**? : *undefined | number*

___

###  options

• **options**: *[RequestBuilderOptions](../interfaces/requestbuilderoptions.md)*

___

###  page

• **page**: *number* = 1

___

###  query

• **query**: *Record‹string, any›*

___

###  sort

• **sort**: *string[]* = []

___

###  uri

• **uri**: *string*

## Methods

###  getRequestOptions

▸ **getRequestOptions**(`options?`: HttpOptions): *object*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | HttpOptions |

**Returns:** *object*

* **body**: *any* = this.body

* **method**: *HttpMethod* = this.options.method

* ### **headers**: *object*

* ### **query**: *object*
