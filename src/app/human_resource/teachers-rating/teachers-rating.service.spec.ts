import { TestBed } from '@angular/core/testing';

import { TeachersRatingService } from './teachers-rating.service';

describe('TeachersRatingService', () => {
  let service: TeachersRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachersRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
