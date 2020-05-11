import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-add-item-stock',
  templateUrl: './add-item-stock.component.html',
  styleUrls: ['./add-item-stock.component.css']
})
export class AddItemStockComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Item Stock");
  }

}
