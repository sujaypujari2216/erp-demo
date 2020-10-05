import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { calllogService } from './calllog.service';


@Component({
  selector: 'app-calllog',
  templateUrl: './calllog.component.html',
  styleUrls: ['./calllog.component.css'],
})
export class calllogComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/api/general-call`;

  constructor(private calllogService: calllogService, private datatableservice: DatatableService) { }

  calllogs = [];
  generalCall = {
    "callDureation": '',
    "callType": '',
    "contact": "",
    "date": "",
    "description": "",
    "followUpDate": "",
    'id': 0,
    "isActive": "yes",
    "name": "",
    "note": ""
  }

  isUpdate: boolean = false;
  // tslint:disable-next-line: member-ordering

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.calllogService.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.calllogs = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Call Logs');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.calllogService.save(this.generalCall).subscribe((res: any) => {
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
    this.calllogService.getById(Id).subscribe((res: any) => {
      this.generalCall.callDureation = res.data.callDureation;
      this.generalCall.callType = res.data.callType;
      this.generalCall.contact = res.data.contact;
      this.generalCall.date = res.data.date;
      this.generalCall.description = res.data.description;
      this.generalCall.followUpDate = res.data.followUpDate;
      this.generalCall.id = res.data.id;
      this.generalCall.isActive = res.data.isActive;
      this.generalCall.name = res.data.name;
      this.generalCall.note = res.data.note;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.generalCall;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {
    this.calllogService.update(this.generalCall, Id).subscribe((res: any) => {
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
    this.calllogService.delete(Id).subscribe((res: any) => {
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
    this.generalCall.callDureation = "";
    this.generalCall.callType = "";
    this.generalCall.contact = "";
    this.generalCall.date = "";
    this.generalCall.description = "";
    this.generalCall.followUpDate = "";
    this.generalCall.id = 0;
    this.generalCall.isActive = "yes";
    this.generalCall.name = "";
    this.generalCall.note = "";
    this.isUpdate = false;
  }
}





