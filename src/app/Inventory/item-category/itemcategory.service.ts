import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';

import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class ItemcategoryService {
  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

  url = `http://yamistha.cloudjiffy.net/api/item-category/`;

  save(itemCategoryDto): any {
    return this.http.post(this.url, itemCategoryDto, { headers: this.headers });
  }

  getcategoryList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletecategory(categoryId): any {
    return this.http.delete(this.url + categoryId, { headers: this.headers });
  }

  updatecategory(itemCategoryDto, categoryId): any {
    return this.http.put(this.url + categoryId, itemCategoryDto, { headers: this.headers });
  }

  getitemCategoryById(categoryId): any {
    return this.http.get(this.url + categoryId, { headers: this.headers });
  }
}