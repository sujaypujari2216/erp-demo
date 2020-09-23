import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SystemRoutingModule } from './system-routing.module';
import { SesstionSettingComponent } from './sesstion-setting/sesstion-setting.component';



@NgModule({
    declarations: [SesstionSettingComponent, ],
    imports: [
        CommonModule,
        SystemRoutingModule,
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class SystemModule {
}
