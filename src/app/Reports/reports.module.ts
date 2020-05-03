import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { StudentInformationModule } from './student-information/student-information.module';
import { FinanceModule } from './finance/finance.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ExaminationsModule } from './examinations/examinations.module';
import { OnlineExaminationsModule } from './online-examinations/online-examinations.module';
import { HumanResourcesModule } from './human-resources/human-resources.module';
import { LibraryModule } from './library/library.module';
import { InventoryModule } from './inventory/inventory.module';
import { TransportModule } from './transport/transport.module';
import { HostelModule } from './hostel/hostel.module';
import { UserLogModule } from './user-log/user-log.module';
import { AuditTrailModule } from './audit-trail/audit-trail.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    StudentInformationModule,
    FinanceModule,
    AttendanceModule,
    ExaminationsModule,
    OnlineExaminationsModule,
    HumanResourcesModule,
    LibraryModule,
    InventoryModule,
    TransportModule,
    HostelModule,
    UserLogModule,
    AuditTrailModule
  ],
  exports: [],
})
export class ReportsModule { }
