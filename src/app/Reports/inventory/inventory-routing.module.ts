import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryLinksComponent } from './inventory-links/inventory-links.component';
import { StockReportComponent } from './stock-report/stock-report.component';
import { AddItemReportComponent } from './add-item-report/add-item-report.component';
import { IssueItemReportComponent } from './issue-item-report/issue-item-report.component';


const routes: Routes = [
  { path:'inventory', component:InventoryLinksComponent },
  { path:'stock-report', component:StockReportComponent },
  { path:'add-item-report', component:AddItemReportComponent },
  { path:'issue-item-report', component:IssueItemReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
