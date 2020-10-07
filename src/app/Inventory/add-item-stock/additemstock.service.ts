import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';
@Injectable({
  providedIn: 'root'
})
export class AdditemstockService {

constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  url = `http://yamistha.cloudjiffy.net/api/item-stock/`;


  save(itemStockDto): any {
    return this.http.post(this.url, itemStockDto, { headers: this.headers });
  }

  getitemstockList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteitemstock(itemId): any {
    return this.http.delete(this.url + itemId, { headers: this.headers });
  }

  updateitemstock(itemStockDto, itemId): any {
    return this.http.put(this.url + itemId, itemStockDto, { headers: this.headers });
  }

  getitemstockById(itemId): any {
    return this.http.get(this.url + itemId, { headers: this.headers });
  }
}
