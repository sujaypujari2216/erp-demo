import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';
import { AuthLoginService } from 'src/app/login/auth-login.service';


@Injectable({
  providedIn: 'root'
})
export class OnlineexaminationService {
  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  url = 'http://yamistha.cloudjiffy.net/api/online-exam/';


  save(onlineexamDto): any {
    return this.http.post(this.url, onlineexamDto, { headers: this.headers });
  }

  getonlineList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteonline(onlineId): any {
    return this.http.delete(this.url + onlineId, { headers: this.headers });
  }

  updateonline(onlineexamDto, onlineId): any {
    return this.http.put(this.url + onlineId, onlineexamDto, { headers: this.headers });
  }

  getonlineById(onlineId): any {
    return this.http.get(this.url + onlineId, { headers: this.headers });
  }
}
