import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class AdmissionformService {
  url = `http://yamistha.cloudjiffy.net/api/student/`;

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
   headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

 
  addadmisssionform(studentDto): any {
    return this.http.post(this.url, studentDto, { headers: this.headers });
  }
  getadmissionformList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteadmissionform(AdmId): any {
    return this.http.delete(this.url + AdmId, { headers: this.headers });
  }

  updateadmissionform(studentDto, AdmId): any {
    return this.http.put(this.url + AdmId, studentDto, { headers: this.headers });
  }

  getadmissionformById(AdmId): any {
    return this.http.get(this.url + AdmId, { headers: this.headers });
  }
}