import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditTrailRoutingModule } from './audit-trail-routing.module';
import { AuditTrailReportComponent } from './audit-trail-report/audit-trail-report.component';


@NgModule({
  declarations: [AuditTrailReportComponent],
  imports: [
    CommonModule,
    AuditTrailRoutingModule
  ]
})
export class AuditTrailModule { }
