import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentInformationComponent } from './student-information.component';
import { StudentReportComponent } from './Modules/student-report/student-report.component';
import { GuardianReportComponent } from './Modules/guardian-report/guardian-report.component';
import { StudentHistoryComponent } from './Modules/student-history/student-history.component';
import { StudentLoginComponent } from './Modules/student-login/student-login.component';
import { ClassSubjectReportComponent } from './Modules/class-subject-report/class-subject-report.component';
import { AdmissionReportComponent } from './Modules/admission-report/admission-report.component';
import { SiblingReportComponent } from './Modules/sibling-report/sibling-report.component';
import { StudentProfileComponent } from './Modules/student-profile/student-profile.component';
import { HomeworkEvaluationReportComponent } from './Modules/homework-evaluation-report/homework-evaluation-report.component';


const routes: Routes = [
  { path: 'student-information', component: StudentInformationComponent},
  { path: 'student-report', component: StudentReportComponent},
  { path: 'guardian-report', component:GuardianReportComponent},
  {path: 'student-history-report', component: StudentHistoryComponent},
  {path: 'student-login-cerdential-report', component: StudentLoginComponent},
  {path: 'class-subject-report', component: ClassSubjectReportComponent},
  {path: 'admission-report', component: AdmissionReportComponent},
  {path: 'sibling-report', component: SiblingReportComponent},
  {path: 'student-profile-report', component: StudentProfileComponent},
  {path: 'homework-evaluation-report', component: HomeworkEvaluationReportComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentInformationRoutingModule { }
