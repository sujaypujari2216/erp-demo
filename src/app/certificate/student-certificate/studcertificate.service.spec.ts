import { TestBed } from '@angular/core/testing';

import { StudcertificateService } from './studcertificate.service';

describe('StudcertificateService', () => {
  let service: StudcertificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudcertificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
