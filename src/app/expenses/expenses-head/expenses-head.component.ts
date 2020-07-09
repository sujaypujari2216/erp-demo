import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ExpenseheadService } from './expensehead.service';

@Component({
  selector: 'expenses-head',
  templateUrl: './expenses-head.component.html',
  styleUrls: ['./expenses-head.component.css']
})
export class ExpensesHeadComponent implements OnInit {

  url = 'http://yamistha.cloudjiffy.net/expense-head/';

  constructor(private ExpenseheadService: ExpenseheadService, private datatableservice: DatatableService) { }

  expenseheads = [];
  expenseHeadDto = {
    "expCategory": "",
    "description": "",
    //"feecategoryId": 0,
    "id": 0,
    "isActive": "yes",
    
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getheadList();
  }

  getheadList() {
    this.ExpenseheadService.getheadList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.expenseheads = content.map((key) => ({ ...key }));
      this.datatableservice.initTable(' Expense head');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addexpensehead() {
    this.ExpenseheadService.save(this.expenseHeadDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getheadList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getheadById(headId) {
    this.ExpenseheadService.getheadById(headId).subscribe((res: any) => {
      this.expenseHeadDto.description = res.data.description;
      this.expenseHeadDto.id = res.data.id;
      this.expenseHeadDto.isActive = res.data.isActive;
      this.expenseHeadDto.expCategory = res.data.expCategory;
     
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.expenseHeadDto;
  }
  setUpdateFileds(headId) {
    this.isUpdate = true;
    this.getheadById(headId);
  }
  updateexpensehead(headId) {
    this.ExpenseheadService.updateexpensehead(this.expenseHeadDto, headId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getheadList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleteexpensehead(headId) {
    this.ExpenseheadService.deleteexpensehead(headId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getheadList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.expenseHeadDto.description = "";
    this.expenseHeadDto.id = 0;
    this.expenseHeadDto.isActive = "yes";
    this.expenseHeadDto.expCategory = "";
    this.isUpdate = false;
  }

}
