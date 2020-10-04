import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ClassService } from 'src/app/academics/class/class.service';
import { SectionsService } from 'src/app/academics/sections/sections.service';
import { StudcategoryService } from 'src/app/students_Info/student-categories/studcategory.service';
import { StudentshouseService } from 'src/app/students_Info/student-house/studentshouse.service';
import { AdmissionformService } from './admissionform.service';

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent implements OnInit {
  
  url = `http://yamistha.cloudjiffy.net/api/student`;


  admissionforms = [];
  studentDto = {
    "admissionNo": "",
    "rollNo": "",
    "classId": 0,
    "sectionId": 0,
    "firstname": "",
    "lastname": "",
    "email": "",
    "gender": "",
    "id": 0,
    "isActive": "yes",
    "dob": "",
    "categoryId": 0,
    "religion": "",
    "cast": "",
    "mobileno": "",
    "admissionDate": "",
    "image": "",
    "bloodGroup": "",
    "schoolHouseId": 0,
    "measurementDate": "",
    "weight": "",
    "adharNo": "",
    "height": "",
    "": "",
    "guardianAddress": "",
    "fatherName": "",
    "parentId": 0,
    "fatherOccupation": "",
    "fatherPhone": "",
    "fatherPic": "",
    "guardianEmail": "",
    "guardianIs": "",
    "guardianName": "",
    //"isActive": "yes",
    "guardianOccupation": "",
    "guardianPhone": "",
    "guardianPic": "",
    "guardianRelation": "",
    "motherName": "",
    "motherOccupation": "",
    "motherPhone": "",
    "motherPic": "",
    "note": "",
    "permanentAddress": "",
    "pincode": 0,
    "previousSchool": "",
    "routeId": 0,
    "rte": "",
    "samagraId": "",
    "sessionId": 0,
    "state": "",
    "transportFees": 0,
    "vehrouteId": 0,
    "currentAddress":"",
    "bankAccountNo":"",
    "bankName": "",
    "ifscCode": "",
    

    
  };

  isUpdate: boolean = false;
  houses: any;
  sources: any;
  sections: any;
  classes: any;
  students:any;

  constructor(private admissionformService: AdmissionformService,
    private datatableservice: DatatableService,
    private sectionsService: SectionsService,
    private classservice: ClassService,
    private studcategoryService: StudcategoryService,
    private studentshouseService: StudentshouseService,

  ) { }

  ngOnInit(): void {
    this.getAllSectionList();
    this.getcategoryList();
    this.getClassList();
    this.getHouseList();
    this.getadmissionformList();


  }

  getAllSectionList() {
    this.sectionsService.getAllSectionList().subscribe((res: any) => {
      var data = res['data'];
      this.sections = data['content'];
      // console.log(this.sources);
    }, (err) => {
        console.log('Error while fetching all sections');
      console.error(err);
    });
  }
  getcategoryList() {
    this.studcategoryService.getcategoryList().subscribe((res: any) => {
      var data = res['data'];
      this.students = data['content'];
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
  getHouseList() {
    this.studentshouseService.getHouseList().subscribe((res: any) => {
      var data = res['data'];
      this.houses = data['content'];
      //this.classes = content.map((key) => ({ ...key }));
      // console.log(this.classes);
    },
      (err) => {
        console.log('Error while fetching all houses');
        console.error(err);
      }
    );
  }
  getadmissionformList() {
    this.admissionformService.getadmissionformList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.admissionforms = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('admissionforms');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }


  addadmisssionform() {
    this.admissionformService.addadmisssionform(this.studentDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getadmissionformList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
        console.log(this.studentDto);

      console.error(err);
    });
  }

  getadmissionformById(AdmId) {
    this.admissionformService.getadmissionformById(AdmId).subscribe((res: any) => {
      //console.log(res);
      this.studentDto.admissionNo = res.data.admissionNo;
      this.studentDto.rollNo = res.data.rollNo;
      this.studentDto.id = res.data.id;
      this.studentDto.isActive = res.data.isActive;
      this.studentDto.classId = res.data.classId;
      this.studentDto.sectionId = res.data.sectionId;
      this.studentDto.firstname = res.data.firstname;
      this.studentDto.lastname = res.data.lastname;
      this.studentDto.email = res.data.email;
      this.studentDto.gender = res.data.gender;
      this.studentDto.dob = res.data.dob;
      this.studentDto.categoryId = res.data.categoryId;
      this.studentDto.religion = res.data.religion;
      this.studentDto.cast = res.data.cast;
      this.studentDto.mobileno = res.data.mobileno;
      this.studentDto.admissionDate = res.data.admissionDate;
      this.studentDto.image = res.data.image;
      this.studentDto.bloodGroup = res.data.bloodGroup;
      this.studentDto.schoolHouseId = res.data.schoolHouseId;
      this.studentDto.measurementDate = res.data.measurementDate;
      this.studentDto.weight = res.data.weight;
      this.studentDto.adharNo = res.data.adharNo;
      this.studentDto.height = res.data.height;
      this.studentDto.guardianAddress = res.data.guardianAddress;
      this.studentDto.fatherName = res.data.fatherName;
      this.studentDto.parentId = res.data.parentId;
      this.studentDto.fatherOccupation = res.data.fatherOccupation;
      this.studentDto.fatherPhone = res.data.fatherPhone;
      this.studentDto.fatherPic = res.data.fatherPic;
      this.studentDto.guardianEmail = res.data.guardianEmail;
      this.studentDto.guardianIs = res.data.guardianIs;
      this.studentDto.guardianName = res.data.guardianName;
      //this.studentDto.isActive = res.data.isActive;
      this.studentDto.guardianOccupation = res.data.guardianOccupation;
      this.studentDto.guardianPhone = res.data.guardianPhone;
      this.studentDto.guardianPic = res.data.guardianPic;
      this.studentDto.guardianRelation = res.data.guardianRelation;
      this.studentDto.motherName = res.data.motherName;
      this.studentDto.motherOccupation = res.data.motherOccupation;
      this.studentDto.motherPhone = res.data.motherPhone;
      this.studentDto.motherPic = res.data.motherPic;
      this.studentDto.note = res.data.note;
      this.studentDto.permanentAddress = res.data.permanentAddress;
      this.studentDto.pincode = res.data.pincode;
      this.studentDto.previousSchool= res.data.guardianOccupation;
      this.studentDto.routeId = res.data.routeId;
      this.studentDto.rte = res.data.rte;
      this.studentDto.samagraId = res.data.samagraId;
      this.studentDto.sessionId = res.data.sessionId;
      this.studentDto.state= res.data.guardianOccupation;
      this.studentDto.transportFees = res.data.transportFees;
      this.studentDto.vehrouteId = res.data.vehrouteId;
      this.studentDto.bankAccountNo = res.data.bankAccountNo;
      this.studentDto.bankName = res.data.bankName;
      this.studentDto.currentAddress = res.data.currentAddress;
      this.studentDto.ifscCode = res.data.ifscCode;

      console.log(this.studentDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.studentDto;
  }
  setUpdateFileds(AdmId) {
    console.log(AdmId);
    this.isUpdate = true;
    this.getadmissionformById(AdmId);
    console.log('setup successfull');
  }
  updateadmissionform(AdmId) {

    this.admissionformService.updateadmissionform(this.studentDto, AdmId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getadmissionformList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleteadmissionform(AdmId) {
    this.admissionformService.deleteadmissionform(AdmId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getadmissionformList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.studentDto.admissionNo = "";
    this.studentDto.rollNo = "";
    this.studentDto.id = 0;
    this.studentDto.isActive = "yes";
    this.studentDto.classId = 0;
    this.studentDto.sectionId = 0;
    this.studentDto.firstname = "";
    this.studentDto.lastname = "";
    this.studentDto.email = "";
    this.studentDto.gender = "";
    this.studentDto.dob = "";
    this.studentDto.categoryId = 0;
    this.studentDto.religion = "";
    this.studentDto.cast = "";
    this.studentDto.mobileno = "";
    this.studentDto.admissionDate = "";
    this.studentDto.image = "";
    this.studentDto.bloodGroup = "";
    this.studentDto.schoolHouseId = 0;
    this.studentDto.measurementDate = "";
    this.studentDto.weight = "";
    this.studentDto.adharNo = "";
    this.studentDto.height = "";
    this.studentDto.guardianAddress = "";
    this.studentDto.fatherName = "";
    this.studentDto.parentId = 0;
    this.studentDto.fatherOccupation = "";
    this.studentDto.fatherPhone = "";
    this.studentDto.fatherPic = "";
    this.studentDto.guardianEmail = "";
    this.studentDto.guardianIs = "";
    this.studentDto.guardianName = "";
    this.studentDto.guardianOccupation = "";
    this.studentDto.guardianPhone = "";
    this.studentDto.guardianPic = "";
    this.studentDto.guardianRelation = "";
    this.studentDto.motherName = "";
    this.studentDto.motherOccupation = "";
    this.studentDto.motherPhone = "";
    this.studentDto.motherPic = "";
    this.studentDto.note = "";
    this.studentDto.permanentAddress = "";
    this.studentDto.pincode = 0;
    this.studentDto.previousSchool = "";
    this.studentDto.routeId = 0;
    this.studentDto.rte = "";
    this.studentDto.samagraId = "";
    this.studentDto.sessionId = 0;
    this.studentDto.state = "";
    this.studentDto.transportFees = 0;
    this.studentDto.vehrouteId = 0;
    this.studentDto.bankAccountNo = "";
    this.studentDto.bankName = "";
    this.studentDto.currentAddress ="";
    this.studentDto.ifscCode = "";
    this.isUpdate = false;

  }
  isShow = true;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  
}

