/* eslint-disable @typescript-eslint/camelcase */

export const DEFAULT_HEADERS_MOCK = {
  'Accept': 'application/vnd.api+json',
  'Content-Type': 'application/vnd.api+json',
};

export const GET_MOCK = {
  URI: 'https://example.com/list/123',
  JSON_API: {
    data: {
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
  },
  RAW: {
    // All attributes converted to camelCase
    data: {
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
  },
  PARSED: {
    // Merged ID, type, attributes and self-link
    id: '123',
    type: 'testData',
    testField1: 'value1',
    testField2: 2,
    self: `/test/123`,
  },
};

export const GET_LIST_MOCK = {
  URI: 'https://example.com/list',
  JSON_API: {
    data: [
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
    ],
    links: {
      self: `/testList`,
      first: '/testList?page[offset]=0',
      last: '/testList?page[offset]=0',
    },
    meta: {
      total_resource_count: 1,
    },
  },
  RAW: {
    // All attributes converted to camelCase
    data: [
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
    ],
    links: {
      self: `/testList`,
      first: '/testList?page[offset]=0',
      last: '/testList?page[offset]=0',
    },
    meta: {
      totalResourceCount: 1,
    },
  },
  PARSED: [
    {
      // Merged ID, type, attributes and self-link
      id: '123',
      type: 'testData',
      testField1: 'value1',
      testField2: 2,
      self: `/test/123`,
    },
  ],
};

export const POST_MOCK = {
  URI: 'https://example.com/post',
  ATTRIBUTES: {
    attributeOne: 'value1',
    attribute_two: 'value2',
  },
  RELATIONSHIP: { name: 'relName', uuid: 'uuid', type: 'relType' },
  RELATIONSHIP_2: { name: 'relName2', uuid: 'uuid2', type: 'relType2' },
  BODY: {
    data: {
      id: 'testId',
      type: 'testType',
      attributes: { attribute_one: 'value1', attribute_two: 'value2' },
      relationships: {
        rel_name: {
          data: {
            id: 'uuid',
            type: 'relType',
          },
        },
        rel_name2: {
          data: {
            id: 'uuid2',
            type: 'relType2',
          },
        },
      },
    },
  },
};

export const POST_EMPTY_MOCK = {
  ...POST_MOCK,
  URI: 'https://example.com/post-empty',
};

export const PUT_MOCK = {
  URI: 'https://example.com/put',
  ID: 'testId',
  TYPE: 'testType',
  ATTRIBUTES: {
    attributeOne: 'value1',
    attribute_two: 'value2',
  },
  RELATIONSHIP: { name: 'relName', uuid: 'uuid', type: 'relType' },
  RELATIONSHIP_2: { name: 'relName2', uuid: 'uuid2', type: 'relType2' },
  BODY: {
    data: {
      id: 'testId',
      type: 'testType',
      attributes: { attribute_one: 'value1', attribute_two: 'value2' },
      relationships: {
        rel_name: {
          data: {
            id: 'uuid',
            type: 'relType',
          },
        },
        rel_name2: {
          data: {
            id: 'uuid2',
            type: 'relType2',
          },
        },
      },
    },
  },
};

export const PATCH_MOCK = { ...PUT_MOCK, URI: 'https://example.com/patch' };

export const DELETE_MOCK = {
  URI: 'https://example.com/delete',
};
