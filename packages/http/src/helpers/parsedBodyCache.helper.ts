type PromiseFunction<T> = () => Promise<T>;

export const cacheParsedBody = <T>(parsedBody: PromiseFunction<T>): PromiseFunction<T> => {
  let cache: T | undefined;
  let called = false;
  const onReady: (() => void)[] = [];

  return async (): Promise<T> => {
    if(cache){
      return cache;
    }
    if(called) {
      return new Promise(resolve => {
        onReady.push(() => {
          resolve(cache);
        });
      });
    }
    called = true;
    cache = await parsedBody();
    onReady.forEach(f => f());
    onReady.splice(0, onReady.length);
    return cache;
  };
};
