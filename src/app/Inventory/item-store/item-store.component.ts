import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-item-store',
  templateUrl: './item-store.component.html',
  styleUrls: ['./item-store.component.css']
})
export class ItemStoreComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Item Store");
  }

}
