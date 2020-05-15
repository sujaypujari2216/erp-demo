import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-email-sms-log',
  templateUrl: './email-sms-log.component.html',
  styleUrls: ['./email-sms-log.component.css']
})
export class EmailSMSLogComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Email/SMS Log");
  }

}
