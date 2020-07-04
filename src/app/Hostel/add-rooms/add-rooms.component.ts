import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { RoomsService } from './rooms.service';
import { RoomTypeService } from 'src/app/Hostel/add-room-type/room-type.service';
import { AddhostelService } from 'src/app/Hostel/add-hostel/addhostel.service';


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
    'title': '' ,
    "isActive":"yes",
  }
  isUpdate: boolean = false;
  hostels: any;
  hostelsroomtype:any;


  constructor(private hostelroomservice: RoomsService, private addhostelservice: AddhostelService,
              private datatableservice: DatatableService, private roomtypeservice: RoomTypeService) { }


  ngOnInit(): void {
    this.getHostelRoomList();
    this.getroomtypeList();
    this.gethostelList();

  }

  getroomtypeList() {
    this.roomtypeservice.getroomtypeList().subscribe((res: any) => {
      var data = res['data'];
      this.hostelsroomtype = data['content'];
    }, (err) => {
      console.log('Error while fetching ');
      console.error(err);
      
    });
  }
  
  gethostelList() {
    this.addhostelservice.gethostelList().subscribe((res: any) => {
      var data = res['data'];
      this.hostels = data['content'];
    }, (err) => {
      console.log('Error while fetching ');
      console.error(err);

    });
  }

  getHostelRoomList() {
    this.hostelroomservice.getHostelRoomList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.hostelrooms = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('add rooms');

    }, (err) => {
      console.log('Error while fetching all Rooms');
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
      this.clearData();

    }, (err) => {
      console.log('Error While Saving Room');
      console.error(err);
    });
  }
 

  getHostelRoomById(hostelroomId) {
    this.hostelroomservice.getHostelRoomById(hostelroomId).subscribe((res: any) => {
      this.hostelroomDto.costPerBed = res.data.costPerBed;
      this.hostelroomDto.id = res.data.id;
      this.hostelroomDto.description = res.data.description;
      this.hostelroomDto.hostelId = res.data.hostelId;
      this.hostelroomDto.noOfBed = res.data.noOfBed;
      this.hostelroomDto.roomNo = res.data.roomNo;
      this.hostelroomDto.roomTypeId = res.data.roomTypeId;
      this.hostelroomDto.isActive = res.data.isActive;

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

    this.hostelroomservice.updateHostelRoom(this.hostelroomDto, hostelroomId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert('Room Updated Successfully');
      }
      this.datatableservice.destroy();
      this.getHostelRoomList();
      this.clearData();

    }, (err) => {
      console.log('Error while Updating Rooms');
      console.error(err);
    });

  }
 

  deleteHostelRoom(hostelroomId) {
    this.hostelroomservice.deleteHostelRoom(hostelroomId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Room deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getHostelRoomList();
      this.clearData();

    }, (err) => {
      console.log('Error while deleting Rooms');
      console.error(err);
    });

  }

  

  clearData() {
    this.hostelroomDto.hostelId = 0,
      this.hostelroomDto.roomNo = '',
      this.hostelroomDto.noOfBed = 0,
      this.hostelroomDto.costPerBed = 0,
      this.hostelroomDto.description = '',
      this.hostelroomDto.roomTypeId = 0,
      this.hostelroomDto.id = 0,
      this.hostelroomDto.isActive = 'yes';
    this.isUpdate = false;
  }
}