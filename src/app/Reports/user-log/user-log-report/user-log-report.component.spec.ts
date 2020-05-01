import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogReportComponent } from './user-log-report.component';

describe('UserLogReportComponent', () => {
  let component: UserLogReportComponent;
  let fixture: ComponentFixture<UserLogReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLogReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
