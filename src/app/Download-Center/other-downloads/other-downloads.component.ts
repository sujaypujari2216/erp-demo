import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-other-downloads',
  templateUrl: './other-downloads.component.html',
  styleUrls: ['./other-downloads.component.css']
})
export class OtherDownloadsComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Other Downloads");
  }

}
