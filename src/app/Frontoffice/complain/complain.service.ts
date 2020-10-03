import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  url = `http://yamistha.cloudjiffy.net/api/complaint/`;

  constructor(private http: HttpClient,private awt:JWTTokenServiceService) { }
	
  addComplain(complaint): any {
    return this.http.post(this.url, complaint);
  }

  getAllComplainList(): any {
    var header=new HttpHeaders();
    header.append('sessionid ',this.awt.getSessionID());
    return this.http.get('http://yamistha.cloudjiffy.net/api/complaint',{headers:header});
  }

  deleteComplain(complainId): any {

    return this.http.delete(this.url + complainId);
  }

  updateComplain(complaint, complainId): any {
    return this.http.put(this.url + complainId, complaint);
  }

  getcomplainById(complainId): any {
    return this.http.get(this.url + complainId);
  }

}



