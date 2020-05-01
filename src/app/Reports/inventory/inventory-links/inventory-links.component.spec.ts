import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLinksComponent } from './inventory-links.component';

describe('InventoryLinksComponent', () => {
  let component: InventoryLinksComponent;
  let fixture: ComponentFixture<InventoryLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
