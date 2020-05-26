import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { RoomTypeService  } from './room-type.service';


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
    this.roomType.description = "";
    this.roomType.id = 0;
    this.roomType.isActive = "yes";
    this.roomType.roomType = "";
    this.isUpdate = false;
  }
}
