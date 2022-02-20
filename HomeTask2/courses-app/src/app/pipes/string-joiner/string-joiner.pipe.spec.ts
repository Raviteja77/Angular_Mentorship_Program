import { StringJoinerPipe } from './string-joiner.pipe';

describe('StringJoinerPipe', () => {
  it('create an instance', () => {
    const pipe = new StringJoinerPipe();
    expect(pipe).toBeTruthy();
  });
});
