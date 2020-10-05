import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class SubjectgroupService {

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  url = `http://yamistha.cloudjiffy.net/api/subject group/`;

  save(subjectGroupDto): any {
    return this.http.post(this.url, subjectGroupDto, { headers: this.headers });
  }

  getsgList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletesg(subjectgroupId): any {
    return this.http.delete(this.url + subjectgroupId, { headers: this.headers });
  }

  updatesg(subjectGroupDto, subjectgroupId): any {
    return this.http.put(this.url + subjectgroupId, subjectGroupDto);
  }

  getsgById(subjectgroupId): any {
    return this.http.get(this.url + subjectgroupId, { headers: this.headers });
  }
}