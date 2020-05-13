import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-print-admit-card',
  templateUrl: './print-admit-card.component.html',
  styleUrls: ['./print-admit-card.component.css']
})
export class PrintAdmitCardComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Examination");
    
  }

}