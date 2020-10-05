import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';


@Injectable({
  providedIn: 'root'
})
export class AddrouteService {
  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

  url = `http://yamistha.cloudjiffy.net/api/transport-route`;
  
  save(transportRouteDto): any {
    return this.http.post(this.url, transportRouteDto, { headers: this.headers });
  }

  getrouteList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteroute(routeId): any {
    return this.http.delete(this.url + routeId, { headers: this.headers });
  }

  updateroute(transportRouteDto, routeId): any {
    return this.http.put(this.url + routeId, transportRouteDto, { headers: this.headers });
  }

  getrouteByrouteId(routeId): any {
    return this.http.get(this.url + routeId, { headers: this.headers });
  }
}