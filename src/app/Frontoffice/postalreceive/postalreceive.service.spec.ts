import { TestBed } from '@angular/core/testing';

import { PostalreceiveService } from './postalreceive.service';

describe('PostalreceiveService', () => {
  let service: PostalreceiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostalreceiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
