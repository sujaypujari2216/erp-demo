import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';
import { AuthLoginService } from 'src/app/login/auth-login.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionbankService {
  constructor(private http: HttpClient, private authservice: AuthLoginService,private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());




  url = 'http://yamistha.cloudjiffy.net/api/question/';


  save(questionDto): any {
    return this.http.post(this.url, questionDto, { headers: this.headers });
  }

  getquestionList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteque(queId): any {
    return this.http.delete(this.url + queId, { headers: this.headers });
  }

  updateque(questionDto, queId): any {
    return this.http.put(this.url + queId, questionDto, { headers: this.headers });
  }

  getqueById(queId): any {
    return this.http.get(this.url + queId, { headers: this.headers });
  }
}
