import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ComplainService } from './complain.service';
import { ComplainttypeService } from 'src/app/Frontoffice/setup/complainttype/complainttype.service';
import { SourceService } from 'src/app/Frontoffice/setup/source/source.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/api/complaint/`;


  complains = [];
  complaint = {
    "actionTaken": "",
    "assigned": "",
    "complaintType": "",
    "contact": "",
    "date": "",
    "description": "",
    "email": "",
    "id": 0,
    "image": "",
    "isActive": "yes",
    "name": "",
    "note": "",
    "source": "",
  };
  isUpdate: boolean = false;
  roomtypeDto: any;
  sources: any;
  complainttypes: any;


  constructor(private complainService: ComplainService, private datatableservice: DatatableService,
    private complainttypeService: ComplainttypeService, private sourceService: SourceService,private awttoken:JWTTokenServiceService) { }
  // tslint:disable-next-line: align


    sessionID:string;
  ngOnInit(): void {
    this.getAllComplainList();
    this.getAllComplaintTypeList();
    this.getAllSourceList();


  }

  getAllComplaintTypeList() {
    this.complainttypeService.getAllComplaintTypeList().subscribe((res: any) => {
      var data = res['data'];
      this.complainttypes = data['content'];
      console.log(this.complainttypes);
    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }


  getAllSourceList() {
    this.sourceService.getAllSourceList().subscribe((res: any) => {
      var data = res['data'];
      this.sources = data['content'];
      console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }
  getAllComplainList() {
    //console.log('getAllComplainList()');
    this.complainService.getAllComplainList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.complains = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Complaint');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addComplain() {
    this.complainService.addComplain(this.complaint).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();
      this.getAllComplainList();
      this.clearData();

    }, (err) => {
      console.log('Error While Saving Class');
      console.error(err);
    });
  }


  getcomplainById(complainId) {
    this.complainService.getcomplainById(complainId).subscribe((res: any) => {
      this.complaint.actionTaken = res.data.actionTaken;
      this.complaint.id = res.data.id;
      this.complaint.description = res.data.description;
      this.complaint.assigned = res.data.assigned;
      // this.hostelroomDto.createdAt = res.data.createdAt;
      this.complaint.complaintType = res.data.complaintType;
      this.complaint.contact = res.data.contact;
      this.complaint.email = res.data.email;
      this.complaint.image = res.data.image;
      this.complaint.isActive = res.data.isActive;
      this.complaint.name = res.data.name;
      this.complaint.note = res.data.note;
      this.complaint.source = res.data.source;
      this.complaint.date = res.data.date;
      // this.hostelroomDto.title = res.data.title;
      console.log(this.complaint);

    }, (err) => {
      console.log('Error while fetching Id');
      console.error(err);
    });
    return this.complaint;
  }
  setUpdateFileds(complainId) {
    this.isUpdate = true;
    this.getcomplainById(complainId);
  }
  updateComplain(complainId) {

    this.complainService.updateComplain(this.complaint, complainId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getAllComplainList();
      this.clearData();
      //destroy dataTable

    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleteComplain(complainId) {

    this.complainService.deleteComplain(complainId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getAllComplainList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.complaint.actionTaken = "";
    this.complaint.id = 0;
    this.complaint.description = "";
    this.complaint.assigned = "";
    // this.hostelroomDto.createdAt = res.data.createdAt;
    this.complaint.complaintType = "";
    this.complaint.contact = "";
    this.complaint.email = "";
    this.complaint.image = "";
    this.complaint.isActive = "yes";
    this.complaint.name = "";
    this.complaint.note = "";
    this.complaint.source = "";
    this.complaint.date = "";
    this.isUpdate = false;

  }
}