import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLogRoutingModule } from './user-log-routing.module';
import { UserLogReportComponent } from './user-log-report/user-log-report.component';


@NgModule({
  declarations: [UserLogReportComponent],
  imports: [
    CommonModule,
    UserLogRoutingModule
  ]
})
export class UserLogModule { }
