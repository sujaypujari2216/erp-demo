import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ArtcodeAPIService } from 'src/app/services/artcode-api.service';
//import { Subject } from '../../shared/classes/subject';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
url='http://yamistha.cloudjiffy.net/subject';
  constructor(private http:HttpClient) { }

  subjects=[];

  ngOnInit(): void {
    this.http
    .get(this.url)
    .toPromise()
    .then((res)=>{
    var data=res['data'];
    var content=data['content'];
      this.subjects=content.map(key=>({...key}))
  });
  }

  

}
