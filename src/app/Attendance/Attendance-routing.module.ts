import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { AttendanceByDateComponent } from './attendance-by-date/attendance-by-date.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';

const routes: Routes = [
    { path: 'student-attendance', component: StudentAttendanceComponent},
    { path: 'attendance-by-date', component: AttendanceByDateComponent},
    { path: 'approve-leave', component: ApproveLeaveComponent},
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AttendanceRoutingModule { }
