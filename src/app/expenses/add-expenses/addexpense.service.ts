import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddexpenseService {
  constructor(private http: HttpClient, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());



  url = 'http://yamistha.cloudjiffy.net/api/expense/';


  save(expenseDto): any {
    return this.http.post(this.url, expenseDto, { headers: this.headers });
  }

  getexpenseList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteexpense(expenseId): any {
    return this.http.delete(this.url + expenseId, { headers: this.headers });
  }

  updateexpense(expenseDto, expenseId): any {
    return this.http.put(this.url + expenseId, expenseDto, { headers: this.headers });
  }

  getByexpenseId(expenseId): any {
    return this.http.get(this.url + expenseId, { headers: this.headers });
  }
}
