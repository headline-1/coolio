import { Promisable } from '../promisable';

export interface AuthStorage<T> {
  getData(): Promisable<T | undefined>;

  setData(t: T): Promisable;
}
