import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';
@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  url = `http://yamistha.cloudjiffy.net/api/enquiry/`;

  constructor(private http: HttpClient,private authservice : AuthLoginService,private jwt:JWTTokenServiceService) { }

  save(enquiry): any {
    return this.http.post(this.url, enquiry);
  }

  getenqList(): any {
    // const  opts={
    // headers:new HttpHeaders({
    //   'X-Requested-With':this.authservice.accessToken
    // })
  //};
  //  HeaderAPI.append('Authorization','Bearer ' + this.authservice.accessToken);
    const session=this.jwt.getSessionID();
    return this.http.get(this.url);
  }

  deleteenq(EnqId): any {

    return this.http.delete(this.url + EnqId);
  }

  update(enquiry, EnqId): any {
    return this.http.put(this.url + EnqId, enquiry);
  }

  getById(EnqId): any {
    return this.http.get(this.url + EnqId);
  }
}

