import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-print-marksheet',
  templateUrl: './print-marksheet.component.html',
  styleUrls: ['./print-marksheet.component.css']
})
export class PrintMarksheetComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Examination");
    
  }

}
