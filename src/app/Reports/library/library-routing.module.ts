import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryLinksComponent } from './library-links/library-links.component';
import { BookIssueReportComponent } from './book-issue-report/book-issue-report.component';
import { BookDueReportComponent } from './book-due-report/book-due-report.component';
import { BookInventoryReportComponent } from './book-inventory-report/book-inventory-report.component';
import { BookIssueReturnReportComponent } from './book-issue-return-report/book-issue-return-report.component';


const routes: Routes = [
  { path:'library', component: LibraryLinksComponent },
  { path:'book-issue-report', component:BookIssueReportComponent},
  { path:'book-due-report', component:BookDueReportComponent},
  { path:'book-inventory-report', component:BookInventoryReportComponent},
  { path:'book-issue-return-report',component:BookIssueReturnReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
