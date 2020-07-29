import { TestBed } from '@angular/core/testing';

import { OnlineexaminationService } from './onlineexamination.service';

describe('OnlineexaminationService', () => {
  let service: OnlineexaminationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineexaminationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
