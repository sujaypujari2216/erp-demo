import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';
@Injectable({
  providedIn: 'root'
})
export class AddhomeworkService {
  url = `http://yamistha.cloudjiffy.net/api/homework/`;

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  save(homeworkDto): any {
    return this.http.post(this.url, homeworkDto, { headers: this.headers });
  }

  gethomeworkList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletehw(hwId): any {
    return this.http.delete(this.url + hwId, { headers: this.headers });
  }

  updatehw(homeworkDto, hwId): any {
    return this.http.put(this.url + hwId, homeworkDto, { headers: this.headers });
  }

  gethwById(hwId): any {
    return this.http.get(this.url + hwId, { headers: this.headers });
  }
}