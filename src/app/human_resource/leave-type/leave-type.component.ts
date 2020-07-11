import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { LeavetypeService } from './leavetype.service';

@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent implements OnInit {

  constructor(private datatableservice: DatatableService, 
    private leavetypeService: LeavetypeService) { }
    
  url = `http://yamistha.cloudjiffy.net/leave-type/`;

  leaves = [];
  leaveTypeDto = {
    "type": "",
    "id": 0,
    "isActive": "yes"
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getleavetypeList();
  }
  getleavetypeList() {
    this.leavetypeService.getleavetypeList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.leaves = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('leave type');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addleavetype() {
    this.leavetypeService.save(this.leaveTypeDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getleavetypeList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getleavetypeById(leavetypeId) {
    this.leavetypeService.getleavetypeById(leavetypeId).subscribe((res: any) => {
      this.leaveTypeDto.type = res.data.type;
      this.leaveTypeDto.id = res.data.id;
      this.leaveTypeDto.isActive = res.data.isActive;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.leaveTypeDto;
  }
  setUpdateFileds(leavetypeId) {
    this.isUpdate = true;
    this.getleavetypeById(leavetypeId);
  }
  updateleavetype(leavetypeId) {
    this.leavetypeService.updateleavetype(this.leaveTypeDto, leavetypeId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getleavetypeList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleteleavetype(leavetypeId) {
    this.leavetypeService.deleteleavetype(leavetypeId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getleavetypeList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.leaveTypeDto.type = "";
    this.leaveTypeDto.id = 0;
    this.leaveTypeDto.isActive = "yes";
    this.isUpdate = false;
  }

}
