import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { StudentAttendanceTypeReportComponent } from './student-attendance-type-report/student-attendance-type-report.component';
import { StaffAttendanceReportComponent } from './staff-attendance-report/staff-attendance-report.component';
import { BiometricAttendanceLogComponent } from './biometric-attendance-log/biometric-attendance-log.component';


@NgModule({
  declarations: [AttendanceReportComponent, StudentAttendanceTypeReportComponent, StaffAttendanceReportComponent, BiometricAttendanceLogComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
