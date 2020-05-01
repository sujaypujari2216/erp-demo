import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryLinksComponent } from './inventory-links/inventory-links.component';
import { StockReportComponent } from './stock-report/stock-report.component';
import { AddItemReportComponent } from './add-item-report/add-item-report.component';
import { IssueItemReportComponent } from './issue-item-report/issue-item-report.component';


@NgModule({
  declarations: [InventoryLinksComponent, StockReportComponent, AddItemReportComponent, IssueItemReportComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
