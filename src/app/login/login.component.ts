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

  ngOnInit(): void {}

  login(){
    this.authloginservice.isLogin(this.loginRequest).subscribe((res: any) => {
      console.log(res);
      // this.Token=res.accessToken;
      this.authloginservice.setJWTToken(res.accessToken);
      // this.authloginservice.accessToken=res.accessToken;
      // localStorage.setItem('currentSession', JSON.stringify(res));
       this.jwtauth.setToken(res.accessToken);
      this.localstorage.set("CurrentRole",res.roles[0]);
      this.localstorage.set("CurrentUsername",res.username);
      this.Token=this.jwtauth.getDecodeToken();
      console.log(this.Token);
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
