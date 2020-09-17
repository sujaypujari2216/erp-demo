import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-admit-form',
  templateUrl: './admit-form.component.html',
  styleUrls: ['./admit-form.component.css']
})
export class AdmitFormComponent implements OnInit {
 
  @ViewChild(LoginComponent) Login;
  roles:string=this.Login.role;
  constructor() { }

  ngOnInit(): void {
    this.Ischeck();
  }
  Ischeck()
  {
    if(this.roles=="ROLE_ADMIN")
    {
      console.log("Role admin");
    }
    else{
      console.log("not executed");
    }
  }

}
