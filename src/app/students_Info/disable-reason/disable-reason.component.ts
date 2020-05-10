import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-disable-reason',
  templateUrl: './disable-reason.component.html',
  styleUrls: ['./disable-reason.component.css']
})
export class DisableReasonComponent implements OnInit {

  constructor(private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Disable Reason");
  }

}
