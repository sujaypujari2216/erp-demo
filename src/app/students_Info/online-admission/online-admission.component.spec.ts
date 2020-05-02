import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineAdmissionComponent } from './online-admission.component';

describe('OnlineAdmissionComponent', () => {
  let component: OnlineAdmissionComponent;
  let fixture: ComponentFixture<OnlineAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
