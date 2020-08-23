import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { Router } from '@angular/router';
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

 

  constructor( private authloginservice: AuthLoginService,  private router: Router,) { }

  ngOnInit(): void {
  }
  login(){
    this.authloginservice.isLogin(this.loginRequest).subscribe((res: any) => {
      if (res.success == true) {
        alert('Login Successfully');
        console.log(this.loginRequest);
        window.location.href = 'localhost:4200/#/admin';
        
      }
    }, (err) => {
      console.log('Error While Login');
      console.error(err);
      console.log(this.loginRequest);
    });
  }
 
}
