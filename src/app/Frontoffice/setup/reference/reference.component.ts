import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ReferenceService } from './reference.service';


@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {
  references = [];
 Dto = {
    "description": "",
    "id": 0,
    "isActive": "yes",
    "reference": ""
 };

  isUpdate: boolean = false;
  constructor(private referenceService: ReferenceService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getrefList();
  }

  getrefList() {
    this.referenceService.getrefList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.references = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('References');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.referenceService.save(this.Dto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getrefList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getById(Id) {
    this.referenceService.getById(Id).subscribe((res: any) => {
      this.Dto.description = res.data.description;
      this.Dto.reference = res.data.reference;
      this.Dto.id = res.data.id;
      this.Dto.isActive = res.data.isActive;
      // console.log(this.Dto);

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

    this.referenceService.update(this.Dto, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getrefList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(Id) {
    this.referenceService.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getrefList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.Dto.description = "";
    this.Dto.id = 0;
    this.Dto.isActive = "yes";
    this.Dto.reference = "";
    this.isUpdate = false;
  }
}



