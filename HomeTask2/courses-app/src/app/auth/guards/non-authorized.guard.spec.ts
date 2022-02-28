import { TestBed } from '@angular/core/testing';

import { NonAuthorizedGuard } from './non-authorized.guard';

describe('NonAuthorizedGuard', () => {
  let guard: NonAuthorizedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NonAuthorizedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
