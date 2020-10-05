import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class LeavetypeService {

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

  url = `http://yamistha.cloudjiffy.net/api/leave-type/`;

  save(leaveTypeDto): any {
    return this.http.post(this.url, leaveTypeDto, { headers: this.headers });
  }

  getleavetypeList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteleavetype(leavetypeId): any {
    return this.http.delete(this.url + leavetypeId, { headers: this.headers });
  }

  updateleavetype(leaveTypeDto, leavetypeId): any {
    return this.http.put(this.url + leavetypeId, leaveTypeDto, { headers: this.headers });
  }

  getleavetypeById(leavetypeId): any {
    return this.http.get(this.url + leavetypeId, { headers: this.headers });
  }
}