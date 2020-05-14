import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-audit-trail-report',
  templateUrl: './audit-trail-report.component.html',
  styleUrls: ['./audit-trail-report.component.css']
})
export class AuditTrailReportComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Reports");
  }

}
