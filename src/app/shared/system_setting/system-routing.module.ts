import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SesstionSettingComponent } from './sesstion-setting/sesstion-setting.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    { path: 'sesstion-setting', component: SesstionSettingComponent },

   
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
