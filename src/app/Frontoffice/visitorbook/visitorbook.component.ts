import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-visitorbook',
  templateUrl: './visitorbook.component.html',
  //styleUrls: ['./visitorbook.component.scss']
})
export class VisitorbookComponent implements OnInit {

  constructor(private datatable:DatatableService) { }

  ngOnInit(): void {
    this.datatable.initTable("Visitor's Book");
  }

}



