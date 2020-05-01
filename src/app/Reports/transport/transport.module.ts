import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { TransportReportComponent } from './transport-report/transport-report.component';


@NgModule({
  declarations: [TransportReportComponent],
  imports: [
    CommonModule,
    TransportRoutingModule
  ]
})
export class TransportModule { }
