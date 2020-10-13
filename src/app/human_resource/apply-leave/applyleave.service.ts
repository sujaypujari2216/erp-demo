import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class ApplyleaveService {

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  url = `http://yamistha.cloudjiffy.net/api/staff-leave/`;


  save(leaveTypeDto): any {
    return this.http.post(this.url, leaveTypeDto, { headers: this.headers });
  }

  getapplyleaveList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteleave(leavetypeId): any {
    return this.http.delete(this.url + leavetypeId, { headers: this.headers });
  }

  updateleave(leaveTypeDto, leavetypeId): any {
    return this.http.put(this.url + leavetypeId, leaveTypeDto, { headers: this.headers });
  }

  getleaveById(leavetypeId): any {
    return this.http.get(this.url + leavetypeId, { headers: this.headers });
  }
}