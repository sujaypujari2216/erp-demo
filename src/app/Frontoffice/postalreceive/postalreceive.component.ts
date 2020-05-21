import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-postalreceive',
  templateUrl: './postalreceive.component.html',
  //styleUrls: ['./postalreceive.component.scss']
})
export class PostalreceiveComponent implements OnInit {

  url=`http://yamistha.cloudjiffy.net/dispatch-receive`;
  
  postalreceive=[];

  constructor(private http:HttpClient,private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.http
    .get(this.url)
    .toPromise()
    .then((res) =>{
      var data = res['data'];
      var content = data['content'];

      this.postalreceive = content.map(key=>({...key}))
      this.datatableservice.initTable("Posatal Receive");

    });
  }

  

}
