import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-design-admit-card',
  templateUrl: './design-admit-card.component.html',
  styleUrls: ['./design-admit-card.component.css']
})
export class DesignAdmitCardComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Examination");
  }

}
