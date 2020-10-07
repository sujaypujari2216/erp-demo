import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SystemRoutingModule } from './system-routing.module';




@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SystemRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SystemModule {
}
