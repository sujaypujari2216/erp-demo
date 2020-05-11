import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';


@Component({
  selector: 'app-calllog',
  templateUrl: './calllog.component.html',
  //styleUrls: ['./calllog.component.scss'],
})
export class calllogComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Call Logs");
  }

}

