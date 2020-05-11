import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineExamsAttemptReportComponent } from './online-exams-attempt-report.component';

describe('OnlineExamsAttemptReportComponent', () => {
  let component: OnlineExamsAttemptReportComponent;
  let fixture: ComponentFixture<OnlineExamsAttemptReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineExamsAttemptReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineExamsAttemptReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
