import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceComponent } from './finance.component';
import { FeesStatementComponent } from './Modules/fees-statement/fees-statement.component';
import { BalanceFeesComponent } from './Modules/balance-fees/balance-fees.component';
import { FeesCollectionComponent } from './Modules/fees-collection/fees-collection.component';
import { OnlineFeesCollectionComponent } from './Modules/online-fees-collection/online-fees-collection.component';
import { IncomeReportComponent } from './Modules/income-report/income-report.component';
import { ExpenseReportComponent } from './Modules/expense-report/expense-report.component';
import { PayrollReportComponent } from './Modules/payroll-report/payroll-report.component';
import { IncomeGroupReportComponent } from './Modules/income-group-report/income-group-report.component';
import { ExpenseGroupReportComponent } from './Modules/expense-group-report/expense-group-report.component';


const routes: Routes = [
  { path: 'finance', component:FinanceComponent},
  {path: 'fees-statement-report', component: FeesStatementComponent},
  {path: 'balancee-fees-report', component: BalanceFeesComponent},
  {path: 'fees-collection-report', component: FeesCollectionComponent},
  {path: 'online-fees-collection-report', component: OnlineFeesCollectionComponent},
  {path: 'income-report', component: IncomeReportComponent},
  {path: 'expense-report', component: ExpenseReportComponent},
  {path: 'payroll-report', component: PayrollReportComponent},
  {path: 'income-group-report', component: IncomeGroupReportComponent},
  {path: 'expense-group-report', component: ExpenseGroupReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
