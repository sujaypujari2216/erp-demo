import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { IncomeRoutingModule } from './income-routing.module';
import { AddIncomeComponent } from './add-income/add-income.component';
import { SearchIncomeComponent } from './search-income/search-income.component';
import { IncomeHeadComponent } from './income-head/income-head.component';


@NgModule({
    declarations: [AddIncomeComponent, SearchIncomeComponent],
    imports: [
        CommonModule,
        IncomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        
    ]
})
export class IncomeModule {
}
