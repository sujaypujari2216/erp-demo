import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';
@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('sessionid', (this.jwt.getSessionID()).toString());

  saveClass(classDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/api/api/class/', classDto, { headers: this.headers });
  }


  getClassList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/api/api/class/', { headers: this.headers });
  }

  deleteClass(classId): any {
    return this.http.delete('http://yamistha.cloudjiffy.net/api/api/class/' + classId, { headers: this.headers });
  }

  updateClass(classDto, classId): any {
    return this.http.put('http://yamistha.cloudjiffy.net/api/api/class/' + classId, classDto, { headers: this.headers });
  }

  getClassById(classId): any {
    return this.http.get('http://yamistha.cloudjiffy.net/api/api/class/' + classId, { headers: this.headers });
  }

}
