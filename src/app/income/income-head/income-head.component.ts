import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'income-head',
  templateUrl: './income-head.component.html',
  styleUrls: ['./income-head.component.css']
})
export class IncomeHeadComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("income");

  }

}
