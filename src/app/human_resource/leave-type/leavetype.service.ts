import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeavetypeService {

  constructor(private http: HttpClient) { }
  url = `http://yamistha.cloudjiffy.net/leave-type/`;

  save(leaveTypeDto): any {
    return this.http.post(this.url, leaveTypeDto);
  }

  getleavetypeList(): any {
    return this.http.get(this.url);
  }

  deleteleavetype(leavetypeId): any {
    return this.http.delete(this.url + leavetypeId);
  }

  updateleavetype(leaveTypeDto, leavetypeId): any {
    return this.http.put(this.url + leavetypeId, leaveTypeDto);
  }

  getleavetypeById(leavetypeId): any {
    return this.http.get(this.url + leavetypeId);
  }
}