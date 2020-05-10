
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';


@Component({
  selector: 'app-feespayment',
  templateUrl: './feespayment.component.html',
  styleUrls: ['./feespayment.component.scss'],
})
export class FeespaymentComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Search Fees Payment");
  }

}







