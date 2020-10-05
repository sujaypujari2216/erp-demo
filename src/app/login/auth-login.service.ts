import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { LocalStorageServiceService } from '../local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  
 url=`http://yamistha.cloudjiffy.net/auth/login/`;

 

  constructor(private  http:HttpClient,private localstorage:LocalStorageServiceService) { }
  isLogin(loginRequest): any {
    return this.http.post(this.url, loginRequest);
  }
  get isLoggedIn(): boolean {
    let authToken = this.localstorage.get('access_token');
    return (authToken !== null) ? true : false;
  }
 
}
