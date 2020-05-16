import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-attendance-by-date',
  templateUrl: './attendance-by-date.component.html',
  styleUrls: ['./attendance-by-date.component.css']
})
export class AttendanceByDateComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Attendance");
  }

}
