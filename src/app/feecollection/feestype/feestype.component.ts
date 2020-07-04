
import { Component, OnInit } from '@angular/core';
import { FeestypeService } from './feestype.service';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-feestype',
  templateUrl: './feestype.component.html',
  //styleUrls: ['./setup.component.scss']
})
export class FeestypeComponent implements OnInit {
  url = 'http://yamistha.cloudjiffy.net/fee-type/';

  constructor(private feestypeService: FeestypeService, private datatableservice: DatatableService) { }

  feetypes = [];
  feeTypeDto = {
    "code": "",
    "description": "",
    //"feecategoryId": 0,
    "id": 0,
    "isActive": "yes",
    "type": ""
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.gettypeList();
  }

  gettypeList() {
    this.feestypeService.gettypeList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.feetypes = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Fees type');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addtype() {
    this.feestypeService.save(this.feeTypeDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.gettypeList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  gettypeById(typeId) {
    this.feestypeService.gettypeById(typeId).subscribe((res: any) => {
      this.feeTypeDto.description = res.data.description;
      this.feeTypeDto.id = res.data.id;
      this.feeTypeDto.isActive = res.data.isActive;
      this.feeTypeDto.type = res.data.type;
      this.feeTypeDto.code = res.data.code;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.feeTypeDto;
  }
  setUpdateFileds(typeId) {
    this.isUpdate = true;
    this.gettypeById(typeId);
  }
  updatetype(typeId) {
    this.feestypeService.updatetype(this.feeTypeDto, typeId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.gettypeList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletetype(typeId) {
    this.feestypeService.deletetype(typeId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.gettypeList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.feeTypeDto.description = "";
    this.feeTypeDto.id = 0;
    this.feeTypeDto.isActive = "yes";
    this.feeTypeDto.type = "";
    this.feeTypeDto.code = "";
    this.isUpdate = false;
  }

}








