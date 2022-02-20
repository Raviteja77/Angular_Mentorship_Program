import { CreationDatePipe } from './creation-date.pipe';

describe('CreationDatePipe', () => {
  it('create an instance', () => {
    const pipe = new CreationDatePipe();
    expect(pipe).toBeTruthy();
  });
});
