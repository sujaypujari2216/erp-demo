import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { JWTTokenServiceService } from '../jwttoken-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  
 url=`http://yamistha.cloudjiffy.net/auth/login/`;

 decodedToken:String;
  jwtToken: string;
  constructor(private  http:HttpClient,private jwt:JWTTokenServiceService) { }
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
