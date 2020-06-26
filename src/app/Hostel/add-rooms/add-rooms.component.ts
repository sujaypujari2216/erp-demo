import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

import { RoomsService } from './rooms.service';
//import { RoomTypeService } from '../add-room-type/room-type.service';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/hostel-room/`;
  hostelrooms = [];
  hostelroomDto = {
    'costPerBed': 0,
    'description': '',
    'hostelId': 0,
    'id': 0,
    'noOfBed': 0,
    'roomNo': '',
    'roomTypeId': 0,
    'title': '' //not in design
  }
  isUpdate: boolean = false;
  roomtypeDto: any;


  constructor(private hostelroomservice: RoomsService, private datatableservice: DatatableService/*, private roomtypeservice: RoomTypeService*/) { }


  ngOnInit(): void {
    this.getHostelRoomList();
    //this.getRoomTypeList();
  }

  /*getRoomTypeList() {
    this.roomtypeservice.getList().subscribe((res: any) => {
      var data = res.data;
      this.roomtypeDto = data.content;
      console.log(this.roomtypeDto);
    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
      ]
    });
  }*/


  getHostelRoomList() {
    this.hostelroomservice.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.hostelrooms = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('section');

    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }


  addHostelRoom() {
    this.hostelroomservice.save(this.hostelroomDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Room  Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getHostelRoomList();
    }, (err) => {
      console.log('Error While Saving Class');
      console.error(err);
    });
  }


  getHostelRoomById(hostelroomId) {
    this.hostelroomservice.getById(hostelroomId).subscribe((res: any) => {
      this.hostelroomDto.costPerBed = res.data.costPerBed;
      this.hostelroomDto.id = res.data.id;
      this.hostelroomDto.description = res.data.description;
      this.hostelroomDto.hostelId = res.data.hostelId;
      // this.hostelroomDto.createdAt = res.data.createdAt;
      this.hostelroomDto.noOfBed = res.data.noOfBed;
      this.hostelroomDto.roomNo = res.data.roomNo;
      this.hostelroomDto.roomTypeId = res.data.roomTypeId;
      // this.hostelroomDto.title = res.data.title;
      console.log(this.hostelroomDto);

    }, (err) => {
      console.log('Error while fetching class by Id');
      console.error(err);
    });
    return this.hostelroomDto;
  }
  setUpdateFileds(hostelroomId) {
    this.isUpdate = true;
    this.getHostelRoomById(hostelroomId);
  }
  updateHostelRoom(hostelroomId) {

    this.hostelroomservice.update(this.hostelroomDto, hostelroomId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert('room Updated Successfully');
      }
      this.datatableservice.destroy();
      this.getHostelRoomList();
    }, (err) => {
      console.log('Error while Updating section');
      console.error(err);
    });

  }

  deleteHostelRoom(hostelroomId) {
    this.hostelroomservice.delete(hostelroomId).subscribe((res: any) => {
      if (res.success == true) {
        alert('room deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getHostelRoomList();
    }, (err) => {
      console.log('Error while deleting section');
      console.error(err);
    });

  }
  clearData() {
    this.hostelroomDto.hostelId = 0,
      this.hostelroomDto.roomNo = '',
      this.hostelroomDto.noOfBed = 0,
      this.hostelroomDto.costPerBed = 0,
      this.hostelroomDto.description = '',
      this.isUpdate = false;
  }
}