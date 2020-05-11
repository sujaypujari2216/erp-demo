import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-item-supplier',
  templateUrl: './item-supplier.component.html',
  styleUrls: ['./item-supplier.component.css']
})
export class ItemSupplierComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Item Suppliers");
  }

}
