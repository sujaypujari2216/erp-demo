import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {

  constructor(private datatebleservice:DatatableService) { }

  ngOnInit(): void {
    this.datatebleservice.initTable("Notice Board");
  }

}
