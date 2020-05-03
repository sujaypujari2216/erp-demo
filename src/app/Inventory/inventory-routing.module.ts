import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {AddItemComponent} from './add-item/add-item.component';
import {AddItemStockComponent} from './add-item-stock/add-item-stock.component';
import {IssueItemComponent} from './issue-item/issue-item.component';
import {ItemCategoryComponent} from './item-category/item-category.component';
import {ItemStoreComponent} from './item-store/item-store.component';
import {ItemSupplierComponent} from './item-supplier/item-supplier.component';


const routes: Routes = [
  {path: 'add-item', component: AddItemComponent },
  {path: 'add-item-stock', component: AddItemStockComponent },
  {path: 'issue-item', component: IssueItemComponent },
  {path: 'item-category', component: ItemCategoryComponent },
  {path: 'item-store', component: ItemStoreComponent },
  {path: 'item-supplier', component: ItemSupplierComponent },
  
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InventoryRoutingModule { }
