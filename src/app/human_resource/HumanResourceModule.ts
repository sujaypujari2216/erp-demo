import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HumanResourceRoutingModule } from './human_resource-routing.module';
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

@NgModule({
    declarations: [AddSComponent,ApproveLeaveRequestComponent,ApplyLeaveComponent,DepartmentComponent,
    DesignationComponent,DisabledStaffComponent,ImportStaffComponent,LeaveTypeComponent,
PayrollComponent,StaffDirectoryComponent,StaffAttendanceComponent,TeachersRatingComponent,AddMoreComponent],
    imports: [
        CommonModule,
        HumanResourceRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class HumanResourceModule {
}
