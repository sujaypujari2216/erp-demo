import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  url = `http://yamistha.cloudjiffy.net/api/complaint/`;
<<<<<<< HEAD

  constructor(private http: HttpClient) { }

=======
  constructor(private http: HttpClient,private awt:JWTTokenServiceService) { }
	
>>>>>>> 2ab9689127546faf1e22d424d21d3343f73255aa
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

<<<<<<< HEAD
}
=======


}
>>>>>>> 2ab9689127546faf1e22d424d21d3343f73255aa
