import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';

import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  url = `http://yamistha.cloudjiffy.net/api/room-type/`;


  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  save(roomType): any {
    return this.http.post(this.url, roomType, { headers: this.headers });
  }

  getroomtypeList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  delete(Id): any {

    console.log(this.url+ Id);
    return this.http.delete(this.url + Id, { headers: this.headers });
  }

  update(roomType, Id): any {
    return this.http.put(this.url + Id, roomType, { headers: this.headers });
  }

  getById(Id): any {
    return this.http.get(this.url + Id, { headers: this.headers });
  }



}