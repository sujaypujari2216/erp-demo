import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';

import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

  url = `http://yamistha.cloudjiffy.net/api/hostel-room/`;

  save(hostelroomDto): any {
    return this.http.post(this.url, hostelroomDto, { headers: this.headers });
  }


  getHostelRoomList(): any {
    return this.http.get(this.url, { headers: this.headers });

  }
  deleteHostelRoom(hostelroomId): any {
    return this.http.delete(this.url + hostelroomId, { headers: this.headers });
  }

  updateHostelRoom(hostelroomDto, hostelroomId): any {
    return this.http.put(this.url + hostelroomId, hostelroomDto, { headers: this.headers });
  }
  getHostelRoomById(hostelroomId): any {
    return this.http.get(this.url + hostelroomId, { headers: this.headers });
  }
}