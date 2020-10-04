import { TestBed } from '@angular/core/testing';

import { BulkdeleteService } from './bulkdelete.service';

describe('BulkdeleteService', () => {
  let service: BulkdeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulkdeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
