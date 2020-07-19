import { TestBed } from '@angular/core/testing';

import { ExpenseheadService } from './expensehead.service';

describe('ExpenseheadService', () => {
  let service: ExpenseheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
