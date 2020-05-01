import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class FinanceModule { }
