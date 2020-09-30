import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AddexpenseService } from './addexpense.service';
import { ExpenseheadService } from 'src/app/expenses/expenses-head/expensehead.service';


@Component({
  selector: 'add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/api/expense/`;

  expenses = [];
  expenseDto = {
    "amount": 0,
    "date": "",
    "documents": "",
    "expHeadId": 0,
    "id": 0,
    "invoiceNo": "",
    "isActive": "yes",
    "isDeleted": "no",
    "name": "",
    "note": ""
  };

  isUpdate: boolean = false;
  expenseheads: any;
  // purposes: any;

  constructor(private AddexpenseService: AddexpenseService,
    private expenseheadservice: ExpenseheadService,
    private datatableservice: DatatableService,

  ) { }

  ngOnInit(): void {
    this.getheadList();
    this.getexpenseList();
  }

  getheadList() {
    this.expenseheadservice.getheadList().subscribe((res: any) => {
      var data = res['data'];
      this.expenseheads = data['content'];
      // console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all ');
      console.error(err);
    });
  }
  getexpenseList() {
    this.AddexpenseService.getexpenseList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.expenses = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Expenses');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  addexpense() {
    this.AddexpenseService.save(this.expenseDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getexpenseList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }
  getByexpenseId(expenseId) {
    this.AddexpenseService.getByexpenseId(expenseId).subscribe((res: any) => {
      this.expenseDto.date = res.data.date;
      this.expenseDto.id = res.data.id;
      this.expenseDto.isActive = res.data.isActive;
      this.expenseDto.amount = res.data.amount;
      this.expenseDto.documents = res.data.documents;
      this.expenseDto.name = res.data.name;
      this.expenseDto.note = res.data.note;
      this.expenseDto.expHeadId = res.data.expHeadId;
      this.expenseDto.invoiceNo = res.data.invoiceNo;
      console.log(this.expenseDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.expenseDto;
  }
  setUpdateFileds(expenseId) {
    this.isUpdate = true;
    this.getByexpenseId(expenseId);
  }

  updateexpense(expenseId) {

    this.AddexpenseService.updateexpense(this.expenseDto, expenseId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getexpenseList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });
  }

  deleteexpense(expenseId) {
    this.AddexpenseService.deleteexpense(expenseId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getexpenseList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }
  clearData() {
    this.expenseDto.date = "";
    this.expenseDto.id = 0;
    this.expenseDto.isActive = "yes";
    this.expenseDto.isDeleted = "no";
    this.expenseDto.amount = 0;
    this.expenseDto.documents = "";
    this.expenseDto.name = "";
    this.expenseDto.note = "";
    this.expenseDto.expHeadId = 0;
    this.expenseDto.invoiceNo = "";
    this.isUpdate = false;
  }
}
