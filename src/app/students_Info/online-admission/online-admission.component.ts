import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-online-admission',
  templateUrl: './online-admission.component.html',
  styleUrls: ['./online-admission.component.css']
})
export class OnlineAdmissionComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Online Admission");
  }

}
