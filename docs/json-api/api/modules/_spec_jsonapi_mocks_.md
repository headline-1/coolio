[@coolio/json-api](../README.md) › ["spec/jsonApi.mocks"](_spec_jsonapi_mocks_.md)

# External module: "spec/jsonApi.mocks"

## Index

### Object literals

* [DEFAULT_HEADERS_MOCK](_spec_jsonapi_mocks_.md#const-default_headers_mock)
* [DELETE_MOCK](_spec_jsonapi_mocks_.md#const-delete_mock)
* [GET_LIST_MOCK](_spec_jsonapi_mocks_.md#const-get_list_mock)
* [GET_MOCK](_spec_jsonapi_mocks_.md#const-get_mock)
* [PATCH_MOCK](_spec_jsonapi_mocks_.md#const-patch_mock)
* [POST_EMPTY_MOCK](_spec_jsonapi_mocks_.md#const-post_empty_mock)
* [POST_MOCK](_spec_jsonapi_mocks_.md#const-post_mock)
* [PUT_MOCK](_spec_jsonapi_mocks_.md#const-put_mock)

## Object literals

### `Const` DEFAULT_HEADERS_MOCK

### ▪ **DEFAULT_HEADERS_MOCK**: *object*

*Defined in [spec/jsonApi.mocks.ts:3](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L3)*

###  Accept

• **Accept**: *string* = "application/vnd.api+json"

*Defined in [spec/jsonApi.mocks.ts:4](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L4)*

###  Content-Type

• **Content-Type**: *string* = "application/vnd.api+json"

*Defined in [spec/jsonApi.mocks.ts:5](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L5)*

___

### `Const` DELETE_MOCK

### ▪ **DELETE_MOCK**: *object*

*Defined in [spec/jsonApi.mocks.ts:183](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L183)*

###  URI

• **URI**: *string* = "https://example.com/delete"

*Defined in [spec/jsonApi.mocks.ts:184](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L184)*

___

### `Const` GET_LIST_MOCK

### ▪ **GET_LIST_MOCK**: *object*

*Defined in [spec/jsonApi.mocks.ts:49](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L49)*

###  PARSED

• **PARSED**: *object[]* = [
    {
      // Merged ID, type, attributes and self-link
      id: '123',
      type: 'testData',
      testField1: 'value1',
      testField2: 2,
      self: `/test/123`,
    },
  ]

*Defined in [spec/jsonApi.mocks.ts:100](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L100)*

###  URI

• **URI**: *string* = "https://example.com/list"

*Defined in [spec/jsonApi.mocks.ts:50](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L50)*

▪ **JSON_API**: *object*

*Defined in [spec/jsonApi.mocks.ts:51](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L51)*

* **data**: *object[]* = [
      {
        id: '123',
        type: 'testData',
        attributes: {
          test_field_1: 'value1',
          test_field_2: 2,
        },
        relationships: {},
        links: {
          self: `/test/123`,
        },
      },
    ]

* **links**: *object*

  * **first**: *string* = "/testList?page[offset]=0"

  * **last**: *string* = "/testList?page[offset]=0"

  * **self**: *string* = `/testList`

* **meta**: *object*

  * **total_resource_count**: *number* = 1

▪ **RAW**: *object*

*Defined in [spec/jsonApi.mocks.ts:75](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L75)*

* **data**: *object[]* = [
      {
        id: '123',
        type: 'testData',
        attributes: {
          testField1: 'value1',
          testField2: 2,
        },
        relationships: {},
        links: {
          self: `/test/123`,
        },
      },
    ]

* **links**: *object*

  * **first**: *string* = "/testList?page[offset]=0"

  * **last**: *string* = "/testList?page[offset]=0"

  * **self**: *string* = `/testList`

* **meta**: *object*

  * **totalResourceCount**: *number* = 1

___

### `Const` GET_MOCK

### ▪ **GET_MOCK**: *object*

*Defined in [spec/jsonApi.mocks.ts:8](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L8)*

###  URI

• **URI**: *string* = "https://example.com/list/123"

*Defined in [spec/jsonApi.mocks.ts:9](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L9)*

▪ **JSON_API**: *object*

*Defined in [spec/jsonApi.mocks.ts:10](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L10)*

* **data**: *object*

  * **id**: *string* = "123"

  * **relationships**(): *object*

  * **type**: *string* = "testData"

  * **attributes**: *object*

    * **test_field_1**: *string* = "value1"

    * **test_field_2**: *number* = 2

  * **links**: *object*

    * **self**: *string* = `/test/123`

▪ **PARSED**: *object*

*Defined in [spec/jsonApi.mocks.ts:39](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L39)*

* **id**: *string* = "123"

* **self**: *string* = `/test/123`

* **testField1**: *string* = "value1"

* **testField2**: *number* = 2

* **type**: *string* = "testData"

▪ **RAW**: *object*

*Defined in [spec/jsonApi.mocks.ts:24](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L24)*

* **data**: *object*

  * **id**: *string* = "123"

  * **relationships**(): *object*

  * **type**: *string* = "testData"

  * **attributes**: *object*

    * **testField1**: *string* = "value1"

    * **testField2**: *number* = 2

  * **links**: *object*

    * **self**: *string* = `/test/123`

___

### `Const` PATCH_MOCK

### ▪ **PATCH_MOCK**: *object*

*Defined in [spec/jsonApi.mocks.ts:181](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L181)*

###  URI

• **URI**: *string* = "https://example.com/patch"

*Defined in [spec/jsonApi.mocks.ts:181](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L181)*

___

### `Const` POST_EMPTY_MOCK

### ▪ **POST_EMPTY_MOCK**: *object*

*Defined in [spec/jsonApi.mocks.ts:143](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L143)*

###  URI

• **URI**: *string* = "https://example.com/post-empty"

*Defined in [spec/jsonApi.mocks.ts:145](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L145)*

___

### `Const` POST_MOCK

### ▪ **POST_MOCK**: *object*

*Defined in [spec/jsonApi.mocks.ts:112](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L112)*

###  URI

• **URI**: *string* = "https://example.com/post"

*Defined in [spec/jsonApi.mocks.ts:113](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L113)*

▪ **ATTRIBUTES**: *object*

*Defined in [spec/jsonApi.mocks.ts:114](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L114)*

* **attributeOne**: *string* = "value1"

* **attribute_two**: *string* = "value2"

▪ **BODY**: *object*

*Defined in [spec/jsonApi.mocks.ts:120](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L120)*

* **data**: *object*

  * **id**: *string* = "testId"

  * **type**: *string* = "testType"

  * **attributes**: *object*

    * **attribute_one**: *string* = "value1"

    * **attribute_two**: *string* = "value2"

  * **relationships**: *object*

    * **rel_name**: *object*

      * **data**: *object*

        * **id**: *string* = "uuid"

        * **type**: *string* = "relType"

    * **rel_name2**: *object*

      * **data**: *object*

        * **id**: *string* = "uuid2"

        * **type**: *string* = "relType2"

▪ **RELATIONSHIP**: *object*

*Defined in [spec/jsonApi.mocks.ts:118](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L118)*

* **name**: *string* = "relName"

* **type**: *string* = "relType"

* **uuid**: *string* = "uuid"

▪ **RELATIONSHIP_2**: *object*

*Defined in [spec/jsonApi.mocks.ts:119](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L119)*

* **name**: *string* = "relName2"

* **type**: *string* = "relType2"

* **uuid**: *string* = "uuid2"

___

### `Const` PUT_MOCK

### ▪ **PUT_MOCK**: *object*

*Defined in [spec/jsonApi.mocks.ts:148](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L148)*

###  ID

• **ID**: *string* = "testId"

*Defined in [spec/jsonApi.mocks.ts:150](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L150)*

###  TYPE

• **TYPE**: *string* = "testType"

*Defined in [spec/jsonApi.mocks.ts:151](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L151)*

###  URI

• **URI**: *string* = "https://example.com/put"

*Defined in [spec/jsonApi.mocks.ts:149](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L149)*

▪ **ATTRIBUTES**: *object*

*Defined in [spec/jsonApi.mocks.ts:152](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L152)*

* **attributeOne**: *string* = "value1"

* **attribute_two**: *string* = "value2"

▪ **BODY**: *object*

*Defined in [spec/jsonApi.mocks.ts:158](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L158)*

* **data**: *object*

  * **id**: *string* = "testId"

  * **type**: *string* = "testType"

  * **attributes**: *object*

    * **attribute_one**: *string* = "value1"

    * **attribute_two**: *string* = "value2"

  * **relationships**: *object*

    * **rel_name**: *object*

      * **data**: *object*

        * **id**: *string* = "uuid"

        * **type**: *string* = "relType"

    * **rel_name2**: *object*

      * **data**: *object*

        * **id**: *string* = "uuid2"

        * **type**: *string* = "relType2"

▪ **RELATIONSHIP**: *object*

*Defined in [spec/jsonApi.mocks.ts:156](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L156)*

* **name**: *string* = "relName"

* **type**: *string* = "relType"

* **uuid**: *string* = "uuid"

▪ **RELATIONSHIP_2**: *object*

*Defined in [spec/jsonApi.mocks.ts:157](https://github.com/headline-1/coolio/blob/32658f8/packages/json-api/src/spec/jsonApi.mocks.ts#L157)*

* **name**: *string* = "relName2"

* **type**: *string* = "relType2"

* **uuid**: *string* = "uuid2"
