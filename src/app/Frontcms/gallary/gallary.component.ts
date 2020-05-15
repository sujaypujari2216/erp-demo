import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Display Gallery");
  }

}
