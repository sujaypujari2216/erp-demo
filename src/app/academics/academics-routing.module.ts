import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { TeachersTimetableComponent } from './teachers-timetable/teachers-timetable.component';
import { AssignClassTeacherComponent } from './assign-class-teacher/assign-class-teacher.component';
import { PromoteStudentsComponent } from './promote-students/promote-students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ClassComponent } from './class/class.component';
import { SectionsComponent } from './sections/sections.component';
import { SubjectGroupComponent } from './subject-group/subject-group.component';


const routes: Routes = [
  { path: 'class-timetable',component: ClassTimetableComponent},
  {path:'teachers-timetable',component:TeachersTimetableComponent},
  {path:'assign-class-teacher',component:AssignClassTeacherComponent},
  {path:'promote-students',component:PromoteStudentsComponent},
  {path:'subjects',component:SubjectsComponent},
  {path:'class',component:ClassComponent},
  {path:'Sections',component:SectionsComponent},
  {path:'subject-group',component:SubjectGroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }
