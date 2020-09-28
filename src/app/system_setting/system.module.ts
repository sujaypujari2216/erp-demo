import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SystemRoutingModule } from './system-routing.module';
import { SesstionSettingComponent } from './sesstion-setting/sesstion-setting.component';
import { RolesPermissionComponent } from './roles-permission/roles-permission.component';
import { AssignPermissionComponent } from './assign-permission/assign-permission.component';



@NgModule({
    declarations: [SesstionSettingComponent, RolesPermissionComponent, AssignPermissionComponent],
    imports: [
        CommonModule,
        SystemRoutingModule,
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class SystemModule {
}
