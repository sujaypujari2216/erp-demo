import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { DepartmentService } from './department.service';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private datatableservice: DatatableService, private departmentService: DepartmentService) { }

  depts = [];
  department = {
    "departmentName": "",
    "id": 0,
    "isActive": "yes"
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getdeptList();
  }
  getdeptList() {
    this.departmentService.getdeptList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.depts = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Department');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  adddept() {
    this.departmentService.save(this.department).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getdeptList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getdepartmentById(departmentId) {
    this.departmentService.getdepartmentById(departmentId).subscribe((res: any) => {
      this.department.departmentName = res.data.departmentName;
      this.department.id = res.data.id;
      this.department.isActive = res.data.isActive;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.department;
  }
  setUpdateFileds(departmentId) {
    this.isUpdate = true;
    this.getdepartmentById(departmentId);
  }
  updatedept(departmentId) {
    this.departmentService.updatedept(this.department, departmentId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getdeptList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletedept(departmentId) {
    this.departmentService.deletedept(departmentId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getdeptList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.department.departmentName = "";
    this.department.id = 0;
    this.department.isActive = "yes";
    this.isUpdate = false;
  }

}
