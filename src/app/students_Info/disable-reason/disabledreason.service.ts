import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class DisabledreasonService {

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('sessionid', (this.jwt.getSessionID()).toString());
  url = `http://yamistha.cloudjiffy.net/api/disable-reason`;

  save(disableReason): any {
    return this.http.post(this.url, disableReason, { headers: this.headers });
  }

  getreasonList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletereason(reasonId): any {
    return this.http.delete(this.url + reasonId, { headers: this.headers });
  }

  updatereason(disableReason, reasonId): any {
    return this.http.put(this.url + reasonId, disableReason, { headers: this.headers });
  }

  getreasonById(reasonId): any {
    return this.http.get(this.url + reasonId, { headers: this.headers });
  }
}