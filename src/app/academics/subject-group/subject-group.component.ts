import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { SubjectgroupService } from './subjectgroup.service';

@Component({
  selector: 'app-subject-group',
  templateUrl: './subject-group.component.html',
  styleUrls: ['./subject-group.component.css']
})
export class SubjectGroupComponent implements OnInit {
  constructor(private datatableservice: DatatableService, private subjectgroupService: SubjectgroupService) { }

  sgs = [];
  subjectGroupDto = {
    "description": "",
    "id": 0,
    "isActive": "yes",
    "name": ""
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getsgList();
  }
  getsgList() {
    this.subjectgroupService.getsgList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.sgs = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Subject Group');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addsg() {
    this.subjectgroupService.save(this.subjectGroupDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getsgList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getsgById(subjectgroupId) {
    this.subjectgroupService.getsgById(subjectgroupId).subscribe((res: any) => {
      this.subjectGroupDto.name = res.data.name;
      this.subjectGroupDto.id = res.data.id;
      this.subjectGroupDto.isActive = res.data.isActive;
      this.subjectGroupDto.description = res.data.description;

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.subjectGroupDto;
  }
  setUpdateFileds(subjectgroupId) {
    this.isUpdate = true;
    this.getsgById(subjectgroupId);
  }
  updatesg(subjectgroupId) {
    this.subjectgroupService.updatesg(this.subjectGroupDto, subjectgroupId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getsgList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletesg(subjectgroupId) {
    this.subjectgroupService.deletesg(subjectgroupId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getsgList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.subjectGroupDto.name = "";
    this.subjectGroupDto.description = "";
    this.subjectGroupDto.id = 0;
    this.subjectGroupDto.isActive = "yes";
    this.isUpdate = false;
  }

}

