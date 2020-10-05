import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class FeediscountService {
  constructor(private http: HttpClient, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());



  url = 'http://yamistha.cloudjiffy.net/api/fee-discount/';


  save(feeDiscountDto): any {
    return this.http.post(this.url, feeDiscountDto, { headers: this.headers });
  }

  getdiscountList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletediscount(discountId): any {
    return this.http.delete(this.url + discountId, { headers: this.headers });
  }

  updatediscount(feeDiscountDto, discountId): any {
    return this.http.put(this.url + discountId, feeDiscountDto, { headers: this.headers });
  }

  getdiscountById(discountId): any {
    return this.http.get(this.url + discountId, { headers: this.headers });
  }
}
