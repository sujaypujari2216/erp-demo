import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddIncomeComponent } from './add-income/add-income.component';
import { IncomeHeadComponent } from './income-head/income-head.component';
import { SearchIncomeComponent } from './search-income/search-income.component';


const routes: Routes = [
  { path: 'add-income', component: AddIncomeComponent },
        { path: 'income-head', component: IncomeHeadComponent },
        { path: 'search-income', component: SearchIncomeComponent },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IncomeRoutingModule { }
