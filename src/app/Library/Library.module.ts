import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { LibraryRoutingModule } from './Library-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { BookListComponent } from './book-list/book-list.component';
import { IssueReturnComponent } from './issue-return/issue-return.component';
import { Issue1Component } from './issue-return/issue1/issue1.component';




@NgModule({
  declarations: [AddBookComponent,AddStaffComponent,AddStudentComponent,
    BookListComponent,IssueReturnComponent,Issue1Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LibraryRoutingModule,
  ]
})
export class LibraryModule { }
