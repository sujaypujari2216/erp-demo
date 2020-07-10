import { TestBed } from '@angular/core/testing';

import { AddincomeService } from './addincome.service';

describe('AddincomeService', () => {
  let service: AddincomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddincomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
