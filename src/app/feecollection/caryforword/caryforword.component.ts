import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';


@Component({
  selector: 'app-caryforword',
  templateUrl: './caryforword.component.html',
  //styleUrls: ['./setup.component.scss']
})
export class CaryforwordComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Fees Carry Forward");
  }

}



