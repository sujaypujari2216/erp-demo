import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class ComplainttypeService {
  url = `http://yamistha.cloudjiffy.net/api/complaint-type/`;

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }

  save(complaintType): any {
    return this.http.post(this.url, complaintType, { headers: this.headers });
  }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('sessionid', (this.jwt.getSessionID()).toString());
  getAllComplaintTypeList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  delete(Id): any {
    return this.http.delete(this.url + Id);
  }

  update(Dto, Id): any {
    return this.http.put(this.url + Id, Dto);
  }

  getById(Id): any {
    return this.http.get(this.url + Id);
  }
}
