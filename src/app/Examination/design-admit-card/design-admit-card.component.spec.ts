import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAdmitCardComponent } from './design-admit-card.component';

describe('DesignAdmitCardComponent', () => {
  let component: DesignAdmitCardComponent;
  let fixture: ComponentFixture<DesignAdmitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignAdmitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignAdmitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
