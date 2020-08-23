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
  login = ()=>{
   
    // this.authloginservice.isLogin(this.loginRequest).subscribe((res: any) => {
    //   if (res.success == true) {
      //here is a problem to navigate
    //     this.router.navigateByUrl('/admin');
    //     alert('Login Successfully');
    //     console.log(this.loginRequest);
        
        
    //   }
    // }, (err) => {
    //   console.log('Error While Login');
    //   console.error(err);
    //   console.log(this.loginRequest);
    // });
    this.authloginservice.isLogin(this.loginRequest).then((success) => {      

      //This is where its broke - below:     
      //this navigation works      
      this.router.navigateByUrl('/admin');

   });
  }

  login2()
  {

  }
 
}
