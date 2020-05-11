import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-staff-directory',
  templateUrl: './staff-directory.component.html',
  styleUrls: ['./staff-directory.component.css']
})
export class StaffDirectoryComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Staff Directory");
  }

}
