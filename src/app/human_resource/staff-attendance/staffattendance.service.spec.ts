import { TestBed } from '@angular/core/testing';

import { StaffattendanceService } from './staffattendance.service';

describe('StaffattendanceService', () => {
  let service: StaffattendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffattendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
