import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {AddRoomTypeComponent} from './add-room-type/add-room-type.component';
import {AddRoomsComponent} from './add-rooms/add-rooms.component';
import {AddHostelComponent} from './add-hostel/add-hostel.component';


const routes: Routes = [
  { path: 'add-hostel', component: AddHostelComponent },
        { path: 'add-room-type', component: AddRoomTypeComponent },
        { path: 'add-rooms', component: AddRoomsComponent },
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HostelRoutingModule { }
