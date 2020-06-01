import { TestBed } from '@angular/core/testing';
import { StudcategoryService } from './studcategory.service';

describe('StudcategoryService', () => {
  let service: StudcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
