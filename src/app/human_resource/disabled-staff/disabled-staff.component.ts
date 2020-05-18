import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-disabled-staff',
  templateUrl: './disabled-staff.component.html',
  styleUrls: ['./disabled-staff.component.css']
})
export class DisabledStaffComponent implements OnInit {

  constructor(private datableservice:DatatableService) { }

  ngOnInit(): void {
    this.datableservice.initTable("Disabled Staff");
  }

}
