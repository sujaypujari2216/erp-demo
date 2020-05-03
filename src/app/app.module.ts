import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './dashboard/home/home.component';

import { ParentinfoComponent } from './dashboard/parentinfo/parentinfo.component';

import { TeacherinfoComponent } from './dashboard/teacherinfo/teacherinfo.component';
import { OnlineAdmissionComponent } from './students_Info/online-admission/online-admission.component';
import { DisabledStudentsComponent } from './students_Info/disabled-students/disabled-students.component';
import { BulkDeleteComponent } from './students_Info/bulk-delete/bulk-delete.component';
import { DisableReasonComponent } from './students_Info/disable-reason/disable-reason.component';
import { MultiClassStudentComponent } from './students_Info/multi-class-student/multi-class-student.component';
import { StudentCategoriesComponent } from './students_Info/student-categories/student-categories.component';
import { StudentHouseComponent } from './students_Info/student-house/student-house.component';
import { AddParentsComponent } from './parents_Info/add-parents/add-parents.component';
import { ParentsdetailsComponent } from './parents_Info/parentsdetails/parentsdetails.component';
import { AddHomeworkComponent } from './Homework/add-homework/add-homework.component';
import { SearchHomeworkComponent } from './Homework/search-homework/search-homework.component';
import { RouteComponent } from './Transport/route/route.component';
import { VehicleComponent } from './Transport/vehicle/vehicle.component';
import { AssignVehicleComponent } from './Transport/assign-vehicle/assign-vehicle.component';
import { EventComponent } from './Frontcms/event/event.component';
import { GallaryComponent } from './Frontcms/gallary/gallary.component';
import { NewsComponent } from './Frontcms/news/news.component';
import { MediaManagerComponent } from './Frontcms/media-manager/media-manager.component';
import { PagesComponent } from './Frontcms/pages/pages.component';
import { MenusComponent } from './Frontcms/menus/menus.component';
import { BannerImagesComponent } from './Frontcms/banner-images/banner-images.component';
import { AdmitFormComponent } from './admit-form/admit-form.component';
import { CertificateModule } from './certificate/certificate.module';
import { ReportsModule } from './Reports/reports.module';
import { AddSComponent } from './human_resource/add-s/add-s.component';
import { ApplyLeaveComponent } from './human_resource/apply-leave/apply-leave.component';
import { ApproveLeaveRequestComponent } from './human_resource/approve-leave-request/approve-leave-request.component';
import { DepartmentComponent } from './human_resource/department/department.component';
import { DesignationComponent } from './human_resource/designation/designation.component';
import { DisabledStaffComponent } from './human_resource/disabled-staff/disabled-staff.component';
import { ImportStaffComponent } from './human_resource/import-staff/import-staff.component';
import { LeaveTypeComponent } from './human_resource/leave-type/leave-type.component';
import { PayrollComponent } from './human_resource/payroll/payroll.component';
import { StaffDirectoryComponent } from './human_resource/staff-directory/staff-directory.component';
import { StaffAttendanceComponent } from './human_resource/staff-attendance/staff-attendance.component';
import { TeachersRatingComponent } from './human_resource/teachers-rating/teachers-rating.component';
import { AddMoreComponent } from './human_resource/add-more/add-more.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      ParentinfoComponent,
      TeacherinfoComponent,
      AddParentsComponent,
    ParentsdetailsComponent,
    AddHomeworkComponent,
    SearchHomeworkComponent,
    RouteComponent,
    VehicleComponent,
    AssignVehicleComponent,
    EventComponent,
    GallaryComponent,
    NewsComponent,
    MediaManagerComponent,
    PagesComponent,
    MenusComponent,
    BannerImagesComponent,
    AdmitFormComponent,
    AddSComponent,
    ApproveLeaveRequestComponent,
    ApplyLeaveComponent,
    DepartmentComponent,
    DesignationComponent,
    DisabledStaffComponent,
    ImportStaffComponent,
    LeaveTypeComponent,
    PayrollComponent,
    StaffAttendanceComponent,
    StaffDirectoryComponent,
    TeachersRatingComponent,
    AddMoreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CertificateModule,
    ReportsModule,
   
    RouterModule.forRoot(
      [
        {path:'',redirectTo:'admin',pathMatch:'full'},
        {path:'admin',component:HomeComponent},
        {path:'parentsdetails',component:ParentsdetailsComponent},
        {path:'addparents',component:AddParentsComponent},
      ],{useHash:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
