type QueueItem = {
  run: () => Promise<void>;
  fail: (reason: any) => void;
} ;

/**
 * Simple queue that executes Promises one by one.
 *
 */
export class SimpleQueue {
  private readonly items: QueueItem[] = [];
  private isRunning = false;

  /**
   * Queues specified promise and returns when it's done
   */
  put<T>(item: () => Promise<T>): Promise<T> {
    const result = new Promise<T>((resolve, reject) => {
      this.items.push({
        run: async () => {
          await item().then(resolve, reject);
        },
        fail: () => {
          reject(new Error());
        },
      });
    });
    this.next();
    return result;
  }

  get length(){
    return this.items.length;
  }

  clean() {
    this.items.splice(0, this.items.length);
  }

  private next() {
    if (this.isRunning) {
      return;
    }
    const item = this.items.shift();
    if (!item) {
      return;
    }
    this.isRunning = true;
    item.run().then(() => {
      this.isRunning = false;
      this.next();
    });
  }
}
