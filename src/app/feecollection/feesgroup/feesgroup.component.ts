import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';


@Component({
  selector: 'app-feesgroup',
  templateUrl: './feesgroup.component.html',
  //styleUrls: ['./postalreceive.component.scss']
})
export class FeesgroupComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Fees Group");
  }

}






