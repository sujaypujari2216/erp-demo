import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';
@Injectable({
  providedIn: 'root'
})
export class StaffAttendanceTypeService {

constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  url = 'http://yamistha.cloudjiffy.net/api/attendance-type/';


  save(Dto): any {
    return this.http.post(this.url, Dto, { headers: this.headers });
  }

  get(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  delete(headId): any {
    return this.http.delete(this.url + headId, { headers: this.headers });
  }

  update(Dto, headId): any {
    return this.http.put(this.url + headId, Dto, { headers: this.headers });
  }

  getById(headId): any {
    return this.http.get(this.url + headId);
  }
}
