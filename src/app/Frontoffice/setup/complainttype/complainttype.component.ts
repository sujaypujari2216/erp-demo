import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ComplainttypeService } from './complainttype.service';

@Component({
  selector: 'app-complainttype',
  templateUrl: './complainttype.component.html',
  styleUrls: ['./complainttype.component.css']
})
export class ComplainttypeComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/api/complaint-type/`;

  complainttypes = [];
  complaintType = {
    "complaintType": "",
    "description": "",
    "id": 0,
    "isActive": "yes"
  }

  isUpdate: boolean = false;
  constructor(private complainttypeService: ComplainttypeService,
    private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getAllComplaintTypeList();
  }

  getAllComplaintTypeList() {
    this.complainttypeService.getAllComplaintTypeList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.complainttypes = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Complaint Types');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.complainttypeService.save(this.complaintType).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getAllComplaintTypeList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getById(Id) {
    this.complainttypeService.getById(Id).subscribe((res: any) => {
      this.complaintType.description = res.data.description;
      this.complaintType.complaintType = res.data.complaintType;
      this.complaintType.id = res.data.id;
      this.complaintType.isActive = res.data.isActive;
      // console.log(this.complaintType);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.complaintType;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }

  update(Id) {
    this.complainttypeService.update(this.complaintType, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getAllComplaintTypeList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(Id) {
    this.complainttypeService.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getAllComplaintTypeList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.complaintType.description = "";
    this.complaintType.id = 0;
    this.complaintType.isActive = "yes";
    this.complaintType.complaintType = "";
    this.isUpdate = false;
  }
}
