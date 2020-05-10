import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-disabled-students',
  templateUrl: './disabled-students.component.html',
  styleUrls: ['./disabled-students.component.css']
})
export class DisabledStudentsComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Disabled Studets");
  }

}
