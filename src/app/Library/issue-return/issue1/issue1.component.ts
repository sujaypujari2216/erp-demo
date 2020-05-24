import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-issue1',
  templateUrl: './issue1.component.html',
  styleUrls: ['./issue1.component.css']
})
export class Issue1Component implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("issue1");
  }

}
