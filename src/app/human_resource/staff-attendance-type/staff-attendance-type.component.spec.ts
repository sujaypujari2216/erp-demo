import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAttendanceTypeComponent } from './staff-attendance-type.component';

describe('StaffAttendanceTypeComponent', () => {
  let component: StaffAttendanceTypeComponent;
  let fixture: ComponentFixture<StaffAttendanceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffAttendanceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAttendanceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
