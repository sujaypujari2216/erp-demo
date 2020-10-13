import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ApplyleaveService } from './applyleave.service';
import { LeavetypeService } from 'src/app/human_resource/leave-type/leavetype.service';



@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {


  url = `http://yamistha.cloudjiffy.net/api/staff-leave/`;

  applyleaves = [];
  staffLeaveRequestDto =
    {
      "adminRemark": "",
      "date": "",
      "documentFile": "",
      "id": 0,
      "leaveDays": 0,
      "leaveFrom": "",
      "leaveTo": "",
      "leaveType": "",
      "leaveTypeId": 0,
      "reason": "",
      "sessionID": 0,
      "staffId": 0,
      "staffName": "",
      "status": ""
    }


  isUpdate: boolean = false;
  leaves: any;

  constructor(
    private datatableservice: DatatableService,
    private applyleaveService: ApplyleaveService, private leavetypeService: LeavetypeService
  ) { }



  ngOnInit(): void {

    this.getapplyleaveList();
    this.getleavetypeList();

  }


  getleavetypeList() {
    this.leavetypeService.getleavetypeList().subscribe((res: any) => {
      var data = res['data'];
      this.leaves = data['content'];
      //this.references = content.map((key) => ({ ...key }));
      //console.log(this.references);

    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  getapplyleaveList() {
    this.applyleaveService.getapplyleaveList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.applyleaves = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Apply Leave');
    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }


  addleave() {
    this.applyleaveService.save(this.staffLeaveRequestDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Subject Saved Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();

      this.getapplyleaveList();
    }, (err) => {
      console.log('Error While Saving Subject');
      console.error(err);

    });
  }


  getleaveById(subjectId) {
    this.applyleaveService.getleaveById(subjectId).subscribe((res: any) => {
      this.staffLeaveRequestDto.adminRemark = res.data.adminRemark;
      this.staffLeaveRequestDto.id = res.data.subjectId;
      this.staffLeaveRequestDto.date = res.data.date;
      this.staffLeaveRequestDto.documentFile = res.data.documentFile;
      this.staffLeaveRequestDto.leaveDays = res.data.leaveDays;
      this.staffLeaveRequestDto.leaveFrom = res.data.leaveFrom;
      this.staffLeaveRequestDto.leaveTo = res.data.leaveTo;
      this.staffLeaveRequestDto.leaveType = res.data.leaveType;
      this.staffLeaveRequestDto.leaveTypeId = res.data.leaveTypeId;
      this.staffLeaveRequestDto.reason = res.data.reason;
      this.staffLeaveRequestDto.sessionID = res.data.sessionID;
      this.staffLeaveRequestDto.staffName = res.data.staffName;
      this.staffLeaveRequestDto.status = res.data.status;


      console.log(this.staffLeaveRequestDto);

    }, (err) => {
      console.log('Error while fetching Subject by Id');
      console.error(err);
    });
    return this.staffLeaveRequestDto;
  }
  setUpdateFileds(subjectId) {
    this.isUpdate = true;
    this.getleaveById(subjectId);
  }
  updateleave(subjectId) {

    this.applyleaveService.updateleave(this.staffLeaveRequestDto, subjectId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert('Subject Updated Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getapplyleaveList();
      this.clearData();

    }, (err) => {
      console.log('Error while Updating Subject');
      console.error(err);
    });

  }

  deleteleave(subjectId) {
    this.applyleaveService.deleteleave(subjectId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Subject deleted Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();
      this.getapplyleaveList();
      this.clearData();

    }, (err) => {
      console.log('Error while deleting Subject');
      console.error(err);
    });

  }



  clearData() {
    this.staffLeaveRequestDto.adminRemark = "";
    this.staffLeaveRequestDto.id = 0;
    this.staffLeaveRequestDto.date = "";
    this.staffLeaveRequestDto.documentFile = "";
    this.staffLeaveRequestDto.leaveDays = 0;
    this.staffLeaveRequestDto.leaveFrom = "";
    this.staffLeaveRequestDto.leaveTo = "";
    this.staffLeaveRequestDto.leaveType = "";
    this.staffLeaveRequestDto.leaveTypeId = 0;
    this.staffLeaveRequestDto.reason = "";
    this.staffLeaveRequestDto.sessionID = 0;
    this.staffLeaveRequestDto.staffName = "";
    this.staffLeaveRequestDto.status = "";
    this.isUpdate = false;

  }
}