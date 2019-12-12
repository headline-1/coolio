import { cacheParsedBody } from '../parsedBodyCache.helper';

describe('HttpClient Helpers #cacheParsedBody', () => {

  it('calls promise passed as an argument only once', async () => {
    const f = (() => {
      let calledTimes = 0;
      return async () => {
        if (calledTimes++ < 1) {
          return { a: 1 };
        }
        throw new Error('Called more than once.');
      };
    })();

    const parsedBody = cacheParsedBody(f);
    await expect(parsedBody()).resolves.toEqual({ a: 1 });
    await expect(parsedBody()).resolves.toEqual({ a: 1 });
  });

  it('works correctly when multiple calls are made before Promise resolves', async () => {
    let resolve: any;
    const f = () => new Promise(r => {
      resolve = r;
    });
    const parsedBody = cacheParsedBody(f);
    const results = [
      expect(parsedBody()).resolves.toEqual({ x: 2 }),
      expect(parsedBody()).resolves.toEqual({ x: 2 }),
      expect(parsedBody()).resolves.toEqual({ x: 2 }),
    ];
    resolve({ x: 2 });
    await Promise.all(results);
  });
});
