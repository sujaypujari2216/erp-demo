import { TestBed } from '@angular/core/testing';

import { AddrouteService } from './addroute.service';

describe('AddrouteService', () => {
  let service: AddrouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddrouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
