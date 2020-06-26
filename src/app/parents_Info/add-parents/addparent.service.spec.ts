import { TestBed } from '@angular/core/testing';

import { AddparentService } from './addparent.service';

describe('AddparentService', () => {
  let service: AddparentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddparentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
