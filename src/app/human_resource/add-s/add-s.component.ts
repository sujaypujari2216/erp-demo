import { Component, OnInit } from '@angular/core';
import { AddstaffService } from './addstaff.service';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-add-s',
  templateUrl: './add-s.component.html',
  styleUrls: ['./add-s.component.css']
})
export class AddSComponent implements OnInit {


  isShow = true;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  staffs = [];
  staffDto = {
    "accountTitle": "",
    "amount": 0,
    "bankAccountNo": "",
    "bankBranch": "",
    "bankName": "",
    "basicSalary": "",
    "contactNo": "",
    "contractType": "",
    "dateOfJoining": "2020-10-06T12:20:42.401Z",
    "dateOfLeaving": "2020-10-06T12:20:42.401Z",
    "departmentId": 0,
    "departmentName": "",
    "dob": "2020-10-06T12:20:42.401Z",
    "email": "",
    "emergencyContactNo": "",
    "employeeId": "",
    "epfNo": "",
    "facebook": "",
    "fatherName": "",
    "gender": "",
    "id": 0,
    "ifscCode": "",
    "image": "",
    "instagram": "",
    "isActive": "",
    "joiningLetter": "",
    "langId": 0,
    "linkedin": "",
    "localAddress": "",
    "location": "",
    "maritalStatus": "",
    "motherName": "",
    "name": "",
    "note": "",
    "numberOfLeaves": 0,
    "otherDocumentFile": "",
    "otherDocumentName": "",
    "password": "",
    "payscale": "",
    "permanentAddress": "",
    "qualification": "",
    "resignationLetter": "",
    "resume": "",
    "roleId": 0,
    "roleName": "",
    "shift": "",
    "staffDesignation": "",
    "staffDesignationId": 0,
    "surname": "",
    "twitter": "",
    "userId": 0,
    "verificationCode": "",
    "workExp": ""
  }

  isUpdate: boolean = false;
 

  constructor(private addstaffService: AddstaffService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getList();
  

  }

  

  getList() {
    this.addstaffService.getList().subscribe((res: any) => {
      console.log(res);
      var data = res['data'];
      var content = data['content'];
      this.staffs = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('staffs');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.addstaffService.save(this.staffDto).subscribe((res: any) => {
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
    this.addstaffService.getById(Id).subscribe((res: any) => {
      this.staffDto.accountTitle = res.data.accountTitle;
      this.staffDto.amount = res.data.amount;
      this.staffDto.bankAccountNo = res.data.bankAccountNo;
      this.staffDto.bankBranch = res.data.bankBranch,
      this.staffDto.bankName = res.data.bankName;
      this.staffDto.basicSalary = res.data.basicSalary;
      this.staffDto.contactNo = res.data.contactNo;
      this.staffDto.contractType = res.data.contractType;
      this.staffDto.dateOfJoining = res.data.dateOfJoining;
      this.staffDto.dateOfLeaving = res.data.dateOfLeaving;
      this.staffDto.departmentId = res.data.departmentId
      this.staffDto.departmentName = res.data.departmentName;
      this.staffDto.dob = res.data.dob;
      this.staffDto.email = res.data.email;
      this.staffDto.emergencyContactNo = res.data.emergencyContactNo;
      this.staffDto.employeeId = res.data.employeeId;
      this.staffDto.epfNo = res.data.epfNo;
      this.staffDto.facebook = res.data.facebook;
      this.staffDto.fatherName = res.data.fatherName;
      this.staffDto.gender = res.data.gender;
      this.staffDto.id = res.data.id;
      this.staffDto.ifscCode = res.data.ifscCode;
      this.staffDto.image = res.data.image;
      this.staffDto.instagram = res.data.instagram;
      this.staffDto.isActive = res.data.isActive;
      this.staffDto.joiningLetter = res.data.joiningLetter;
      this.staffDto.langId = res.data.langId;
      this.staffDto.linkedin=res.data.linkedin;
  this.staffDto.localAddress= res.data.localAddress;
  this.staffDto.location=res.data.location;
  this.staffDto.maritalStatus= res.data.maritalStatus;
  this.staffDto.motherName= res.data.motherName;
  this.staffDto.name= res.data.name;
  this.staffDto.note= res.data.note;
  this.staffDto.numberOfLeaves= res.data.numberOfLeaves;
  this.staffDto.otherDocumentFile=res.data.otherDocumentFile;
  this.staffDto.otherDocumentName=res.data.otherDocumentName;
  this.staffDto.password=res.data.password;
  this.staffDto.payscale= res.data.payscale;
  this.staffDto.permanentAddress= res.data.permanentAddress;
  this.staffDto.qualification= res.data.qualification;
  this.staffDto.resignationLetter= res.data.resignationLetter;
  this.staffDto.resume=res.data.resume;
  this.staffDto.roleId= res.data.roleId;
  this.staffDto.roleName= res.data.roleName;
  this.staffDto.shift= res.data.shift;
  this.staffDto.staffDesignation= res.data.staffDesignation;
  this.staffDto.staffDesignationId= res.data.staffDesignationId;
  this.staffDto.surname=res.data.surname;
  this.staffDto.twitter= res.data.twitter;
  this.staffDto.userId= res.data.userId;
  this.staffDto.verificationCode= res.data.verificationCode;
  this.staffDto.workExp=res.data.workExp;
      // console.log(this.Dto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.staffDto;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {

    this.addstaffService.update(this.staffDto, Id).subscribe((res: any) => {
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
    this.addstaffService.delete(Id).subscribe((res: any) => {
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
    this.staffDto.accountTitle = "",
      this.staffDto.amount = 0,
      this.staffDto.bankAccountNo = "",
      this.staffDto.bankBranch = "",
      this.staffDto.bankName = "",
      this.staffDto.basicSalary = "",
      this.staffDto.contactNo = "",
      this.staffDto.contractType = "",
      this.staffDto.dateOfJoining = "2020-10-06T12:20:42.401Z",
      this.staffDto.dateOfLeaving = "2020-10-06T12:20:42.401Z",
      this.staffDto.departmentId = 0,
      this.staffDto.departmentName = "",
      this.staffDto.dob = "2020-10-06T12:20:42.401Z",
      this.staffDto.email = "",
      this.staffDto.emergencyContactNo = "",
      this.staffDto.employeeId = "",
      this.staffDto.epfNo = "",
      this.staffDto.facebook = "",
      this.staffDto.fatherName = "",
      this.staffDto.gender = "",
      this.staffDto.id = 0,
      this.staffDto.ifscCode = "",
      this.staffDto.image = "",
      this.staffDto.instagram = "",
      this.staffDto.isActive = "",
      this.staffDto.joiningLetter = "",
      this.staffDto.langId = 0,
      this.staffDto.linkedin="",
  this.staffDto.localAddress= "",
  this.staffDto.location="",
  this.staffDto.maritalStatus= "",
  this.staffDto.motherName= "",
  this.staffDto.name= "",
  this.staffDto.note= "",
  this.staffDto.numberOfLeaves= 0,
  this.staffDto.otherDocumentFile="",
  this.staffDto.otherDocumentName="",
  this.staffDto.password="",
  this.staffDto.payscale= "",
  this.staffDto.permanentAddress= "",
  this.staffDto.qualification= "",
  this.staffDto.resignationLetter= "",
  this.staffDto.resume="",
  this.staffDto.roleId= 0,
  this.staffDto.roleName= "",
  this.staffDto.shift= "",
  this.staffDto.staffDesignation= "",
  this.staffDto.staffDesignationId= 0,
  this.staffDto.surname="",
  this.staffDto.twitter= "",
  this.staffDto.userId= 0,
  this.staffDto.verificationCode= "",
  this.staffDto.workExp= ""
      this.isUpdate = false;
  }

}
