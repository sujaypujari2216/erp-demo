import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SystemRoutingModule } from './system-routing.module';
import { SesstionSettingComponent } from './sesstion-setting/sesstion-setting.component';
import { RolesPermissionComponent } from './roles-permission/roles-permission.component';
import { AssignPermissionComponent } from './assign-permission/assign-permission.component';
import { SmsSettingComponent } from './sms-setting/sms-setting.component';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { FrontcmsSettingComponent } from './frontcms-setting/frontcms-setting.component';
import { BackupRestoreComponent } from './backup-restore/backup-restore.component';
import { LanguagesComponent } from './languages/languages.component';
import { UsersComponent } from './users/users.component';
import { ModulesComponent } from './modules/modules.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { SystemFieldsComponent } from './system-fields/system-fields.component';




@NgModule({
    declarations: [SesstionSettingComponent, RolesPermissionComponent,AssignPermissionComponent,SmsSettingComponent, GeneralSettingComponent, NotificationSettingComponent, EmailSettingComponent, PaymentMethodsComponent, FrontcmsSettingComponent, BackupRestoreComponent, LanguagesComponent, UsersComponent, ModulesComponent, CustomFieldsComponent, SystemFieldsComponent],
    imports: [
        CommonModule,
        SystemRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SystemModule {
}
