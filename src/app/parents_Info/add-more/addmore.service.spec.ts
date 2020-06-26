import { TestBed } from '@angular/core/testing';

import { AddmoreService } from './addmore.service';

describe('AddmoreService', () => {
  let service: AddmoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
