import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditTrailReportComponent } from './audit-trail-report/audit-trail-report.component';


const routes: Routes = [
  { path:'audit-trail-report',component:AuditTrailReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditTrailRoutingModule { }
