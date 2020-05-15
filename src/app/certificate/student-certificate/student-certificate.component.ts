import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-student-certificate',
  templateUrl: './student-certificate.component.html',
  styleUrls: ['./student-certificate.component.css']
})
export class StudentCertificateComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("certificate");

  }

}
