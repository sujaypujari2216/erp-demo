import { Component, OnInit } from '@angular/core';
import { StaffAttendanceTypeService } from './staff-attendance-type.service';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-staff-attendance-type',
  templateUrl: './staff-attendance-type.component.html',
  styleUrls: ['./staff-attendance-type.component.css']
})
export class StaffAttendanceTypeComponent implements OnInit {

  constructor(private staffAttendanceType: StaffAttendanceTypeService, private datatableservice: DatatableService) { }

  attenceTypes = [];
  Dto = {
    "id": 0,
    "isActive": "yes",
    "keyValue": "",
    "type": ""
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.staffAttendanceType.get().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.attenceTypes = content.map((key) => ({ ...key }));
      this.datatableservice.initTable(' Expense head');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.staffAttendanceType.save(this.Dto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.get();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getById(id) {
    this.staffAttendanceType.getById(id).subscribe((res: any) => {
      this.Dto.keyValue = res.data.keyValue;
      this.Dto.id = res.data.id;
      this.Dto.isActive = res.data.isActive;
      this.Dto.type = res.data.type;

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.Dto;
  }
  setUpdateFileds(id) {
    this.isUpdate = true;
    this.getById(id);
  }
  update(id) {
    this.staffAttendanceType.update(this.Dto, id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.get();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(id) {
    this.staffAttendanceType.delete(id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.get();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.Dto.keyValue = "";
    this.Dto.id = 0;
    this.Dto.isActive = "yes";
    this.Dto.type = "";
    this.isUpdate = false;
  }

}
