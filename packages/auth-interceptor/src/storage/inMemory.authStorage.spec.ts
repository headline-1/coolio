import { InMemoryAuthStorage } from './inMemory.authStorage';

describe('InMemoryAuthStorage', () => {
  it('is empty after initialization', async () => {
    const storage = new InMemoryAuthStorage();
    expect(storage.getData()).toEqual(undefined);
  });

  it('stores passed content', async () => {
    const storage = new InMemoryAuthStorage();
    storage.setData('test');
    expect(storage.getData()).toEqual('test');
  });
});
