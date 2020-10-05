import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class AddincomeService {
  constructor(private http: HttpClient, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());




  url = `http://yamistha.cloudjiffy.net/api/income/`;


  save(incomeDto): any {
    return this.http.post(this.url, incomeDto, { headers: this.headers });
  }

  getincomeList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteincome(incomeId): any {
    return this.http.delete(this.url + incomeId, { headers: this.headers });
  }

  updateincome(incomeDto, incomeId): any {
    return this.http.put(this.url + incomeId, incomeDto, { headers: this.headers });
  }

  getincomeById(incomeId): any {
    return this.http.get(this.url + incomeId, { headers: this.headers });
  }
}
