import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-fees-group-assign',
  templateUrl: './fees-group-assign.component.html',
  styleUrls: ['./fees-group-assign.component.css']
})
export class FeesGroupAssignComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("feecollection");
  }
}
