import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";


import { HumanResourceRoutingModule } from './human_resource-routing.module';



@NgModule({
    declarations: [
        ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HumanResourceRoutingModule,
    ]
})
export class HumanResourceModule {}
