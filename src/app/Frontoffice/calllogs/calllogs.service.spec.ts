import { TestBed } from '@angular/core/testing';

import { CalllogsService } from './calllogs.service';

describe('CalllogsService', () => {
  let service: CalllogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalllogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
