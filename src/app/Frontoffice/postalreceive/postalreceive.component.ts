import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-postalreceive',
  templateUrl: './postalreceive.component.html',
  //styleUrls: ['./postalreceive.component.scss']
})
export class PostalreceiveComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Postal Recieve");
  }

}



