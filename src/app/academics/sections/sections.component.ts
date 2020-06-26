import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { SectionsService } from './sections.service';



@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  
  url='http://yamistha.cloudjiffy.net/section';
  
  sections=[];
  sectionDto = {
    'id': 0,
    'isActive': 'yes',
    'section': ''
  }
  isUpdate: boolean = false;

  constructor(
    private datatableservice: DatatableService,
    private sectionsService: SectionsService,
    )
     { }

  ngOnInit(): void {

    this.getSectionList();

  }

  getSectionList() {
    this.sectionsService.getAllSectionList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.sections = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('section');



    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }


  addSection() {
    this.sectionsService.saveSection(this.sectionDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('section Saved Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();
      this.getSectionList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving Class');
      console.error(err);
    });
  }


  getSectionById(sectionId) {
    this.sectionsService.getSectionById(sectionId).subscribe((res: any) => {
      this.sectionDto.section = res.data.section;
      this.sectionDto.id = res.data.id;
      this.sectionDto.isActive = res.data.isActive;
      console.log(this.sectionDto);

    }, (err) => {
      console.log('Error while fetching class by Id');
      console.error(err);
    });
    return this.sectionDto;
  }
  setUpdateFileds(sectionId) {
    this.isUpdate = true;
    this.getSectionById(sectionId);
  }
  updateSection(sectionId) {

    this.sectionsService.updateSection(this.sectionDto, sectionId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert('section Updated Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getSectionList();
      this.clearData();

    }, (err) => {
      console.log('Error while Updating section');
      console.error(err);
    });

  }

  deleteSection(sectionId) {
    this.sectionsService.deleteSection(sectionId).subscribe((res: any) => {
      if (res.success == true) {
        alert('section deleted Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();
      this.getSectionList();
      this.clearData();

    }, (err) => {
      console.log('Error while deleting section');
      console.error(err);
    });
  }

clearData() {
  
  this.sectionDto.id = 0;
  this.sectionDto.isActive = "yes";
  this.sectionDto.section = "";
  this.isUpdate = false;

}


}