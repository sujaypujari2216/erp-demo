import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostelReportComponent } from './hostel-report/hostel-report.component';


const routes: Routes = [
  { path:'hostel',component:HostelReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostelRoutingModule { }
