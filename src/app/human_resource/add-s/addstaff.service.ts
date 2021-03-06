import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JWTTokenServiceService } from 'src/app/jwttoken-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddstaffService {
  url = `http://yamistha.cloudjiffy.net/api/staff/`;

  constructor(private http: HttpClient, private jwt: JWTTokenServiceService) { }
  headers = new HttpHeaders().set('Authorization', ('Bearer ' + this.jwt.jwtToken).toString()).set('Content-Type', 'application/json').set('SessionID', (this.jwt.getSessionID()).toString());


  save(staffDto): any {
    return this.http.post(this.url, staffDto, { headers: this.headers });
  }

  getList(): any {
    return this.http.get(this.url, { headers: this.headers });
  }

  getList_search(pageNo = 0, pageSize = 10, roleId = 0): any {
    //?pageNo=0&pageSize=10&roleId=5&sortBy=id
    return this.http.get(this.url + '?pageNo=' + pageNo + '&pageSize=' + pageSize + '&roleId=' + roleId + '&sortBy=id', { headers: this.headers });
  }

  delete(Id): any {

    console.log(this.url + Id);
    return this.http.delete(this.url + Id, { headers: this.headers });
  }

  update(staffDto, Id): any {
    return this.http.put(this.url + Id, staffDto, { headers: this.headers });
  }

  getById(Id): any {
    return this.http.get(this.url + Id, { headers: this.headers });
  }
}