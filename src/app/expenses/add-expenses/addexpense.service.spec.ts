import { TestBed } from '@angular/core/testing';

import { AddexpenseService } from './addexpense.service';

describe('AddexpenseService', () => {
  let service: AddexpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddexpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
