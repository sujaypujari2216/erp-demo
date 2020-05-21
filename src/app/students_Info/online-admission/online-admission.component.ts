import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-online-admission',
  templateUrl: './online-admission.component.html',
  styleUrls: ['./online-admission.component.css']
})
export class OnlineAdmissionComponent implements OnInit {


  url=`http://yamistha.cloudjiffy.net/student`;
  
  students=[];

  constructor(private http:HttpClient,private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.http
    .get(this.url)
    .toPromise()
    .then((res) =>{
      var data = res['data'];
      var content = data['content'];

      this.students = content.map(key=>({...key}))
      this.datatableservice.initTable("online-admission");


    });
  }

  

}