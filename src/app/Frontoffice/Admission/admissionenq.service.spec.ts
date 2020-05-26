import { TestBed } from '@angular/core/testing';

import { AdmissionenqService } from './admissionenq.service';

describe('AdmissionenqService', () => {
  let service: AdmissionenqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionenqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
