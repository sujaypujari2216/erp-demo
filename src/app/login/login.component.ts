import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { Router } from '@angular/router';
import { LocalStorageServiceService } from '../local-storage-service.service';
import { JWTTokenServiceService } from '../jwttoken-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  loginRequest = {
    "password": "",
    "username": ""
  }

 Token;

  constructor( private authloginservice: AuthLoginService,  private router: Router,private localstorage:LocalStorageServiceService,private jwtauth:JWTTokenServiceService) { }

  ngOnInit(): void {
    this.closesession();
  }

  closesession(){
    this.jwtauth.clearsession();
    console.log(this.jwtauth.jwtToken);
    console.log(this.jwtauth.decodedToken);
    this.localstorage.remove("access_token");
    this.localstorage.remove("CurrentRole");
    this.localstorage.remove("CurrentUsername");
  
  }
  login(){
    this.authloginservice.isLogin(this.loginRequest).subscribe((res: any) => {
      console.log(res);
  
       this.jwtauth.setToken(res.accessToken);
      this.localstorage.set("CurrentRole",res.roles[0]);
      this.localstorage.set("CurrentUsername",res.username);
      this.localstorage.set("access_token",res);
      this.router.navigate(['/admin']);
     console.log(this.jwtauth.getSessionID());
      console.log('success');
      alert('Login Successfull');
     
    }, (err) => {
      console.log('Error While Login');
      alert('Wrong Credentials!!!');
      console.error(err);
    });
  }
}
