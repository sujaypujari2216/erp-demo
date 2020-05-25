import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostelRoutingModule } from './hostel-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AddRoomTypeComponent} from './add-room-type/add-room-type.component';
import {AddRoomsComponent} from './add-rooms/add-rooms.component';
import {AddHostelComponent} from './add-hostel/add-hostel.component';



@NgModule({
  declarations: [AddRoomTypeComponent,AddRoomsComponent,AddHostelComponent],
  imports: [
    CommonModule,
    HostelRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HostelModule { }
 
