import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-exam-group',
  templateUrl: './exam-group.component.html',
  styleUrls: ['./exam-group.component.css']
})
export class ExamGroupComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Examination");
  }

}
