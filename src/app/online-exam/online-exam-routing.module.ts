import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineExaminationComponent } from './online-examination/online-examination.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';


const routes: Routes = [
    { path:"onlineexamination", component:OnlineExaminationComponent },
    { path:"questionbank", component: QuestionBankComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
     
  ],
  exports: [RouterModule]
})
export class OnlineExamRoutingModule { }
