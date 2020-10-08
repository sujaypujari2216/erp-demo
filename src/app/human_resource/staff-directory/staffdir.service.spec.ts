import { TestBed } from '@angular/core/testing';

import { StaffdirService } from './staffdir.service';

describe('StaffdirService', () => {
  let service: StaffdirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffdirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
