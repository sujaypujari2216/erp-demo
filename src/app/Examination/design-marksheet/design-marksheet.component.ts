import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-design-marksheet',
  templateUrl: './design-marksheet.component.html',
  styleUrls: ['./design-marksheet.component.css']
})
export class DesignMarksheetComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Examination")
  }

}
