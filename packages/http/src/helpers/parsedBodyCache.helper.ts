type PromiseFunction<T> = () => Promise<T>;

const enum ParsedBodyCacheState {
  UNINITIALIZED,
  STARTED,
  FINISHED,
}

/**
 * This is not a regular cache!
 * This function is only used across subsequent executions of parsedBody() on a single HttpResponse.
 * To implement cache, make use of interceptors.
 *
 * @param parsedBody - a promise function returning parsed body, which in most cases can be called only once
 * @returns a promise function returning body, it can be called many times
 */
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
