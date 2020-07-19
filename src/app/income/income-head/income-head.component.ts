import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { IncomeheadService } from './incomehead.service';

@Component({
  selector: 'income-head',
  templateUrl: './income-head.component.html',
  styleUrls: ['./income-head.component.css']
})
export class IncomeHeadComponent implements OnInit {

  url = 'http://yamistha.cloudjiffy.net/expense-head/';

  constructor(private datatableservice: DatatableService,private incomeheadService: IncomeheadService, ) { }

  incomeheads = [];
  incomeHeadDto = {
    "incomeCategory": "",
    "description": "",
    //"feecategoryId": 0,
    "id": 0,
    "isActive": "yes",

  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getincomeheadList();
  }

  getincomeheadList() {
    this.incomeheadService.getincomeheadList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.incomeheads = content.map((key) => ({ ...key }));
      this.datatableservice.initTable(' income head');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addincomehead() {
    this.incomeheadService.save(this.incomeHeadDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getincomeheadList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getincomeheadById(incomeheadId) {
    this.incomeheadService.getincomeheadById(incomeheadId).subscribe((res: any) => {
      this.incomeHeadDto.description = res.data.description;
      this.incomeHeadDto.id = res.data.id;
      this.incomeHeadDto.isActive = res.data.isActive;
      this.incomeHeadDto.incomeCategory = res.data.incomeCategory;

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.incomeHeadDto;
  }
  setUpdateFileds(incomeheadId) {
    this.isUpdate = true;
    this.getincomeheadById(incomeheadId);
  }
  updateincomehead(incomeheadId) {
    this.incomeheadService.updateincomehead(this.incomeHeadDto, incomeheadId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getincomeheadList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleteincomehead(incomeheadId) {
    this.incomeheadService.deleteincomehead(incomeheadId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getincomeheadList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.incomeHeadDto.description = "";
    this.incomeHeadDto.id = 0;
    this.incomeHeadDto.isActive = "yes";
    this.incomeHeadDto.incomeCategory = "";
    this.isUpdate = false;
  }

}