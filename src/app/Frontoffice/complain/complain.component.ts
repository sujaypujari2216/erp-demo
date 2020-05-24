import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  //styleUrls: ['./complain.component.scss']
})
export class ComplainComponent implements OnInit {

  url=`http://yamistha.cloudjiffy.net/complaint`;
  
  complains=[];

  constructor(private http:HttpClient,private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.http
    .get(this.url)
    .toPromise()
    .then((res) =>{
      var data = res['data'];
      var content = data['content'];

      this.complains = content.map(key=>({...key}))
      this.datatableservice.initTable("complains");

    });
  }

  

}