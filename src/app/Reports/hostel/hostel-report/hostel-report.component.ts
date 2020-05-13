import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-hostel-report',
  templateUrl: './hostel-report.component.html',
  styleUrls: ['./hostel-report.component.css']
})
export class HostelReportComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Reports");
  }

}
