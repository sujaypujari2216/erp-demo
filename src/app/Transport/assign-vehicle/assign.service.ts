import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class AssignService {
  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

  url = `http://yamistha.cloudjiffy.net/api/vehicle-route/`;

  save(vehicleRouteDto): any {
    return this.http.post(this.url, vehicleRouteDto, { headers: this.headers });
  }

  getassignList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteasign(assignId): any {
    return this.http.delete(this.url + assignId, { headers: this.headers });
  }

  updateassign(vehicleRouteDto, assignId): any {
    return this.http.put(this.url + assignId, vehicleRouteDto, { headers: this.headers });
  }

  getassignById(assignId): any {
    return this.http.get(this.url + assignId, { headers: this.headers });
  }
}