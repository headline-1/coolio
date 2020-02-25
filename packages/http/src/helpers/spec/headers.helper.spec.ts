import { getHeader, sanitizeHeaders } from '../headers.helper';

describe('headers.helper', () => {
  it('returns the correct header from an object, regardless of casing', () => {
    const headers = {
      'X-Header-1': 'value',
      'x-header-2': 'value2',
    };

    expect(getHeader(headers, 'x-header-1')).toEqual('value');
    expect(getHeader(headers, 'X-HEADER-1')).toEqual('value');
    expect(getHeader(headers, 'x-header-2')).toEqual('value2');
  });

  it('always returns a string if value is present', () => {
    const headers = {
      'x-1': '',
      'x-2': 2,
      'x-3': false,
    };

    expect(getHeader(headers, 'x-1')).toEqual('');
    expect(getHeader(headers, 'X-2')).toEqual('2');
    expect(getHeader(headers, 'x-3')).toEqual('false');
  });

  it('returns undefined if there is no header with specified name', () => {
    expect(getHeader({}, 'x-1')).toEqual(undefined);
  });

  it('returns undefined if headers are not present at all', () => {
    expect(getHeader(undefined, 'x-1')).toEqual(undefined);
    expect(getHeader(null as any, 'x-1')).toEqual(undefined);
  });

  describe('#sanitizeHeaders', () => {
    it('removes null or undefined headers', () => {
      expect(sanitizeHeaders({
        value: null,
        value2: undefined,
        value3: '',
      })).toEqual({
        value3: '',
      });
    });

    it('handles undefined header groups', () => {
      expect(sanitizeHeaders(undefined)).toEqual({});
      expect(sanitizeHeaders({ a: 'a' }, undefined)).toEqual({
        a: 'a',
      });
    });

    it('joins multiple header groups', () => {
      expect(sanitizeHeaders(
        {
          a: 'first',
          b: 'second',
        },
        {
          A: 'first override',
          c: 'third',
        }
      )).toEqual({
        a: 'first override',
        b: 'second',
        c: 'third',
      });
    });

    it('converts all headers to strings', () => {
      expect(sanitizeHeaders({
        n: 1,
        b: false,
        o: {},
        a: ['abc', 'def'],
        s: 'string',
      })).toEqual({
        n: '1',
        b: 'false',
        o: '[object Object]',
        a: 'abc,def',
        s: 'string',
      });
    });

    it('does not convert "not-own" properties', () => {
      const x = () => ({});
      x.test = 'value';
      expect(sanitizeHeaders(x)).toEqual({
        test: 'value',
      });
    });
  });
});
