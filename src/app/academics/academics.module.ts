import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { TeachersTimetableComponent } from './teachers-timetable/teachers-timetable.component';
import { AssignClassTeacherComponent } from './assign-class-teacher/assign-class-teacher.component';
import { PromoteStudentsComponent } from './promote-students/promote-students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ClassComponent } from './class/class.component';
import { SectionsComponent } from './sections/sections.component';
import { SubjectGroupComponent } from './subject-group/subject-group.component';


@NgModule({
  declarations: [ClassTimetableComponent, TeachersTimetableComponent, AssignClassTeacherComponent, PromoteStudentsComponent, SubjectsComponent, ClassComponent, SectionsComponent, SubjectGroupComponent],
  imports: [
    CommonModule,
    AcademicsRoutingModule
  ]
})
export class AcademicsModule { }
