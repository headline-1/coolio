import { AuthStorage } from './authStorage.types';

export class InMemoryAuthStorage<T> implements AuthStorage<T> {
  private data?: T;

  getData(): T | undefined {
    return this.data;
  }

  setData(data: T): void {
    this.data = data;
  }
}
