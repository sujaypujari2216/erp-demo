import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AttendanceLinksComponent } from './attendance-links/attendance-links.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { StudentAttendanceTypeReportComponent } from './student-attendance-type-report/student-attendance-type-report.component';
import { StaffAttendanceReportComponent } from './staff-attendance-report/staff-attendance-report.component';
import { BiometricAttendanceLogComponent } from './biometric-attendance-log/biometric-attendance-log.component';



const routes: Routes = [
  { path: 'attendance', component: AttendanceLinksComponent },
  { path: 'attendance-report', component: AttendanceReportComponent },
  { path:'student-attendance-type-report', component: StudentAttendanceTypeReportComponent },
  { path: 'staff-attendance-report', component: StaffAttendanceReportComponent },
  { path: 'biometric-attendance-log', component: BiometricAttendanceLogComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  //exports: [RouterModule]
})
export class AttendanceRoutingModule { }
