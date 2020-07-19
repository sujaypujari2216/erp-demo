import { TestBed } from '@angular/core/testing';

import { FeestypeService } from './feestype.service';

describe('FeestypeService', () => {
  let service: FeestypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeestypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
