import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineExamsReportComponent } from './online-exams-report.component';

describe('OnlineExamsReportComponent', () => {
  let component: OnlineExamsReportComponent;
  let fixture: ComponentFixture<OnlineExamsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineExamsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineExamsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
