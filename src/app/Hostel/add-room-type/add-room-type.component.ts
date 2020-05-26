import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
<<<<<<< HEAD
import { RoomTypeService  } from './room-type.service';
=======
>>>>>>> master

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
  
  

<<<<<<< HEAD
  roomType = {
    "description": "",
    "id": 0,
    "isActive": "yes",
    "roomType": ""
  }

  isUpdate: boolean = false;
  constructor(private roomtypeService: RoomTypeService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.roomtypeService.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.hostelsroomtype = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('References');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.roomtypeService.save(this.roomType).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getById(Id) {
    this.roomtypeService.getById(Id).subscribe((res: any) => {
      this.roomType.description = res.data.description;
      this.roomType.roomType = res.data.roomType;
      this.roomType.id = res.data.id;
      this.roomType.isActive = res.data.isActive;
      // console.log(this.Dto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.roomType;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {

    this.roomtypeService.update(this.roomType, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(Id) {
    this.roomtypeService.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }
  clearData() {
    this.roomType.roomType = "";
    this.roomType.description = "";
  }
  
=======
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
>>>>>>> master

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
}

