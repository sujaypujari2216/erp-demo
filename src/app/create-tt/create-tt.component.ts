import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatableservice/datatable.service';

@Component({
  selector: 'app-create-tt',
  templateUrl: './create-tt.component.html',
  styleUrls: ['./create-tt.component.css']
})
export class CreateTtComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("create-tt");
  }

}
