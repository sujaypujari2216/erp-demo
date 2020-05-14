import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-teachers-timetable',
  templateUrl: './teachers-timetable.component.html',
  styleUrls: ['./teachers-timetable.component.css']
})
export class TeachersTimetableComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("academics");
  }

}
