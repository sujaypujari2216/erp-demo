import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';
import { AuthLoginService } from 'src/app/login/auth-login.service';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  url = `http://yamistha.cloudjiffy.net/api/source/`;

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());
  save(Dto): any {
    return this.http.post(this.url, Dto, { headers: this.headers });
  }
  getAllSourceList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  delete(Id): any {
    return this.http.delete(this.url + Id, { headers: this.headers });
  }

  update(Dto, Id): any {
    return this.http.put(this.url + Id, Dto, { headers: this.headers });
  }

  getById(Id): any {
    return this.http.get(this.url + Id, { headers: this.headers });
  }
}
