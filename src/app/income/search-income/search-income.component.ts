import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'search-income',
  templateUrl: './search-income.component.html',
  styleUrls: ['./search-income.component.css']
})
export class SearchIncomeComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("income");

  }

}
