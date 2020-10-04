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
 //this is header file we have to implement in each service where header needs to be pass
 headers=new HttpHeaders().set('Authorization',('Bearer '+this.jwt.jwtToken).toString()).set('Content-Type','application/json').set('sessionid',(this.jwt.getSessionID()).toString());
  
  save(enquiry): any {
    return this.http.post(this.url, enquiry,{headers:this.headers});
  }
  
  getList(): any {
   //here we pass header
   return this.http.get(this.url,{headers:this.headers});
  }

  deleteenq(EnqId): any {

    return this.http.delete(this.url + EnqId, { headers: this.headers });
  }

  update(enquiry, EnqId): any {
    //use as per swagger api pass values as per swagger sequence
    return this.http.put(this.url + EnqId,enquiry,{headers:this.headers});
  }

  getById(EnqId): any {
    return this.http.get(this.url + EnqId,{headers:this.headers});
  }
}

