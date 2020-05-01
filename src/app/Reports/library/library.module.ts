import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryLinksComponent } from './library-links/library-links.component';
import { BookIssueReportComponent } from './book-issue-report/book-issue-report.component';
import { BookDueReportComponent } from './book-due-report/book-due-report.component';
import { BookInventoryReportComponent } from './book-inventory-report/book-inventory-report.component';
import { BookIssueReturnReportComponent } from './book-issue-return-report/book-issue-return-report.component';


@NgModule({
  declarations: [LibraryLinksComponent, BookIssueReportComponent, BookDueReportComponent, BookInventoryReportComponent, BookIssueReturnReportComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
