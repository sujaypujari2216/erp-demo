import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddHomeworkService {

  url = 'http://yamistha.cloudjiffy.net/api/homework';

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  save(homeworkDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/homework', homeworkDto, { headers: this.headers });
  }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('sessionid', (this.jwt.getSessionID()).toString());
  gethostelList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/homework', { headers: this.headers });
  }

  delete(Id): any {

    console.log(this.url + Id);
    return this.http.delete('http://yamistha.cloudjiffy.net/homework/' + Id, { headers: this.headers });
  }

  update(homeworkDto, Id): any {
    return this.http.put('http://yamistha.cloudjiffy.net/homework/' + Id, homeworkDto, { headers: this.headers });
  }

  getById(Id): any {
    return this.http.get('http://yamistha.cloudjiffy.net/homework/' + Id, { headers: this.headers });
  }
}
