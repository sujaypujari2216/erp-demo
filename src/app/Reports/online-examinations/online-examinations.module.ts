import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineExaminationsRoutingModule } from './online-examinations-routing.module';
import { OnlineExaminationLinksComponent } from './online-examination-links/online-examination-links.component';
import { OnlineExamWiseReportComponent } from './online-exam-wise-report/online-exam-wise-report.component';
import { OnlineExamsReportComponent } from './online-exams-report/online-exams-report.component';
import { OnlineExamsAttemptReportComponent } from './online-exams-attempt-report/online-exams-attempt-report.component';
import { OnlineExamsRankReportComponent } from './online-exams-rank-report/online-exams-rank-report.component';


@NgModule({
  declarations: [OnlineExaminationLinksComponent, OnlineExamWiseReportComponent, OnlineExamsReportComponent, OnlineExamsAttemptReportComponent, OnlineExamsRankReportComponent],
  imports: [
    CommonModule,
    OnlineExaminationsRoutingModule
  ]
})
export class OnlineExaminationsModule { }
