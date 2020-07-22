import { TestBed } from '@angular/core/testing';

import { ItemsuppliersService } from './itemsuppliers.service';

describe('ItemsuppliersService', () => {
  let service: ItemsuppliersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsuppliersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
