import { TestBed } from '@angular/core/testing';

import { ItemstoreService } from './itemstore.service';

describe('ItemstoreService', () => {
  let service: ItemstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
