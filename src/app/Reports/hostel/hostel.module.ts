import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostelRoutingModule } from './hostel-routing.module';
import { HostelReportComponent } from './hostel-report/hostel-report.component';


@NgModule({
  declarations: [HostelReportComponent],
  imports: [
    CommonModule,
    HostelRoutingModule
  ]
})
export class HostelModule { }
