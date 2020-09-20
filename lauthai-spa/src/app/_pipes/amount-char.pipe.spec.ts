import { AmountCharPipe } from './amount-char.pipe';

describe('AmountCharPipe', () => {
  it('create an instance', () => {
    const pipe = new AmountCharPipe();
    expect(pipe).toBeTruthy();
  });
});
