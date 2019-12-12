type PromiseFunction<T> = () => Promise<T>;

const enum ParsedBodyCacheState {
  UNINITIALIZED,
  STARTED,
  FINISHED,
}

export const cacheParsedBody = <T>(parsedBody: PromiseFunction<T>): PromiseFunction<T> => {
  const queue: (() => void)[] = [];
  let body: any;
  let state = ParsedBodyCacheState.UNINITIALIZED;

  return async (): Promise<T> => {
    switch (state) {
      case ParsedBodyCacheState.UNINITIALIZED:
        state = ParsedBodyCacheState.STARTED;
        body = await parsedBody();
        state = ParsedBodyCacheState.FINISHED;
        queue.forEach(q => q());
        queue.splice(0, queue.length);
        return body;
      case ParsedBodyCacheState.STARTED:
        return new Promise(resolve => queue.push(() => resolve(body)));
      case ParsedBodyCacheState.FINISHED:
        return body;
    }
  };
};
