import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    { path: 'sesstion-setting', component: SesstionSettingComponent },
    { path: 'roles-permission', component: RolesPermissionComponent },
    { path: 'assign-permission', component: AssignPermissionComponent },
    { path: 'sms-setting', component: SmsSettingComponent },
    { path: 'general-setting', component: GeneralSettingComponent  },
    { path: 'notification-setting', component: NotificationSettingComponent  },
    { path: 'email-setting', component: EmailSettingComponent },
    { path: 'payment-methods', component: PaymentMethodsComponent },
    { path: 'frontcms-setting', component: FrontcmsSettingComponent },
    { path: 'backup-restore', component: BackupRestoreComponent },
    { path: 'languages', component:  LanguagesComponent },
    { path: 'users', component:  UsersComponent  },
    { path: 'modules', component: ModulesComponent },
    { path: 'custom-fields', component: CustomFieldsComponent },
    { path: 'system-fields', component: SystemFieldsComponent  },
    


   
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)]

})
export class SystemRoutingModule { }
