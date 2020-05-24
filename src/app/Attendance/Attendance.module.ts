import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { AttendanceByDateComponent } from './attendance-by-date/attendance-by-date.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';



@NgModule({
  declarations: [
    StudentAttendanceComponent,
ApproveLeaveComponent,
AttendanceByDateComponent],
  imports: [
    CommonModule
  ]
})
export class AttendanceModule { }
