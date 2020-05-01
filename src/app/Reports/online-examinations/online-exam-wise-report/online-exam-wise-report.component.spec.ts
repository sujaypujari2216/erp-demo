import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineExamWiseReportComponent } from './online-exam-wise-report.component';

describe('OnlineExamWiseReportComponent', () => {
  let component: OnlineExamWiseReportComponent;
  let fixture: ComponentFixture<OnlineExamWiseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineExamWiseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineExamWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
