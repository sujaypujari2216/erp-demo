import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';
import { AuthLoginService } from 'src/app/login/auth-login.service';


@Injectable({
  providedIn: 'root'
})
export class ComplainttypeService {
  url = `http://yamistha.cloudjiffy.net/api/complaint-type`;

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  //this is header file we have to implement in each service where header needs to be pass
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('sessionid', (this.jwt.getSessionID()).toString());

  save(complaintType): any {
    return this.http.post(this.url, complaintType, { headers: this.headers });
  }
  getAllComplaintTypeList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  delete(Id): any {
    return this.http.delete(this.url + Id, { headers: this.headers });
  }

  update(complaintType, Id): any {
    return this.http.put(this.url + Id,complaintType, { headers: this.headers });
  }

  getById(Id): any {
    return this.http.get(this.url + Id, { headers: this.headers });
  }
}
