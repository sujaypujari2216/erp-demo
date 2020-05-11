import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';


@Component({
  selector: 'app-duefees',
  templateUrl: './duefees.component.html',
  //styleUrls: ['./complain.component.scss']
})
export class DuefeesComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Search Due Fees");
  }

}

