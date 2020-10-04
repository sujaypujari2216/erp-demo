import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class StudentshouseService {
  url = 'http://yamistha.cloudjiffy.net/api/school-house/';

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('sessionid', (this.jwt.getSessionID()).toString());

  saveHouse(schoolHous): any {
    return this.http.post(this.url, schoolHous, { headers: this.headers });
  }

  getHouseList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteHouse(houseId): any {
    return this.http.delete(this.url + houseId, { headers: this.headers });
  }

  updateHouse(schoolHous, houseId): any {
    return this.http.put(this.url + houseId, schoolHous, { headers: this.headers });
  }

  getHouseById(houseId): any {
    return this.http.get(this.url + houseId, { headers: this.headers });
  }
}
