import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-Frontoffice-Admission',
  templateUrl: './Admission.component.html',
  //styleUrls: ['./Admission.component.css']
})
export class AdmissionComponent implements OnInit {

 
  url=`http://yamistha.cloudjiffy.net/enquiry`;
  
  enquiry=[];

  constructor(private http:HttpClient,private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.http
    .get(this.url)
    .toPromise()
    .then((res) =>{
      var data = res['data'];
      var content = data['content'];

      this.enquiry = content.map(key=>({...key}))
      this.datatableservice.initTable('Admission');


    });
  }

  

}

