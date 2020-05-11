import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-online-examination',
  templateUrl: './online-examination.component.html',
  styleUrls: ['./online-examination.component.css']
})
export class OnlineExaminationComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Online Exam");
  }

}
