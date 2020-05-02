import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineExamsRankReportComponent } from './online-exams-rank-report.component';

describe('OnlineExamsRankReportComponent', () => {
  let component: OnlineExamsRankReportComponent;
  let fixture: ComponentFixture<OnlineExamsRankReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineExamsRankReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineExamsRankReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
