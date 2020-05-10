import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-bulk-delete',
  templateUrl: './bulk-delete.component.html',
  styleUrls: ['./bulk-delete.component.css']
})
export class BulkDeleteComponent implements OnInit {

  constructor(private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Bulk Delete");
  }

}
