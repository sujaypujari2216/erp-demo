import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { RoomTypeService } from './room-type.service';


@Component({
  selector: 'app-add-room-type',
  templateUrl: './add-room-type.component.html',
  styleUrls: ['./add-room-type.component.css']
})
export class AddRoomTypeComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/room-type`;

  hostelsroomtype = [];

  roomType = {
    "description": "",
    "id": 0,
    "isActive": "yes",
    "roomType": ""
  }

  isUpdate: boolean = false;
  constructor(private roomtypeService: RoomTypeService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getroomtypeList();
  }

  getroomtypeList() {
    this.roomtypeService.getroomtypeList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.hostelsroomtype = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('References');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }


  addRoomType() {
    this.roomtypeService.save(this.roomType).subscribe((res: any) => {
      if (res.success == true) {
        alert('section Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getroomtypeList();
    }, (err) => {
      console.log('Error While Saving Class');
      console.error(err);
    });
  }
  getRoomTypeById(roomtypeId) {
    this.roomtypeService.getById(roomtypeId).subscribe((res: any) => {
      this.roomType.roomType = res.data.roomType;
      this.roomType.id = res.data.id;
      this.roomType.isActive = res.data.isActive;
      this.roomType.description = res.data.description;
      console.log(this.roomType);

    }, (err) => {
      console.log('Error while fetching class by Id');
      console.error(err);
    });
    return this.roomType;
  }

  setUpdateFileds(roomtypeId) {
    this.isUpdate = true;
    this.getRoomTypeById(roomtypeId);
  }
  updateRoomType(roomtypeId) {

    this.roomtypeService.update(this.roomType, roomtypeId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert('section Updated Successfully');
      }
      this.datatableservice.destroy();
      this.getroomtypeList();
    }, (err) => {
      console.log('Error while Updating section');
      console.error(err);
    });

  }

  deleteRoomType(roomtypeId) {
    this.roomtypeService.delete(roomtypeId).subscribe((res: any) => {
      if (res.success == true) {
        alert('section deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getroomtypeList();
    }, (err) => {
      console.log('Error while deleting section');
      console.error(err);
    });
  }
  clearData() {
    this.roomType.id = 0,
      this.roomType.isActive = 'yes',
      this.roomType.roomType = '',
      this.roomType.description = '',
      this.isUpdate = false;
  }
}