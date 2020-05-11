
import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';


@Component({
  selector: 'app-feesmaster',
  templateUrl: './feesmaster.component.html',
  styleUrls: ['./feesmaster.component.scss'],
})
export class FeesmasterComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Fees Master List");
  }

}




