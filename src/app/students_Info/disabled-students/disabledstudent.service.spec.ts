import { TestBed } from '@angular/core/testing';
import { DisabledstudentService } from './disabledstudent.service';

describe('DisabledstudentService', () => {
  let service: DisabledstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisabledstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
