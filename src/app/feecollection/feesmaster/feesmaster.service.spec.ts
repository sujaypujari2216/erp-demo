import { TestBed } from '@angular/core/testing';

import { FeesmasterService } from './feesmaster.service';

describe('FeesmasterService', () => {
  let service: FeesmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeesmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
