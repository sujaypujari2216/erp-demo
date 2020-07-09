import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AddBookComponent} from './add-book/add-book.component';
import {AddStaffComponent} from './add-staff/add-staff.component';
import {AddStudentComponent} from './add-student/add-student.component';
import {BookListComponent} from './book-list/book-list.component';
import {IssueReturnComponent} from './issue-return/issue-return.component';
import {Issue1Component} from './issue-return/issue1/issue1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const routes: Routes = [
        {path: 'add-book', component: AddBookComponent },
        {path: 'add-staff', component: AddStaffComponent },
        {path: 'add-student', component: AddStudentComponent },
        {path: 'book-list', component: BookListComponent },
        {path: 'issue-return', component: IssueReturnComponent },
        {path: 'issue1', component: Issue1Component},

  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LibraryRoutingModule { }
