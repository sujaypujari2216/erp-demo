import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';

import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';



@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

  url = `http://yamistha.cloudjiffy.net/api/department/`;

  save(department): any {
    return this.http.post(this.url, department, { headers: this.headers });
  }

  getdeptList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletedept(departmentId): any {
    return this.http.delete(this.url + departmentId, { headers: this.headers });
  }

  updatedept(department, departmentId): any {
    return this.http.put(this.url + departmentId, department, { headers: this.headers });
  }

  getdepartmentById(departmentId): any {
    return this.http.get(this.url + departmentId, { headers: this.headers });
  }
}