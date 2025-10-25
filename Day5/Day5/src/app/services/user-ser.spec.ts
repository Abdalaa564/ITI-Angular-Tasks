import { TestBed } from '@angular/core/testing';

import { UserSer } from './user-ser';

describe('UserSer', () => {
  let service: UserSer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
