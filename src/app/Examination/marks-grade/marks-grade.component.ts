import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-marks-grade',
  templateUrl: './marks-grade.component.html',
  styleUrls: ['./marks-grade.component.css']
})
export class MarksGradeComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Examination");
  }

}
