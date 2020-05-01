import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {RouteComponent} from './route/route.component';
import {VehicleComponent} from './vehicle/vehicle.component';
import {AssignVehicleComponent} from './assign-vehicle/assign-vehicle.component';



const routes: Routes = [
  {path: 'route', component: RouteComponent },
  {path: 'vehicle', component: VehicleComponent },
  {path: 'assign-vehicle', component: AssignVehicleComponent },
  
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TransportRoutingModule { }
