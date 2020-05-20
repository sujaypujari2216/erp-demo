import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-calllog',
  templateUrl: './calllog.component.html',
  //styleUrls: ['./calllog.component.scss'],
})
export class calllogComponent implements OnInit {

 
  url=`http://yamistha.cloudjiffy.net/general-call`;
  
  calllogs=[];

  constructor(private http:HttpClient,private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.http
    .get(this.url)
    .toPromise()
    .then((res) =>{
      var data = res['data'];
      var content = data['content'];

      this.calllogs = content.map(key=>({...key}))
      this.datatableservice.initTable("Calllog");


    });
  }

  

}



