import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-issue-return',
  templateUrl: './issue-return.component.html',
  styleUrls: ['./issue-return.component.css']
})
export class IssueReturnComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Members");
  }

}
