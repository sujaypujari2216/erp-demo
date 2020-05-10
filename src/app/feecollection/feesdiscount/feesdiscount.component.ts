import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';


@Component({
  selector: 'app-feesdiscount',
  templateUrl: './feesdiscount.component.html',
  //styleUrls: ['./visitorbook.component.scss']
})
export class FeesdiscountComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Fees Discount List");
  }

}



