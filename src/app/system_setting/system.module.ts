import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SystemRoutingModule } from './system-routing.module';
import { SmsSettingComponent } from './sms-setting/sms-setting.component';




@NgModule({
    declarations: [SmsSettingComponent],
    imports: [
        CommonModule,
        SystemRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SystemModule {
}
