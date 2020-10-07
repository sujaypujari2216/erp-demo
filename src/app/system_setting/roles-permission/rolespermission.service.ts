
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class RolespermissionService {

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

  url='http://yamistha.cloudjiffy.net/api/role/';
  save(rolesDto): any {
    return this.http.post(this.url, rolesDto, { headers: this.headers });
  }

  getroleList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleterole(rolesId): any {
    return this.http.delete(this.url + rolesId, { headers: this.headers });
  }

  updaterole(sessionrolesDto, rolesId): any {
    return this.http.put(this.url + rolesId, sessionrolesDto, { headers: this.headers });
  }

  getroleById(rolesId): any {
    return this.http.get(this.url + rolesId, { headers: this.headers });
  }
}