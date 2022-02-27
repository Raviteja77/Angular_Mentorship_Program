import { GetAuthorsNamePipe } from './get-authors-name.pipe';

describe('GetAuthorsNamePipe', () => {
  it('create an instance', () => {
    const pipe = new GetAuthorsNamePipe();
    expect(pipe).toBeTruthy();
  });
});
