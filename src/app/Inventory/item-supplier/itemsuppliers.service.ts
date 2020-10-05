import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';

import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class ItemsuppliersService {
  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  url = `http://yamistha.cloudjiffy.net/api/item-supplier/`;

  save(itemSupplierDto): any {
    return this.http.post(this.url, itemSupplierDto, { headers: this.headers });
  }

  getsupplierList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletesupplier(supplierId): any {
    return this.http.delete(this.url + supplierId, { headers: this.headers });
  }

  updatesupplier(itemSupplierDto, supplierId): any {
    return this.http.put(this.url + supplierId, { headers: this.headers }, itemSupplierDto);
  }

  getsupplierById(supplierId): any {
    return this.http.get(this.url + supplierId, { headers: this.headers });
  }
}