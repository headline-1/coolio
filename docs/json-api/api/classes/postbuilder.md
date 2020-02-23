# Class: PostBuilder <**Raw**>

## Type parameters

▪ **Raw**: *[RawResponse](../interfaces/rawresponse.md)‹any, any›*

## Hierarchy

* [RequestBuilder](requestbuilder.md)‹[JsonResponse](jsonresponse.md)‹Raw››

  ↳ **PostBuilder**

## Index

### Constructors

* [constructor](postbuilder.md#constructor)

### Properties

* [attributes](postbuilder.md#optional-attributes)
* [id](postbuilder.md#optional-id)
* [limit](postbuilder.md#protected-limit)
* [offset](postbuilder.md#protected-offset)
* [options](postbuilder.md#protected-options)
* [page](postbuilder.md#protected-page)
* [queryParams](postbuilder.md#protected-queryparams)
* [relationships](postbuilder.md#optional-relationships)
* [resolveIncludedRelationships](postbuilder.md#protected-resolveincludedrelationships)
* [sortParams](postbuilder.md#protected-sortparams)
* [type](postbuilder.md#optional-type)
* [uri](postbuilder.md#uri)

### Accessors

* [parameters](postbuilder.md#parameters)

### Methods

* [filter](postbuilder.md#filter)
* [ofType](postbuilder.md#oftype)
* [pageLimit](postbuilder.md#pagelimit)
* [pageNumber](postbuilder.md#pagenumber)
* [pageOffset](postbuilder.md#pageoffset)
* [parameter](postbuilder.md#parameter)
* [parseResponse](postbuilder.md#protected-parseresponse)
* [resolveIncluded](postbuilder.md#resolveincluded)
* [send](postbuilder.md#send)
* [sort](postbuilder.md#sort)
* [withAttributes](postbuilder.md#withattributes)
* [withId](postbuilder.md#withid)
* [withRelationship](postbuilder.md#withrelationship)

## Constructors

###  constructor

\+ **new PostBuilder**(`httpClient`: HttpClient, `uri`: string): *[PostBuilder](postbuilder.md)*

*Overrides [RequestBuilder](requestbuilder.md).[constructor](requestbuilder.md#protected-constructor)*

*Defined in [jsonApi.post.ts:10](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.post.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |
`uri` | string |

**Returns:** *[PostBuilder](postbuilder.md)*

## Properties

### `Optional` attributes

• **attributes**? : *undefined | object*

*Defined in [jsonApi.post.ts:9](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.post.ts#L9)*

___

### `Optional` id

• **id**? : *undefined | string*

*Defined in [jsonApi.post.ts:8](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.post.ts#L8)*

___

### `Protected` limit

• **limit**: *number* = DEFAULT_RESOURCE_LIMIT

*Inherited from [RequestBuilder](requestbuilder.md).[limit](requestbuilder.md#protected-limit)*

*Defined in [jsonApi.builder.ts:19](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L19)*

___

### `Protected` offset

• **offset**: *undefined | number*

*Inherited from [RequestBuilder](requestbuilder.md).[offset](requestbuilder.md#protected-offset)*

*Defined in [jsonApi.builder.ts:20](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L20)*

___

### `Protected` options

• **options**: *[Options](../interfaces/options.md)*

*Inherited from [RequestBuilder](requestbuilder.md).[options](requestbuilder.md#protected-options)*

*Defined in [jsonApi.builder.ts:23](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L23)*

___

### `Protected` page

• **page**: *number* = 1

*Inherited from [RequestBuilder](requestbuilder.md).[page](requestbuilder.md#protected-page)*

*Defined in [jsonApi.builder.ts:21](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L21)*

___

### `Protected` queryParams

• **queryParams**: *Record‹string, string›*

*Inherited from [RequestBuilder](requestbuilder.md).[queryParams](requestbuilder.md#protected-queryparams)*

*Defined in [jsonApi.builder.ts:17](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L17)*

___

### `Optional` relationships

• **relationships**? : *Record‹string, object›*

*Defined in [jsonApi.post.ts:10](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.post.ts#L10)*

___

### `Protected` resolveIncludedRelationships

• **resolveIncludedRelationships**: *boolean* = false

*Inherited from [RequestBuilder](requestbuilder.md).[resolveIncludedRelationships](requestbuilder.md#protected-resolveincludedrelationships)*

*Defined in [jsonApi.builder.ts:16](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L16)*

___

### `Protected` sortParams

• **sortParams**: *string[]* = []

*Inherited from [RequestBuilder](requestbuilder.md).[sortParams](requestbuilder.md#protected-sortparams)*

*Defined in [jsonApi.builder.ts:18](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L18)*

___

### `Optional` type

• **type**? : *undefined | string*

*Defined in [jsonApi.post.ts:7](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.post.ts#L7)*

___

###  uri

• **uri**: *string*

*Inherited from [RequestBuilder](requestbuilder.md).[uri](requestbuilder.md#uri)*

*Defined in [jsonApi.builder.ts:15](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L15)*

## Accessors

###  parameters

• **get parameters**(): *Record‹string, string›*

*Inherited from [RequestBuilder](requestbuilder.md).[parameters](requestbuilder.md#parameters)*

*Defined in [jsonApi.builder.ts:50](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L50)*

**Returns:** *Record‹string, string›*

## Methods

###  filter

▸ **filter**(`key`: string | string[] | undefined, `value`: string | number | boolean | undefined, `operator?`: [FilterOperator](../enums/filteroperator.md)): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[filter](requestbuilder.md#filter)*

*Defined in [jsonApi.builder.ts:84](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; string[] &#124; undefined |
`value` | string &#124; number &#124; boolean &#124; undefined |
`operator?` | [FilterOperator](../enums/filteroperator.md) |

**Returns:** *this*

___

###  ofType

▸ **ofType**(`type`: string): *this*

*Defined in [jsonApi.post.ts:16](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.post.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *this*

___

###  pageLimit

▸ **pageLimit**(`limit`: number): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[pageLimit](requestbuilder.md#pagelimit)*

*Defined in [jsonApi.builder.ts:102](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *this*

___

###  pageNumber

▸ **pageNumber**(`page`: number | string | undefined): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[pageNumber](requestbuilder.md#pagenumber)*

*Defined in [jsonApi.builder.ts:112](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | number &#124; string &#124; undefined |

**Returns:** *this*

___

###  pageOffset

▸ **pageOffset**(`offset`: number): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[pageOffset](requestbuilder.md#pageoffset)*

*Defined in [jsonApi.builder.ts:107](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *this*

___

###  parameter

▸ **parameter**(`key`: string, `value`: string | number | boolean | undefined): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[parameter](requestbuilder.md#parameter)*

*Defined in [jsonApi.builder.ts:74](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string &#124; number &#124; boolean &#124; undefined |

**Returns:** *this*

___

### `Protected` parseResponse

▸ **parseResponse**<**Raw**>(`response`: HttpResponse): *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

*Inherited from [RequestBuilder](requestbuilder.md).[parseResponse](requestbuilder.md#protected-parseresponse)*

*Defined in [jsonApi.builder.ts:117](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L117)*

**Type parameters:**

▪ **Raw**: *[RawResponse](../interfaces/rawresponse.md)‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | HttpResponse |

**Returns:** *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

___

###  resolveIncluded

▸ **resolveIncluded**(`resolveIncluded?`: undefined | false | true): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[resolveIncluded](requestbuilder.md#resolveincluded)*

*Defined in [jsonApi.builder.ts:69](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  send

▸ **send**(`options`: HttpOptions): *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

*Overrides [RequestBuilder](requestbuilder.md).[send](requestbuilder.md#abstract-send)*

*Defined in [jsonApi.post.ts:43](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.post.ts#L43)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | HttpOptions | {} |

**Returns:** *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

___

###  sort

▸ **sort**(`key`: string | undefined, `order`: [SortOrder](../enums/sortorder.md)): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[sort](requestbuilder.md#sort)*

*Defined in [jsonApi.builder.ts:95](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.builder.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; undefined |
`order` | [SortOrder](../enums/sortorder.md) |

**Returns:** *this*

___

###  withAttributes

▸ **withAttributes**(`attributes`: object): *this*

*Defined in [jsonApi.post.ts:26](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.post.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`attributes` | object |

**Returns:** *this*

___

###  withId

▸ **withId**(`id`: string): *this*

*Defined in [jsonApi.post.ts:21](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.post.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *this*

___

###  withRelationship

▸ **withRelationship**(`rel?`: undefined | object): *this*

*Defined in [jsonApi.post.ts:31](https://github.com/headline-1/coolio/blob/420fd1d/packages/json-api/src/jsonApi.post.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`rel?` | undefined &#124; object |

**Returns:** *this*
