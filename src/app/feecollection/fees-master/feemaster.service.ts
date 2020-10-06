import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class FeemasterService {
  url = `http://yamistha.cloudjiffy.net/api/feemaster/`;

 constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  addmaster(requestDto): any {
    return this.http.post(this.url, requestDto, { headers: this.headers });
  }

  getmasterList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletemaster(masterId): any {
    return this.http.delete(this.url + masterId, { headers: this.headers });
  }

  updatemaster(requestDto, masterId): any {
    return this.http.put(this.url + masterId, requestDto, { headers: this.headers });
  }

  getmasterById(masterId): any {
    return this.http.get(this.url + masterId, { headers: this.headers });
  }
}
