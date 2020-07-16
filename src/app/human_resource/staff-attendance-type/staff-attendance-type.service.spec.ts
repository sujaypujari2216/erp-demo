import { TestBed } from '@angular/core/testing';

import { StaffAttendanceTypeService } from './staff-attendance-type.service';

describe('StaffAttendanceTypeService', () => {
  let service: StaffAttendanceTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffAttendanceTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
