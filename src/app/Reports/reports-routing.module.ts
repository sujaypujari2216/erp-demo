import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentInformationRoutingModule } from './student-information/student-information-routing.module';
import { FinanceRoutingModule } from './finance/finance-routing.module';
import { AttendanceRoutingModule } from './attendance/attendance-routing.module';
import { ExaminationsRoutingModule } from './examinations/examinations-routing.module';
import { OnlineExaminationsRoutingModule } from './online-examinations/online-examinations-routing.module';
import { HumanResourcesRoutingModule } from './human-resources/human-resources-routing.module';
import { LibraryRoutingModule } from './library/library-routing.module';
import { InventoryRoutingModule } from './inventory/inventory-routing.module';
import { TransportRoutingModule } from './transport/transport-routing.module';
import { HostelRoutingModule } from './hostel/hostel-routing.module';
import { UserLogRoutingModule } from './user-log/user-log-routing.module';
import { AuditTrailRoutingModule } from './audit-trail/audit-trail-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes),
    StudentInformationRoutingModule,
    FinanceRoutingModule,
    AttendanceRoutingModule,
    ExaminationsRoutingModule,
    OnlineExaminationsRoutingModule,
    HumanResourcesRoutingModule,
    LibraryRoutingModule,
    InventoryRoutingModule,
    TransportRoutingModule,
    HostelRoutingModule,
    UserLogRoutingModule,
    AuditTrailRoutingModule  
  ],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
