import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';

import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';



@Injectable({
  providedIn: 'root'
})
export class SubjectService {


  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  url = 'http://yamistha.cloudjiffy.net/api/subject/';

  saveSubject(subjectDto): any {
    return this.http.post(this.url, subjectDto, { headers: this.headers });
  }

  getAllSubjectList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteSubject(subjectId): any {
    return this.http.delete(this.url + subjectId, { headers: this.headers });
  }

  updateSubject(subjectDto, subjectId): any {
    return this.http.put(this.url + subjectId, subjectDto, { headers: this.headers });
  }

  getSubjectById(subjectId): any {
    return this.http.get(this.url + subjectId, { headers: this.headers });
  }

}