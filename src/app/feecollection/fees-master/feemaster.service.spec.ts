import { TestBed } from '@angular/core/testing';

import { FeemasterService } from './feemaster.service';

describe('FeemasterService', () => {
  let service: FeemasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeemasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
