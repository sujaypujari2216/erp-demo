import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AddincomeService } from './addincome.service';
import { IncomeheadService } from 'src/app/income/income-head/incomehead.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {


  url = `http://yamistha.cloudjiffy.net/income/`;

  incomes = [];
  incomeDto = {
    "amount": 0,
    "date": "",
    "documents": "",
    "incHeadId": 0,
    "id": 0,
    "invoiceNo": "",
    "isActive": "yes",
    "name": "",
    "note": ""
  };

  isUpdate: boolean = false;
  incomeheads: any;
  // purposes: any;

  constructor(private addincomeService: AddincomeService,
    private incomeheadservice: IncomeheadService,
    private datatableservice: DatatableService,

  ) { }

  ngOnInit(): void {
    this.getincomeheadList();
    this.getincomeList();
  }

  getincomeheadList() {
    this.incomeheadservice.getincomeheadList().subscribe((res: any) => {
      var data = res['data'];
      this.incomeheads = data['content'];
      // console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all ');
      console.error(err);
    });
  }
  getincomeList() {
    this.addincomeService.getincomeList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.incomes = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Expenses');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  addincome() {
    this.addincomeService.save(this.incomeDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getincomeList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }
  getincomeById(incomeId) {
    this.addincomeService.getincomeById(incomeId).subscribe((res: any) => {
      this.incomeDto.date = res.data.date;
      this.incomeDto.id = res.data.id;
      this.incomeDto.isActive = res.data.isActive;
      this.incomeDto.amount = res.data.amount;
      this.incomeDto.documents = res.data.documents;
      this.incomeDto.name = res.data.name;
      this.incomeDto.note = res.data.note;
      this.incomeDto.incHeadId = res.data.incHeadId;
      this.incomeDto.invoiceNo = res.data.invoiceNo;
      console.log(this.incomeDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.incomeDto;
  }
  setUpdateFileds(incomeId) {
    this.isUpdate = true;
    this.getincomeById(incomeId);
  }

  updateincome(incomeId) {

    this.addincomeService.updateincome(this.incomeDto, incomeId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getincomeList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });
  }

  deleteincome(incomeId) {
    this.addincomeService.deleteincome(incomeId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getincomeList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }
  clearData() {
    this.incomeDto.date = "";
    this.incomeDto.id = 0;
    this.incomeDto.isActive = "yes";
    this.incomeDto.amount = 0;
    this.incomeDto.documents = "";
    this.incomeDto.name = "";
    this.incomeDto.note = "";
    this.incomeDto.incHeadId = 0;
    this.incomeDto.invoiceNo = "";
    this.isUpdate = false;
  }
}
