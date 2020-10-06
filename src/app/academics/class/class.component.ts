import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ClassService } from './class.service';
import { SectionsService } from '../sections/sections.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/api/class/`;

  classes = [];
  classDto = {
    'classses': '',
    'id': 0,
    'isActive': 'yes',
    'section': [
      {
        'id': 0,
        'isActive': 'yes',
        'section': ''
      }
    ]
  }
  sectionDto: any = [];

  isUpdate: boolean = false;

  constructor(
    private datatableservice: DatatableService,
    private classService: ClassService,
    private sectionsService: SectionsService,
  ) { }

  ngOnInit(): void {
    this.getClassList();
    this.getAllSectionList();

  }

  getAllSectionList() {
    this.sectionsService.getAllSectionList().subscribe((res: any) => {
      var data = res.data;
      this.sectionDto = data.content;
      console.log(this.sectionDto);
    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }

  getClassList() {
    this.classService.getClassList().subscribe(
      (res: any) => {
        var data = res['data'];
        var content = data['content'];
        this.classes = content.map((key) => ({ ...key }));
        this.datatableservice.initTable("Class List");
      },
      (err) => {
        console.log('Error while fetching all Classes');
        console.error(err);
      }
    );
  }

  addClass() {
    this.classService.saveClass(this.classDto).subscribe(
      (res: any) => {
        if (res.success == true) {
          alert('Class Saved Successfully');
        }
        //destroy dataTable
        this.datatableservice.destroy();
        this.getClassList();
      },
      (err) => {
        console.log('Error While Saving Class');
        console.log(this.classDto);
        console.error(err);
      }
    );
  }

  getClassById(classId) {
    this.classService.getClassById(classId).subscribe(
      (res: any) => {
        this.classDto.classses = res.data.classses;
        this.classDto.id = res.data.id;
        this.classDto.isActive = res.data.isActive;
        this.classDto.section = res.data.section;
        console.log(this.classDto);
      },
      (err) => {
        console.log('Error while fetching class by Id');
        console.error(err);
      }
    );
    return this.classDto;
  }

  setUpdateFileds(classId) {
    this.isUpdate = true;
    this.getClassById(classId);
  }
  updateClass(classId) {
    this.classService.updateClass(this.classDto, classId).subscribe(
      (res: any) => {
        if (res.success == true) {
          this.isUpdate = false;
          alert('Class Updated Successfully');
        }
        //destroy dataTable
        this.datatableservice.destroy();
        this.isUpdate = false;
        this.getClassList();
      },
      (err) => {
        console.log('Error while Updating class');
        console.error(err);
      }
    );
  }

  deleteClass(classId) {
    this.classService.deleteClass(classId).subscribe(
      (res: any) => {
        if (res.success == true) {
          alert('Class deleted Successfully');
        }
        //destroy dataTable
        this.datatableservice.destroy();
        this.getClassList();
      },
      (err) => {
        console.log('Error while deleting class');
        console.error(err);
      }
    );
  }
  clearData() {
    this.classDto.classses = '';
    this.classDto.id = 0;
    this.classDto.isActive = 'yes';
    //this.classDto.section =
    this.isUpdate = false;

  }

tempArr: any = { "section": [] };

    onChangeCategory($event, sections: any){ // Use appropriate model type instead of any
      this.tempArr.section.push(sections.section);

    }


}