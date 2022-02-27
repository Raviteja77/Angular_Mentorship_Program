import { TestBed } from '@angular/core/testing';

import { AuthorsStoreService } from './authors-store.service';

describe('AuthorsStoreService', () => {
  let service: AuthorsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
