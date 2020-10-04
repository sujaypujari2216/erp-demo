import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class PostalreceiveService {
  url = `http://yamistha.cloudjiffy.net/api/dispatch-receive`;


constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  save(dispatchReceiveDto): any {
    return this.http.post(this.url, dispatchReceiveDto, { headers: this.headers });
  }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('sessionid', (this.jwt.getSessionID()).toString());
  getAllList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleterec(Id): any {

    return this.http.delete(this.url + Id, { headers: this.headers });
  }

  update(dispatchReceiveDto, Id): any {
    return this.http.put(this.url + Id, dispatchReceiveDto, { headers: this.headers });
  }

  getById(Id): any {
    return this.http.get(this.url + Id, { headers: this.headers });
  }
}
