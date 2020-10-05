import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

  url = `http://yamistha.cloudjiffy.net/api/vehicle/`;

  save(vehicleDto): any {
    return this.http.post(this.url, vehicleDto, { headers: this.headers });
  }

  getvehList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteveh(vehId): any {
    return this.http.delete(this.url + vehId, { headers: this.headers });
  }

  updateveh(vehicleDto, vehId): any {
    return this.http.put(this.url + vehId, { headers: this.headers }, vehicleDto);
  }

  getvehById(vehId): any {
    return this.http.get(this.url + vehId, { headers: this.headers });
  }
}