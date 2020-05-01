import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineExaminationLinksComponent } from './online-examination-links/online-examination-links.component';
import { OnlineExamWiseReportComponent } from './online-exam-wise-report/online-exam-wise-report.component';
import { OnlineExamsReportComponent } from './online-exams-report/online-exams-report.component';
import { OnlineExamsAttemptReportComponent } from './online-exams-attempt-report/online-exams-attempt-report.component';
import { OnlineExamsRankReportComponent } from './online-exams-rank-report/online-exams-rank-report.component';


const routes: Routes = [
  { path:'online-examinations', component: OnlineExaminationLinksComponent },
  { path:'online-exam-wise-report' ,component:OnlineExamWiseReportComponent},
  { path:'online-exams-report' ,component:OnlineExamsReportComponent},
  { path:'online-exams-attempt-report' ,component:OnlineExamsAttemptReportComponent},
  { path:'online-exams-rank-report' ,component:OnlineExamsRankReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineExaminationsRoutingModule { }
