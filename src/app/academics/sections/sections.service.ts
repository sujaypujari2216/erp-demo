import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(private http: HttpClient, private authservice: AuthLoginService, private jwt: JWTTokenServiceService) { }
  saveSection(sectionDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/api/section', sectionDto, { headers: this.headers });
  }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());

  getAllSectionList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/api/section/', { headers: this.headers });
  }

  deleteSection(sectionId): any {
    return this.http.delete('http://yamistha.cloudjiffy.net/api/section/' + sectionId, { headers: this.headers });
  }

  updateSection(sectionDto, sectionId): any {
    return this.http.put('http://yamistha.cloudjiffy.net/api/section/' + sectionId, sectionDto, { headers: this.headers });
  }

  getSectionById(sectionId): any {
    return this.http.get('http://yamistha.cloudjiffy.net/api/section/' + sectionId, { headers: this.headers });
  }

}

