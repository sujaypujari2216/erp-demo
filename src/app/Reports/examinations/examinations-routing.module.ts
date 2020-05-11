import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExaminationLinksComponent } from './examination-links/examination-links.component';
import { RankReportComponent } from './rank-report/rank-report.component';


const routes: Routes = [
  { path: 'examinations', component: ExaminationLinksComponent },
  { path: 'rank-report', component: RankReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationsRoutingModule { }
