import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAdmitCardComponent } from './print-admit-card.component';

describe('PrintAdmitCardComponent', () => {
  let component: PrintAdmitCardComponent;
  let fixture: ComponentFixture<PrintAdmitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintAdmitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAdmitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
