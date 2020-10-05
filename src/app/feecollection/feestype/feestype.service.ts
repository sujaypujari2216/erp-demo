import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';



@Injectable({
  providedIn: 'root'
})
export class FeestypeService {
  constructor(private http: HttpClient, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());



  url = 'http://yamistha.cloudjiffy.net/api/fee-type/';


  save(feeTypeDto): any {
    return this.http.post(this.url, feeTypeDto, { headers: this.headers });
  }

  gettypeList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deletetype(typeId): any {
    return this.http.delete(this.url + typeId, { headers: this.headers });
  }

  updatetype(feeTypeDto, typeId): any {
    return this.http.put(this.url + typeId, feeTypeDto, { headers: this.headers });
  }

  gettypeById(typeId): any {
    return this.http.get(this.url + typeId, { headers: this.headers });
  }
}
