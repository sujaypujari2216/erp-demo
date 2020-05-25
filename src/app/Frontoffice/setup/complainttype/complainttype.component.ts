import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ComplainttypeService } from './complainttype.service';

@Component({
  selector: 'app-complainttype',
  templateUrl: './complainttype.component.html',
  styleUrls: ['./complainttype.component.css']
})
export class ComplainttypeComponent implements OnInit {

  complainttypes = [];
  Dto = {
    "complaintType": "string",
    "createdAt": {
      "date": 15,
      "day": 3,
      "hours": 2,
      "minutes": 30,
      "month": 3,
      "nanos": 12,
      "seconds": 13,
      "time": 10,
      "timezoneOffset": 5,
      "year": 2020
    },
    "description": "string",
    "id": 0,
    "isActive": "string"
  }

  isUpdate: boolean = false;
  constructor(private complainttypeService: ComplainttypeService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
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
    this.isUpdate = true;
    this.getById(Id);
  }

  update(Id) {

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
    this.Dto.description = "";
    this.Dto.id = 0;
    this.Dto.isActive = "yes";
    this.Dto.complaintType = "";
    this.isUpdate = false;
  }
}

