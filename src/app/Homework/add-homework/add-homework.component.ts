import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AddHomeworkService } from './add-homework.service';
import { SectionsService } from 'src/app/academics/sections/sections.service';
import { ClassService } from 'src/app/academics/class/class.service';
import { SubjectService } from 'src/app/academics/subjects/subject.service';

@Component({
  selector: 'app-add-homework',
  templateUrl: './add-homework.component.html',
  styleUrls: ['./add-homework.component.css']
})
export class AddHomeworkComponent implements OnInit {

  homeworks= [];
  homeworkDto = {
    "classId": 0,
    "createDate": "",
    "createdBy": 0,
    "description": "",
    "document": "",
    "evaluatedBy": 0,
    "evaluationDate": "",
    "homeworkDate": "",
    "id": 0,
    "isActive": "",
    "sectionId": 0,
    "sessionId": 0,
    "staffId": 0,
    "subjectId": 0,
    "submitDate": ""
  }

  isUpdate: boolean = false;
  sections: any;
  classes: any;
  subjects:any;
  constructor(private datatableservice:DatatableService,
    private addhomework:AddHomeworkService,
    private sectionservice:SectionsService,
    private classservice:ClassService,
    private subjectservice:SubjectService)
   { }


  ngOnInit(): void {
    this.getList();
    this.getAllSectionList();
    this.getClassList();
    this.getAllSubjectList();
  }

  getAllSubjectList() {
    this.subjectservice.getAllSubjectList().subscribe((res: any)=>{
      var data=res['data'];
      this.subjects=data['content'];
     },(err)=>{
      console.log('Error while fetching Class list');
      console.log(err);
     });
  }

  getClassList() {
   this.classservice.getClassList().subscribe((res: any)=>{
    var data=res['data'];
    this.classes=data['content'];
   },(err)=>{
    console.log('Error while fetching Class list');
    console.log(err);
   });
  }
  getAllSectionList() {
     this.sectionservice.getAllSectionList().subscribe((res: any) => {
      var data = res['data'];
      this.sections = data['content'];
      // console.log(this.sources);
    }, (err) => {
        console.log('Error while fetching all sections');
      console.error(err);
    });
  }

  getList() {
    this.addhomework.gethostelList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.homeworks = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('homeworks');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.addhomework.save(this.homeworkDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getList();
      this.clearData();
    }, (err) => {
      console.log(this.homeworkDto);
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getById(Id) {
    this.addhomework.getById(Id).subscribe((res: any) => {
      this.homeworkDto.classId = res.date.classId;
      this.homeworkDto.createDate = res.date.creatDate;
      this.homeworkDto.createdBy = res.date.createdBy;
      this.homeworkDto.description = res.date.description;
      this.homeworkDto.document = res.date.document;
      this.homeworkDto.evaluatedBy = res.date.evaluatedBy;
      this.homeworkDto.evaluationDate = res.date.evaluationDate;
      this.homeworkDto.homeworkDate = res.date.homeworkDate;
      this.homeworkDto.id = res.date.id;
      this.homeworkDto.isActive = res.date.isActive;
      this.homeworkDto.sectionId = res.date.sectionId;
      this.homeworkDto.subjectId = res.date.subjectId;
      this.homeworkDto.sessionId = res.date.sessionId;
      this.homeworkDto.staffId = res.date.staffId;
      this.homeworkDto.submitDate = res.date.submitDate;
      this.isUpdate = false;
      // console.log(this.Dto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.homeworkDto;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {

    this.addhomework.update(this.homeworkDto, Id).subscribe((res: any) => {
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
    this.addhomework.delete(Id).subscribe((res: any) => {
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
    this.homeworkDto.classId = 0,
      this.homeworkDto.createDate = "",
      this.homeworkDto.createdBy = 0,
      this.homeworkDto.description = "",
      this.homeworkDto.document = "",
      this.homeworkDto.evaluatedBy = 0,
      this.homeworkDto.evaluationDate = "",
      this.homeworkDto.homeworkDate = "",
      this.homeworkDto.id = 0,
      this.homeworkDto.isActive = "",
      this.homeworkDto.sectionId = 0,
      this.homeworkDto.subjectId = 0,
      this.homeworkDto.sessionId = 0,
      this.homeworkDto.staffId = 0,
      this.homeworkDto.submitDate = "",
      this.isUpdate = false;
  }

}
