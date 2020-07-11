import { TestBed } from '@angular/core/testing';

import { DisabledreasonService } from './disabledreason.service';

describe('DisabledreasonService', () => {
  let service: DisabledreasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisabledreasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
