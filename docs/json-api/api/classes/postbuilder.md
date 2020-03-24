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

**Parameters:**

Name | Type |
------ | ------ |
`httpClient` | HttpClient |
`uri` | string |

**Returns:** *[PostBuilder](postbuilder.md)*

## Properties

### `Optional` attributes

• **attributes**? : *undefined | object*

___

### `Optional` id

• **id**? : *undefined | string*

___

### `Protected` limit

• **limit**: *number* = DEFAULT_RESOURCE_LIMIT

*Inherited from [RequestBuilder](requestbuilder.md).[limit](requestbuilder.md#protected-limit)*

___

### `Protected` offset

• **offset**: *undefined | number*

*Inherited from [RequestBuilder](requestbuilder.md).[offset](requestbuilder.md#protected-offset)*

___

### `Protected` options

• **options**: *[Options](../interfaces/options.md)*

*Inherited from [RequestBuilder](requestbuilder.md).[options](requestbuilder.md#protected-options)*

___

### `Protected` page

• **page**: *number* = 1

*Inherited from [RequestBuilder](requestbuilder.md).[page](requestbuilder.md#protected-page)*

___

### `Protected` queryParams

• **queryParams**: *Record‹string, string›*

*Inherited from [RequestBuilder](requestbuilder.md).[queryParams](requestbuilder.md#protected-queryparams)*

___

### `Optional` relationships

• **relationships**? : *Record‹string, object›*

___

### `Protected` resolveIncludedRelationships

• **resolveIncludedRelationships**: *boolean* = false

*Inherited from [RequestBuilder](requestbuilder.md).[resolveIncludedRelationships](requestbuilder.md#protected-resolveincludedrelationships)*

___

### `Protected` sortParams

• **sortParams**: *string[]* = []

*Inherited from [RequestBuilder](requestbuilder.md).[sortParams](requestbuilder.md#protected-sortparams)*

___

### `Optional` type

• **type**? : *undefined | string*

___

###  uri

• **uri**: *string*

*Inherited from [RequestBuilder](requestbuilder.md).[uri](requestbuilder.md#uri)*

## Accessors

###  parameters

• **get parameters**(): *Record‹string, string›*

*Inherited from [RequestBuilder](requestbuilder.md).[parameters](requestbuilder.md#parameters)*

**Returns:** *Record‹string, string›*

## Methods

###  filter

▸ **filter**(`key`: string | string[] | undefined, `value`: string | number | boolean | undefined, `operator?`: [FilterOperator](../enums/filteroperator.md)): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[filter](requestbuilder.md#filter)*

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

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *this*

___

###  pageLimit

▸ **pageLimit**(`limit`: number): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[pageLimit](requestbuilder.md#pagelimit)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *this*

___

###  pageNumber

▸ **pageNumber**(`page`: number | string | undefined): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[pageNumber](requestbuilder.md#pagenumber)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | number &#124; string &#124; undefined |

**Returns:** *this*

___

###  pageOffset

▸ **pageOffset**(`offset`: number): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[pageOffset](requestbuilder.md#pageoffset)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *this*

___

###  parameter

▸ **parameter**(`key`: string, `value`: string | number | boolean | undefined): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[parameter](requestbuilder.md#parameter)*

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

**Parameters:**

Name | Type |
------ | ------ |
`resolveIncluded?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  send

▸ **send**(`options`: HttpOptions): *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

*Overrides [RequestBuilder](requestbuilder.md).[send](requestbuilder.md#abstract-send)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | HttpOptions | {} |

**Returns:** *Promise‹[JsonResponse](jsonresponse.md)‹Raw››*

___

###  sort

▸ **sort**(`key`: string | undefined, `order`: [SortOrder](../enums/sortorder.md)): *this*

*Inherited from [RequestBuilder](requestbuilder.md).[sort](requestbuilder.md#sort)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; undefined |
`order` | [SortOrder](../enums/sortorder.md) |

**Returns:** *this*

___

###  withAttributes

▸ **withAttributes**(`attributes`: object): *this*

**Parameters:**

Name | Type |
------ | ------ |
`attributes` | object |

**Returns:** *this*

___

###  withId

▸ **withId**(`id`: string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *this*

___

###  withRelationship

▸ **withRelationship**(`rel?`: undefined | object): *this*

**Parameters:**

Name | Type |
------ | ------ |
`rel?` | undefined &#124; object |

**Returns:** *this*
