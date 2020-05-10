import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-postaldispatch',
  templateUrl: './postaldispatch.component.html',
})
export class PostaldispatchComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Postal Dispatch");
  }

}







