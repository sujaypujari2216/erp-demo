import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';


@Component({
  selector: 'app-collectfees',
  templateUrl: './collectfees.component.html',
  //styleUrls: ['./complain.component.scss']
})
export class CollectfeesComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Collect Fees");
  }

}


