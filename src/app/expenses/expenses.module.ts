import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { SearchExpensesComponent } from './search-expenses/search-expenses.component';
import { ExpensesHeadComponent } from './expenses-head/expenses-head.component';
@NgModule({
    declarations: [AddExpensesComponent, ExpensesHeadComponent, SearchExpensesComponent ],
    imports: [
        CommonModule
    ]
})
export class ExpenseModule {
}
