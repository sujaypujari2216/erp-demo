import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class IncomeheadService {
  constructor(private http: HttpClient, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

  url = 'http://yamistha.cloudjiffy.net/api/income-head/';


  save(incomeHeadDto): any {
    return this.http.post(this.url, incomeHeadDto, { headers: this.headers });
  }

  getincomeheadList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteincomehead(incomeheadId): any {
    return this.http.delete(this.url + incomeheadId, { headers: this.headers });
  }

  updateincomehead(incomeHeadDto, incomeheadId): any {
    return this.http.put(this.url + incomeheadId, incomeHeadDto, { headers: this.headers });
  }

  getincomeheadById(incomeheadId): any {
    return this.http.get(this.url + incomeheadId, { headers: this.headers });
  }
}
