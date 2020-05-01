import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StudentsdetailsComponent } from './studentsdetails/studentsdetails.component';
import { AdmissionformComponent } from './admissionform/admissionform.component';
import { OnlineAdmissionComponent } from './online-admission/online-admission.component';
import { DisabledStudentsComponent } from './disabled-students/disabled-students.component';
import { BulkDeleteComponent } from './bulk-delete/bulk-delete.component';
import { DisableReasonComponent } from './disable-reason/disable-reason.component';
import { MultiClassStudentComponent } from './multi-class-student/multi-class-student.component';
import { StudentCategoriesComponent } from './student-categories/student-categories.component';
import { StudentHouseComponent } from './student-house/student-house.component';


const routes: Routes = [
  {path:'bulkdelete',component:BulkDeleteComponent},
  {path:'admissionform',component:AdmissionformComponent},
  {path:'disablereason',component:DisableReasonComponent},
  {path:'disabledstudent',component:DisabledStudentsComponent},
  {path:'multiclassstudent',component:MultiClassStudentComponent},
  {path:'onlineadmission',component:OnlineAdmissionComponent},
  {path:'studentcategories',component:StudentCategoriesComponent},
  {path:'studenthouse',component:StudentHouseComponent},
  {path:'studentdetails',component:StudentsdetailsComponent},
  
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentRoutingModule { }
