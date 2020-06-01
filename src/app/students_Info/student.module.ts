import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { StudentRoutingModule } from '../students_Info/student-routing.module';
import { StudentsdetailsComponent } from './studentsdetails/studentsdetails.component';
import { AdmissionformComponent } from './admissionform/admissionform.component';
import { OnlineAdmissionComponent } from './online-admission/online-admission.component';
import { DisabledStudentsComponent } from './disabled-students/disabled-students.component';
import { BulkDeleteComponent } from './bulk-delete/bulk-delete.component';
import { DisableReasonComponent } from './disable-reason/disable-reason.component';
import { MultiClassStudentComponent } from './multi-class-student/multi-class-student.component';
import { StudentCategoriesComponent } from './student-categories/student-categories.component';
import { StudentHouseComponent } from './student-house/student-house.component';
import { ImportStudentComponent } from './import-student/import-student.component';


@NgModule({
  declarations: [ImportStudentComponent, StudentCategoriesComponent,StudentHouseComponent,StudentsdetailsComponent,
    AdmissionformComponent, MultiClassStudentComponent, DisableReasonComponent, BulkDeleteComponent,
    DisabledStudentsComponent, OnlineAdmissionComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule,

  ]
})
export class StudentModule { }
