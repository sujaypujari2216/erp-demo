import { TestBed } from '@angular/core/testing';

import { StudentshouseService } from './studentshouse.service';

describe('StudentshouseService', () => {
  let service: StudentshouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentshouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
