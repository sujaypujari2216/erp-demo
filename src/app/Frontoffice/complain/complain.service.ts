import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {
  constructor(private http: HttpClient,private jwt:JWTTokenServiceService) { }

  url = `http://yamistha.cloudjiffy.net/api/complaint`;
  
	
  addComplain(complaint): any {
    return this.http.post(this.url, complaint, { headers: this.headers });
  }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('sessionid', (this.jwt.getSessionID()).toString());

  getAllComplainList(): any {
    return this.http.get(this.url,{headers:this.headers});
  }

  deleteComplain(complainId): any {

    return this.http.delete(this.url + complainId, { headers: this.headers });
  }

  updateComplain(complaint, complainId): any {
    return this.http.put(this.url + complainId, complaint, { headers: this.headers });
  }

  getcomplainById(complainId): any {
    return this.http.get(this.url + complainId, { headers: this.headers });
  }

}



