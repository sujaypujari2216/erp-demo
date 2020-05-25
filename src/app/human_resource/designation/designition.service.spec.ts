import { TestBed } from '@angular/core/testing';

import { DesignitionService } from './designition.service';

describe('DesignitionService', () => {
  let service: DesignitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
