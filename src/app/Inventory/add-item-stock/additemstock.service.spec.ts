import { TestBed } from '@angular/core/testing';

import { AdditemstockService } from './additemstock.service';

describe('AdditemstockService', () => {
  let service: AdditemstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditemstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
