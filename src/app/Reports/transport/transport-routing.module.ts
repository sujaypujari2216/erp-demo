import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportReportComponent } from './transport-report/transport-report.component';


const routes: Routes = [
  { path:'transport',component:TransportReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
