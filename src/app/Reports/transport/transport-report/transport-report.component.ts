import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-transport-report',
  templateUrl: './transport-report.component.html',
  styleUrls: ['./transport-report.component.css']
})
export class TransportReportComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Reports");
  }

}
