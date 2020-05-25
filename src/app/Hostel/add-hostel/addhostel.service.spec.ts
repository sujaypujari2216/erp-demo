import { TestBed } from '@angular/core/testing';

import { AddhostelService } from './addhostel.service';

describe('AddhostelService', () => {
  let service: AddhostelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddhostelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
