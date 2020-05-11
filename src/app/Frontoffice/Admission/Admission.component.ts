import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-Frontoffice-Admission',
  templateUrl: './Admission.component.html',
  //styleUrls: ['./Admission.component.css']
})
export class AdmissionComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Admission Enquiry");
  }

}
