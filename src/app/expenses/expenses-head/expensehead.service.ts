import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class ExpenseheadService {
  constructor(private http: HttpClient, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());



  url = 'http://yamistha.cloudjiffy.net/api/expense-head/';


  save(expenseHeadDto): any {
    return this.http.post(this.url, expenseHeadDto, { headers: this.headers });
  }

  getheadList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteexpensehead(headId): any {
    return this.http.delete(this.url + headId, { headers: this.headers });
  }

  updateexpensehead(expenseHeadDto, headId): any {
    return this.http.put(this.url + headId, expenseHeadDto, { headers: this.headers });
  }

  getheadById(headId): any {
    return this.http.get(this.url + headId, { headers: this.headers });
  }
}
