import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-visitorbook',
  templateUrl: './visitorbook.component.html',
  //styleUrls: ['./visitorbook.component.scss']
})
export class VisitorbookComponent implements OnInit {

 
  url=`http://yamistha.cloudjiffy.net/visitors-book`;
  
  visitors=[];

  constructor(private http:HttpClient,private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.http
    .get(this.url)
    .toPromise()
    .then((res) =>{
      var data = res['data'];
      var content = data['content'];

      this.visitors = content.map(key=>({...key}))
      this.datatableservice.initTable("Visitor's Book");


    });
  }

  

}


