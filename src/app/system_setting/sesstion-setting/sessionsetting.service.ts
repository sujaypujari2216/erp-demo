
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class SessionsettingService {

  constructor(private http: HttpClient, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('sessionid', (this.jwt.getSessionID()).toString());
  url = `http://yamistha.cloudjiffy.net/api/session/`;

  save(Dto): any {
    return this.http.post(this.url, Dto, { headers: this.headers });
  }

  getsessionList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletesession(sessionId): any {
    return this.http.delete(this.url + sessionId, { headers: this.headers });
  }

  updatesession(sessionDto, sessionId): any {
    return this.http.put(this.url + sessionId, sessionDto, { headers: this.headers });
  }

  getsessionById(sessionId): any {
    return this.http.get(this.url + sessionId, { headers: this.headers });
  }
}