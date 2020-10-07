import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';
@Injectable({
  providedIn: 'root'
})
export class AdditemService {

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  url = `http://yamistha.cloudjiffy.net/api/item/`;


  save(itemDto): any {
    return this.http.post(this.url, itemDto, { headers: this.headers });
  }

  getitemList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteitem(itemId): any {
    return this.http.delete(this.url + itemId, { headers: this.headers });
  }

  updateitem(itemDto, itemId): any {
    return this.http.put(this.url + itemId, itemDto, { headers: this.headers });
  }

  getitemById(itemId): any {
    return this.http.get(this.url + itemId, { headers: this.headers });
  }
}
