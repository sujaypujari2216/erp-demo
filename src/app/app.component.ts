import { Component, AfterViewInit, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { PreloaderService } from "./shared/preloader/preloader.service";
import { Router } from '@angular/router';
import { JWTTokenServiceService } from './jwttoken-service.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit,OnChanges {
  //url = 'http://yamistha.cloudjiffy.net/hostel-room?pageNo=0&pageSize=10&sortBy=id';
  constructor(private preloader: PreloaderService,private jwt:JWTTokenServiceService,private router:Router) {
    // this.http.get(this.url).toPromise().then( data=>{
    //   console.log(data);
    // });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.jwt.getSessionID()==null)
    {
      console.log(this.jwt.getSessionID());
      this.router.navigate(['/Login']);
    }
    console.log(this.jwt.getSessionID());
  }
  
  ngOnInit() {
   
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
  
}
