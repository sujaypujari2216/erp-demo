import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-postaldispatch',
  templateUrl: './postaldispatch.component.html',
})
export class PostaldispatchComponent implements OnInit {

  url=`http://yamistha.cloudjiffy.net/dispatch-receive`;
  
  postaldispatch=[];

  constructor(private http:HttpClient,private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.http
    .get(this.url)
    .toPromise()
    .then((res) =>{
      var data = res['data'];
      var content = data['content'];

      this.postaldispatch = content.map(key=>({...key}))
      this.datatableservice.initTable("Posatal Receive");

    });
  }

  

}







