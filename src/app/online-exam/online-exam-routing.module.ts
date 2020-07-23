import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OnlineExaminationComponent } from './online-examination/online-examination.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    { path: 'onlineexamination', component: OnlineExaminationComponent },
    { path: 'questionbank', component: QuestionBankComponent }
];

@NgModule({
  declarations: [OnlineExaminationComponent, QuestionBankComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)]

})
export class OnlineExamRoutingModule { }
