import { Component, AfterViewInit, OnInit, Input, ViewChild } from "@angular/core";
import { PreloaderService } from "./shared/preloader/preloader.service";
import { HttpClient } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { LoginComponent } from 'src/app/login/login.component';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private preloader: PreloaderService, private http: HttpClient) {}
  
  //@ViewChild(LoginComponent) Login;
  //role:string;
   ngOnInit() {
  }

  ngAfterViewInit() {
    this.preloader.hide();
   
  }
  
 /* Ischeck()
  {
    if(this.role=="ROLE_ADMIN")
    {
      console.log("Role admin");
    }
    else{
      console.log("not login");
    }
  }*/
}
