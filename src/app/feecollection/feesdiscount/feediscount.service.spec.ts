import { TestBed } from '@angular/core/testing';

import { FeediscountService } from './feediscount.service';

describe('FeediscountService', () => {
  let service: FeediscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeediscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
