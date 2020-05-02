import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminationsRoutingModule } from './examinations-routing.module';
import { ExaminationLinksComponent } from './examination-links/examination-links.component';
import { RankReportComponent } from './rank-report/rank-report.component';


@NgModule({
  declarations: [ExaminationLinksComponent, RankReportComponent],
  imports: [
    CommonModule,
    ExaminationsRoutingModule
  ]
})
export class ExaminationsModule { }
