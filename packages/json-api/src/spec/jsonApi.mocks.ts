import { HttpMethod } from '@coolio/http';

export const DefaultHeadersMock = {
  'Accept': 'application/vnd.api+json',
  'Content-Type': 'application/vnd.api+json',
};

export const GetMock = {
  uri: 'https://example.com/list/123',
  raw: {
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
  parsed: {
    // Merged ID, type, attributes and self-link
    id: '123',
    type: 'testData',
    testField1: 'value1',
    testField2: 2,
    self: `/test/123`,
  },
};

export const GetListMock = {
  uri: 'https://example.com/list',
  raw: {
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
  parsed: [
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

export const CreationalMock = {
  attributes: {
    attributeOne: 'value1',
    attributeTwo: 'value2',
  },
  relationships: [
    { name: 'relName', uuid: 'uuid', type: 'relType' },
    { name: 'relName2', uuid: 'uuid2', type: 'relType2' },
  ],
  body: {
    data: {
      id: 'testId',
      type: 'testType',
      attributes: { attributeOne: 'value1', attributeTwo: 'value2' },
      relationships: {
        relName: {
          data: {
            id: 'uuid',
            type: 'relType',
          },
        },
        relName2: {
          data: {
            id: 'uuid2',
            type: 'relType2',
          },
        },
      },
    },
  },
};

export const PostMock = {
  uri: 'https://example.com/post',
  id: 'postId',
  type: 'postType',
  ...CreationalMock,
};

export const PostEmptyMock = {
  ...PostMock,
  uri: 'https://example.com/post-empty',
};

export const PutMock = {
  uri: 'https://example.com/put',
  id: 'putId',
  type: 'putType',
  ...CreationalMock,
};

export const PatchMock = {
  uri: 'https://example.com/patch',
  id: 'patchId',
  type: 'patchType',
  ...CreationalMock,
};

export const DeleteMock = {
  uri: 'https://example.com/delete',
};

export const CreationalMocksMap = {
  [HttpMethod.POST]: PostMock,
  [HttpMethod.PATCH]: PatchMock,
  [HttpMethod.PUT]: PutMock,
};
