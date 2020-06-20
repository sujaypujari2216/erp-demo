import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeesgroupComponent } from './feesgroup/feesgroup.component';
import { FeeCollectionRoutingModule } from './feecollection-routing.module';






@NgModule({
  declarations: [FeesgroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeeCollectionRoutingModule
  ]
})
export class FeeCollectionModule { }
