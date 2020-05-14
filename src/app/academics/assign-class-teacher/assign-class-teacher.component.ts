import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-assign-class-teacher',
  templateUrl: './assign-class-teacher.component.html',
  styleUrls: ['./assign-class-teacher.component.css']
})
export class AssignClassTeacherComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("academics");

  }

}
