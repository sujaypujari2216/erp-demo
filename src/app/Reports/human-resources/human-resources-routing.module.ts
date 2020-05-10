import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrLinksComponent } from './hr-links/hr-links.component';
import { StaffReportComponent } from './staff-report/staff-report.component';
import { HrPayrollReportComponent } from './hr-payroll-report/hr-payroll-report.component';


const routes: Routes = [
  { path: 'human-resources', component: HrLinksComponent },
  { path: 'staff-report', component:StaffReportComponent},
  { path: 'hr-payroll-report', component:HrPayrollReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourcesRoutingModule { }
