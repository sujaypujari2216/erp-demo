import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';
@Injectable({
  providedIn: 'root'
})
export class ClassService {
url=`http://yamistha.cloudjiffy.net/api/class/`;
  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('sessionid', (this.jwt.getSessionID()).toString());

  saveClass(classDto): any {
    return this.http.post(this.url, classDto, { headers: this.headers });
  }


  getClassList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  deleteClass(classId): any {
    return this.http.delete(this.url + classId, { headers: this.headers });
  }

  updateClass(classDto, classId): any {
    return this.http.put(this.url + classId, classDto, { headers: this.headers });
  }

  getClassById(classId): any {
    return this.http.get(this.url + classId, { headers: this.headers });
  }

}
