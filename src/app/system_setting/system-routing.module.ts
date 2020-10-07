import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SesstionSettingComponent } from './sesstion-setting/sesstion-setting.component';
import { RolesPermissionComponent } from './roles-permission/roles-permission.component';
import { AssignPermissionComponent } from './assign-permission/assign-permission.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    { path: 'sesstion-setting', component: SesstionSettingComponent },
    { path: 'roles-permission', component: RolesPermissionComponent },
    { path: 'assign-permission', component: AssignPermissionComponent },


   
];

@NgModule({
    declarations: [SesstionSettingComponent, RolesPermissionComponent, AssignPermissionComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)]

})
export class SystemRoutingModule { }
