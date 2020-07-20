import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { InventoryRoutingModule } from './inventory-routing.module';
import { AddItemComponent } from './add-item/add-item.component';
import { AddItemStockComponent } from './add-item-stock/add-item-stock.component';
import { IssueItemComponent } from './issue-item/issue-item.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemStoreComponent } from './item-store/item-store.component';
import { ItemSupplierComponent } from './item-supplier/item-supplier.component';


@NgModule({
  declarations: [AddItemComponent,AddItemStockComponent,IssueItemComponent,ItemCategoryComponent,
    ItemStoreComponent,ItemSupplierComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StudentModule { }
