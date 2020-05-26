import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AdmissionenqService } from './admissionenq.service';


@Component({
  selector: 'app-Frontoffice-Admission',
  templateUrl: './Admission.component.html',
  //styleUrls: ['./Admission.component.css']
})
export class AdmissionComponent implements OnInit {

 
  url=`http://yamistha.cloudjiffy.net/enquiry`;
  
  enquirys=[];
  enquiry = {
    "address": "",
    "assigned": "",
    "class_": 0,
    "contact": "",
    "date": "2020-05-26T07:06:07.048Z",
    "description": "",
    "email": "",
    "followUpDate": "2020-05-26T07:06:07.048Z",
    "id": 0,
    "isActive": "",
    "name": "",
    "noOfChild": "",
    "note": "",
    "reference": "",
    "source": "",
  }

  isUpdate: boolean = false;
  constructor(private admissionenqService: AdmissionenqService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.admissionenqService.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.enquirys = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('References');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.admissionenqService.save(this.enquiry).subscribe((res: any) => {
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
    this.admissionenqService.getById(Id).subscribe((res: any) => {
      this.enquiry.address = res.data.address;
      this.enquiry.assigned = res.data.assigned;
      this.enquiry.id = res.data.id;
      this.enquiry.isActive = res.data.isActive;
      this.enquiry.class_ = res.data.class_;
      this.enquiry.contact = res.data.contact;
      this.enquiry.date = res.data.date;
      this.enquiry.description = res.data.description;
      this.enquiry.email = res.data.email;
      this.enquiry.followUpDate = res.data.followUpDate;
      this.enquiry.name = res.data.name;
      this.enquiry.noOfChild = res.data.noOfChild;
      this.enquiry.note = res.data.note;
      this.enquiry.reference = res.data.reference;
      this.enquiry.source = res.data.source;

      // console.log(this.enquiry);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.enquiry;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {

    this.admissionenqService.update(this.enquiry, Id).subscribe((res: any) => {
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
    this.admissionenqService.delete(Id).subscribe((res: any) => {
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
    this.enquiry.address = "";
    this.enquiry.assigned = "";
    this.enquiry.id = 0;
    this.enquiry.isActive = "yes";
    this.enquiry.class_ = 0;
    this.enquiry.contact = "";
    this.enquiry.date = "";
    this.enquiry.description = "";
    this.enquiry.email = "";
    this.enquiry.followUpDate = "";
    this.enquiry.name = "";
    this.enquiry.noOfChild = "";
    this.enquiry.note = "";
    this.enquiry.reference = "";
    this.enquiry.source = "";
  }
}


