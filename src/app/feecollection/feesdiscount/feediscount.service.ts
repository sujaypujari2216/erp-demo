import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeediscountService {
  constructor(private http: HttpClient) { }

  url = 'http://yamistha.cloudjiffy.net/api/fee-discount/';


  save(feeDiscountDto): any {
    return this.http.post(this.url, feeDiscountDto);
  }

  getdiscountList(): any {
    return this.http.get(this.url);
  }

  deletediscount(discountId): any {
    return this.http.delete(this.url + discountId);
  }

  updatediscount(feeDiscountDto, discountId): any {
    return this.http.put(this.url + feeDiscountDto, discountId);
  }

  getdiscountById(discountId): any {
    return this.http.get(this.url + discountId);
  }
}
