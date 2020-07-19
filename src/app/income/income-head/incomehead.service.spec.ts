import { TestBed } from '@angular/core/testing';

import { IncomeheadService } from './incomehead.service';

describe('IncomeheadService', () => {
  let service: IncomeheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
