import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { SearchExpensesComponent } from './search-expenses/search-expenses.component';
import { ExpensesHeadComponent } from './expenses-head/expenses-head.component';


const routes: Routes = [
  { path: 'add-expenses', component: AddExpensesComponent },
        { path: 'expenses-head', component: ExpensesHeadComponent },
        { path: 'search-expenses', component: SearchExpensesComponent },
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExpenseRoutingModule { }
