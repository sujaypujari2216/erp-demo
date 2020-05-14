import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'expenses-head',
  templateUrl: './expenses-head.component.html',
  styleUrls: ['./expenses-head.component.css']
})
export class ExpensesHeadComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("income");
  }

}
