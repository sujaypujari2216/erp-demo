import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemStockComponent } from './add-item-stock.component';

describe('AddItemStockComponent', () => {
  let component: AddItemStockComponent;
  let fixture: ComponentFixture<AddItemStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
