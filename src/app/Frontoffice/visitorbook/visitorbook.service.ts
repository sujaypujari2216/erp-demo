import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class VisitorbookService {
  url = `http://yamistha.cloudjiffy.net/api/visitors-book/`;

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  //this is header file we have to implement in each service where header needs to be pass
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('sessionid', (this.jwt.getSessionID()).toString());
    
  save(visitorsBook): any {
    return this.http.post(this.url, visitorsBook, { headers: this.headers });
  }
  getvisitorList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletevb(VbId): any {
    return this.http.delete(this.url + VbId, { headers: this.headers });
  }

  updatevb(visitorsBook, VbId): any {
    return this.http.put(this.url + VbId, { headers: this.headers },visitorsBook);
  }

  getByVbId(VbId): any {
    return this.http.get(this.url + VbId, { headers: this.headers });
  }
}
