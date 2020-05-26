import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

import { RoomTypeService } from "./room-type.service";

@Component({
  selector: 'app-add-room-type',
  templateUrl: './add-room-type.component.html',
  styleUrls: ['./add-room-type.component.css']
})
export class AddRoomTypeComponent implements OnInit {

  url=`http://yamistha.cloudjiffy.net/room-type`;
  roomtypes=[];
  roomtypeDto = {
    'id': 0,
    'isActive': 'yes',
    'roomType': '',
    'description':''
  }
  isUpdate: boolean = false;
  
  

  constructor(private roomtypeservice:RoomTypeService,private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.getRoomTypeList();
  }

  getRoomTypeList() {
    this.roomtypeservice.getAllRoomTypeList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.roomtypes = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('section');

    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }


  addRoomType() {
    this.roomtypeservice.saveRoomType(this.roomtypeDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('section Saved Successfully');
      }
      //destroy dataTable
      this.getRoomTypeList();
    }, (err) => {
      console.log('Error While Saving Class');
      console.error(err);
    });
  }


  getRoomTypeById(roomtypeId) {
    this.roomtypeservice.getRoomTypeById(roomtypeId).subscribe((res: any) => {
      this.roomtypeDto.roomType = res.data.roomType;
      this.roomtypeDto.id = res.data.id;
      this.roomtypeDto.isActive = res.data.isActive;
      this.roomtypeDto.description = res.data.description;
      console.log(this.roomtypeDto);

    }, (err) => {
      console.log('Error while fetching class by Id');
      console.error(err);
    });
    return this.roomtypeDto;
  }
  setUpdateFileds(roomtypeId) {
    this.isUpdate = true;
    this.getRoomTypeById(roomtypeId);
  }
  updateRoomType(roomtypeId) {

    this.roomtypeservice.updateRoomType(this.roomtypeDto, roomtypeId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert('section Updated Successfully');
      }
      //destroy dataTable
      this.getRoomTypeList();
    }, (err) => {
      console.log('Error while Updating section');
      console.error(err);
    });

  }

  deleteRoomType(roomtypeId) {
    this.roomtypeservice.deleteRoomType(roomtypeId).subscribe((res: any) => {
      if (res.success == true) {
        alert('section deleted Successfully');
      }
      //destroy dataTable
      this.getRoomTypeList();
    }, (err) => {
      console.log('Error while deleting section');
      console.error(err);
    });
  }
  clearData() {
    this.roomtypeDto.roomType = "";
    this.roomtypeDto.description = "";
  }
  

}
