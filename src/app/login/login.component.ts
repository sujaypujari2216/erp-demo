import { Component, OnInit, Output } from '@angular/core';
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
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
  role:string;
 

  constructor( private authloginservice: AuthLoginService,  private router: Router,) { }

  ngOnInit(): void {
    
  }

  login(){
    this.authloginservice.isLogin(this.loginRequest).subscribe((res: any) => {
      //console.log(res);
      if (res.roles[0] == "ROLE_ADMIN") {
        this.role=res.roles[0];
      this.router.navigate(['/admin']);
      console.log('success');
      console.log(res);
      alert('Login Successfull');
      
      }
    }, (err) => {
      console.log('Error While Login');
      console.error(err);
    });
  }

  getRole(){
    return this.role;
  }
}
