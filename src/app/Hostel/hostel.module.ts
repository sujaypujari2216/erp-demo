 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { FormsModule } from "@angular/forms";
 import { ReactiveFormsModule } from "@angular/forms";
 import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';
 import { AddRoomsComponent } from './add-rooms/add-rooms.component';
 import { AddHostelComponent } from './add-hostel/add-hostel.component';
 import { HostelRoutingModule } from './hostel-routing.module';


 @NgModule({
  declarations: [AddHostelComponent,AddRoomTypeComponent,AddRoomsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HostelRoutingModule,
  ]
})
export class HostelModule { }

