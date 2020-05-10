import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLogReportComponent } from './user-log-report/user-log-report.component';


const routes: Routes = [
  { path:'user-log',component:UserLogReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLogRoutingModule { }
