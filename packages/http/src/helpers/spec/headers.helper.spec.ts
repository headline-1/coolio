import { getHeader } from '../headers.helper';

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
});
