import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { DesignitionService } from './designition.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  constructor(private datatableservice: DatatableService, private designationService: DesignitionService) { }

  designations = [];
  Dto = {
    "designation": "",
    "id": 0,
    "isActive": "yes"
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.designationService.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.designations = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Staff Designations');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.designationService.save(this.Dto).subscribe((res: any) => {
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
    this.designationService.getById(Id).subscribe((res: any) => {
      this.Dto.designation = res.data.designation;
      this.Dto.id = res.data.id;
      this.Dto.isActive = res.data.isActive;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.Dto;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {
    this.designationService.update(this.Dto, Id).subscribe((res: any) => {
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
    this.designationService.delete(Id).subscribe((res: any) => {
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
    this.Dto.designation = "";
    this.Dto.id = 0;
    this.Dto.isActive = "yes";
    this.isUpdate = false;
  }

}
