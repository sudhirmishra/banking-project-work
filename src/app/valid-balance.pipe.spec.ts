import { ValidBalancePipe } from './valid-balance.pipe';

describe('ValidBalancePipe', () => {
  it('create an instance', () => {
    const pipe = new ValidBalancePipe();
    expect(pipe).toBeTruthy();
  });
});
