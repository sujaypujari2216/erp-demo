import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';

import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class ItemstoreService {
  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

  url = `http://yamistha.cloudjiffy.net/api/item-Store/`;

  save(itemStoreDto): any {
    return this.http.post(this.url, itemStoreDto, { headers: this.headers });
  }

  getstoreList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletestore(storeId): any {
    return this.http.delete(this.url + storeId, { headers: this.headers });
  }

  updatestore(itemStoreDto, storeId): any {
    return this.http.put(this.url + storeId, itemStoreDto, { headers: this.headers });
  }

  getstoreById(storeId): any {
    return this.http.get(this.url + storeId, { headers: this.headers });
  }
}