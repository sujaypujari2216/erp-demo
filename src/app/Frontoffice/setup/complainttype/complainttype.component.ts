import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ComplainttypeService } from './complainttype.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-complainttype',
  templateUrl: './complainttype.component.html',
  styleUrls: ['./complainttype.component.css'],
  providers: [DatePipe]
})
export class ComplainttypeComponent implements OnInit {

  complainttypes = [];
  Dto = {
    "complaintType": "string",
    "createdAt": {
      "date": 0,
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "time": 0,
      "timezoneOffset": 0,
      "year": 0
    },
    "description": "string",
    "id": 0,
    "isActive": "string"
  }

  isUpdate: boolean = false;
  myDate = new Date();
  constructor(private complainttypeService: ComplainttypeService, private datatableservice: DatatableService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    console.log('getList()');
    this.complainttypeService.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.complainttypes = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Complaint Types');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    console.log('add()');
    this.Dto.createdAt.date = this.myDate.getDate();
    this.Dto.createdAt.day = this.myDate.getDay();
    this.Dto.createdAt.hours = this.myDate.getHours();
    this.Dto.createdAt.minutes = this.myDate.getMinutes();
    this.Dto.createdAt.month = this.myDate.getMonth();
    this.Dto.createdAt.nanos = this.myDate.getMilliseconds();
    this.Dto.createdAt.seconds = this.myDate.getSeconds();
    this.Dto.createdAt.time = this.myDate.getTime();
    this.Dto.createdAt.timezoneOffset = this.myDate.getTimezoneOffset();
    this.Dto.createdAt.year = this.myDate.getFullYear();
    console.log(this.Dto);

    this.complainttypeService.save(this.Dto).subscribe((res: any) => {
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
    console.log('getById()');
    this.complainttypeService.getById(Id).subscribe((res: any) => {
      this.Dto.description = res.data.description;
      this.Dto.complaintType = res.data.complaintType;
      this.Dto.id = res.data.id;
      this.Dto.isActive = res.data.isActive;
      // console.log(this.Dto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.Dto;
  }
  setUpdateFileds(Id) {
    console.log('setUpdate()');
    this.isUpdate = true;
    this.getById(Id);
  }

  update(Id) {
    console.log('update()');
    this.complainttypeService.update(this.Dto, Id).subscribe((res: any) => {
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
    console.log('delete()');
    this.complainttypeService.delete(Id).subscribe((res: any) => {
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
    console.log('cleareData()');
    this.Dto.description = "";
    this.Dto.id = 0;
    this.Dto.isActive = "yes";
    this.Dto.complaintType = "";
    this.isUpdate = false;
  }
}

