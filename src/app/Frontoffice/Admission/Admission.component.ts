import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AdmissionService } from './admission.service';
import { SourceService } from 'src/app/Frontoffice/setup/source/source.service';
import { ReferenceService } from 'src/app/Frontoffice/setup/reference/reference.service';
import { ClassService } from 'src/app/academics//class/class.service';
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Admission',
  templateUrl: './Admission.component.html',
  styleUrls: ['./Admission.component.css']
})
export class AdmissionComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/enquiry/`;


  enquirys = [];
  enquiry = {
    'address': "",
    "assigned": "",
    "classId": 0,
    "contact": "",
    "date": "",
    "description": "",
    "email": "",
    "followUpDate": "",
    "id": 0,
    "isActive": "yes",
    "name": "",
    "noOfChild": "",
    "note": "",
    "reference": "",
    "source": "",

  };

  isUpdate: boolean = false;
  references: any;
  sources: any;
  classes: any;
  //public rowID;
  constructor(private admissionenqService: AdmissionService,
    private datatableservice: DatatableService,
    private sourceservice: SourceService,
    private classservice: ClassService,
    private referenceservice: ReferenceService,
    private auth:AuthLoginService,
    private router:Router
  ) { 
    if (this.auth.isLoggedIn !== true) {
      window.alert("Access not allowed!");
      this.router.navigate(['/Login'])
    }
  }

  ngOnInit(): void {
    this.getenqList();
    this.getAllSourceList();
   this.getrefList();
   this.getClassList();

  }

  getAllSourceList() {
    this.sourceservice.getAllSourceList().subscribe((res: any) => {
      var data = res['data'];
      this.sources = data['content'];
      // console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }
  getrefList() {
    this.referenceservice.getrefList().subscribe((res: any) => {
      var data = res['data'];
      this.references = data['content'];
      //this.references = content.map((key) => ({ ...key }));
      //console.log(this.references);

    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  getClassList() {
    this.classservice.getClassList().subscribe((res: any) => {
        var data = res['data'];
        this.classes = data['content'];
        //this.classes = content.map((key) => ({ ...key }));
       // console.log(this.classes);
      },
      (err) => {
        console.log('Error while fetching all Classes');
        console.error(err);
      }
    );
  } 
  getenqList() {
    this.admissionenqService.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.enquirys = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('admission');
      console.log(this.admissionenqService.headers);
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
      console.log(this.admissionenqService.headers);
    });
  }
  
  
  addenq() {
    this.admissionenqService.save(this.enquiry).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getenqList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
        console.log(this.enquiry);
      console.error(err);
    });
  }
     
  getById(EnqId) {
    this.admissionenqService.getById(EnqId).subscribe((res: any) => {
      //console.log(res);
      this.enquiry.address = res.data.address;
      this.enquiry.assigned = res.data.assigned;
      this.enquiry.id = res.data.id;
      this.enquiry.isActive = res.data.isActive;
      this.enquiry.classId = res.data.class_;
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
      console.log(this.enquiry);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.enquiry;
  }
  setUpdateFileds(EnqId) {
    console.log(EnqId);
    this.isUpdate = true;
    this.getById(EnqId);
    console.log('setup successfull');
  }
  update(EnqId) {

    this.admissionenqService.update(this.enquiry, EnqId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getenqList();
      this.clearData();
      console.log(this.enquiry);
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
      console.log(this.enquiry);
    });

  }

  deleteenq(EnqId) {
    this.admissionenqService.deleteenq(EnqId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getenqList();
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
    this.enquiry.classId = 0;
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
    this.isUpdate = false;

  }


}








