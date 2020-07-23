import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddSComponent } from './add-s/add-s.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApproveLeaveRequestComponent } from './approve-leave-request/approve-leave-request.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { DisabledStaffComponent } from './disabled-staff/disabled-staff.component';
import { ImportStaffComponent } from './import-staff/import-staff.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { PayrollComponent } from './payroll/payroll.component';
import { StaffDirectoryComponent } from './staff-directory/staff-directory.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';
import { TeachersRatingComponent } from './teachers-rating/teachers-rating.component';
import { AddMoreComponent } from './add-more/add-more.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffAttendanceTypeComponent } from './staff-attendance-type/staff-attendance-type.component';


export const routes: Routes = [

  { path: 'add-s', component: AddSComponent },
  { path: 'apply-leave', component: ApplyLeaveComponent },
  { path: 'approve-leave-request', component: ApproveLeaveRequestComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'designation', component: DesignationComponent },
  { path: 'disabled-staff', component: DisabledStaffComponent },
  { path: 'import-staff', component: ImportStaffComponent },
  { path: 'leave-type', component: LeaveTypeComponent },
  { path: 'payroll', component: PayrollComponent },
  { path: 'staff-directory', component: StaffDirectoryComponent },
  { path: 'staff-attendance', component: StaffAttendanceComponent },
  { path: 'teachers-rating', component: TeachersRatingComponent },
  { path: 'add-more', component: AddMoreComponent },
  { path: 'staff-attendance-type', component: StaffAttendanceTypeComponent },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HumanResourceRoutingModule { }

