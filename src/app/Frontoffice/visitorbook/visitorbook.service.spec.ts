import { TestBed } from '@angular/core/testing';

import { VisitorbookService } from './visitorbook.service';

describe('VisitorbookService', () => {
  let service: VisitorbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
