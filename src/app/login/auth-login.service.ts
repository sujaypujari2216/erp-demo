import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
 url=`http://yamistha.cloudjiffy.net/auth/login/`;

 decodedToken:String;
  jwtToken: any;
  constructor(private  http:HttpClient) { }
  isLogin(loginRequest): any {
    return this.http.post(this.url, loginRequest);
  }
  getJWTToken() {
      return jwt_decode(this.jwtToken);
  }
  setJWTToken(token:string){
      this.jwtToken=token;
  }
}
