import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanResourcesRoutingModule } from './human-resources-routing.module';
import { HrLinksComponent } from './hr-links/hr-links.component';
import { StaffReportComponent } from './staff-report/staff-report.component';
import { HrPayrollReportComponent } from './hr-payroll-report/hr-payroll-report.component';


@NgModule({
  declarations: [HrLinksComponent, StaffReportComponent, HrPayrollReportComponent],
  imports: [
    CommonModule,
    HumanResourcesRoutingModule
  ]
})
export class HumanResourcesModule { }
