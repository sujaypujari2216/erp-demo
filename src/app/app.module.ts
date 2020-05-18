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
import { ReportsModule } from "./Reports/ReportsModule";
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
import { AcademicsModule } from './academics/academics.module';
import { DatatableService } from './shared/datatableservice/datatable.service';
import { AddIncomeComponent } from './income/add-income/add-income.component';
import { AddExpensesComponent } from './expenses/add-expenses/add-expenses.component';
import { SearchExpensesComponent } from './expenses/search-expenses/search-expenses.component';
import { ExpensesHeadComponent } from './expenses/expenses-head/expenses-head.component';
import { AddParentsComponent } from './parents_Info/add-parents/add-parents.component';
import { AddMoreStudComponent } from './parents_Info/add-more/add-more.component';
import { CreateComponent } from './create/create.component';
import { AddGalleryComponent } from './add-gallery/add-gallery.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddPageComponent } from './add-page/add-page.component';
import { StudentAttendanceComponent } from './Attendance/student-attendance/student-attendance.component';
import { AttendanceByDateComponent } from './Attendance/attendance-by-date/attendance-by-date.component';
import { ApproveLeaveComponent } from './Attendance/approve-leave/approve-leave.component';
import { FeesGroupAssignComponent } from './feecollection/fees-group-assign/fees-group-assign.component';
import { AddExamComponent } from './Examination/add-exam/add-exam.component';
import { CreateTtComponent } from './create-tt/create-tt.component';
import { Issue1Component } from './Library/issue-return/issue1/issue1.component';










@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      ParentinfoComponent,
      TeacherinfoComponent,

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
    AddParentsComponent,
    AddMoreStudComponent,
    
  
    AddIncomeComponent,
    AddExpensesComponent,
    SearchExpensesComponent,
    ExpensesHeadComponent,
    CreateComponent,
    AddGalleryComponent,
    AddNewsComponent,
    AddPageComponent,
    StudentAttendanceComponent,
    AttendanceByDateComponent,
    ApproveLeaveComponent,
    FeesGroupAssignComponent,
    AddExamComponent,
    CreateTtComponent,
    Issue1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CertificateModule,
    ReportsModule,
    AcademicsModule,
    RouterModule,
    RouterModule.forRoot(
      [
        {path:'',redirectTo:'admin',pathMatch:'full'},
        {path:'admin',component:HomeComponent},
        {path:'parentsdetails',component:ParentsdetailsComponent},
        {path:'addparents',component:AddParentsComponent},
        {path:'add-more-stud',component:AddMoreStudComponent}
      ],{useHash:true}
      
    )
  ],
  providers: [DatatableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
