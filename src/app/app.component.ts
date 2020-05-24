import { Component, AfterViewInit, OnInit } from '@angular/core';
import { PreloaderService } from './shared/preloader/preloader.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  url = 'http://yamistha.cloudjiffy.net/hostel-room?pageNo=0&pageSize=10&sortBy=id';
  constructor(private preloader: PreloaderService,private http:HttpClient){
    this.http.get(this.url).toPromise().then( data=>{
      console.log(data);
    });
    }
    ngOnInit() {}

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
  

