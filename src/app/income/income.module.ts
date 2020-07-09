import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from "@angular/forms";
//import { ReactiveFormsModule } from "@angular/forms";
import { IncomeRoutingModule } from './income-routing.module';
import { AddIncomeComponent } from './add-income/add-income.component';
import { IncomeHeadComponent } from './income-head/income-head.component';
import { SearchIncomeComponent } from './search-income/search-income.component';


@NgModule({
    declarations: [AddIncomeComponent, IncomeHeadComponent, SearchIncomeComponent,],
    imports: [
        CommonModule,
        //FormsModule,
        //ReactiveFormsModule,
        IncomeRoutingModule,
    ]
})
export class IncomeModule {
}
