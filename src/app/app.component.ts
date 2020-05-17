import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'http://yamistha.cloudjiffy.net/hostel-room?pageNo=0&pageSize=10&sortBy=id';
  constructor(private http:HttpClient){
    this.http.get(this.url).toPromise().then( data=>{
      console.log(data);

    });
     

    }
  }
  

