import { TestBed } from '@angular/core/testing';

import { ArtcodeAPIService } from './artcode-api.service';

describe('ArtcodeAPIService', () => {
  let service: ArtcodeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtcodeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
