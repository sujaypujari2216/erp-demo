import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPayrollReportComponent } from './hr-payroll-report.component';

describe('PayrollReportComponent', () => {
  let component: HrPayrollReportComponent;
  let fixture: ComponentFixture<HrPayrollReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrPayrollReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPayrollReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
