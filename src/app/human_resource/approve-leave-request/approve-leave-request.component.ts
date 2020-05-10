import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-approve-leave-request',
  templateUrl: './approve-leave-request.component.html',
  styleUrls: ['./approve-leave-request.component.css']
})
export class ApproveLeaveRequestComponent implements OnInit {

  constructor(private datatable:DatatableService) { }

  ngOnInit(): void {
    this.datatable.initTable("Approve Leave Request");
  }

}
