import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { HomeComponent } from './home/home.component';
import { ParentinfoComponent } from './parentinfo/parentinfo.component';
import { TeacherinfoComponent } from './teacherinfo/teacherinfo.component';

const routes: Routes = [
    { path: 'studentinfo',component: StudentinfoComponent},
    { path: 'parentinfo', component: ParentinfoComponent},
    { path: 'teacherinfo', component: TeacherinfoComponent},
    { path: 'home', component: HomeComponent}  
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }
