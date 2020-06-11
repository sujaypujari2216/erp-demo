import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  url = `http://yamistha.cloudjiffy.net/complaint`;
  constructor(private http: HttpClient) { }

  addComplain(complaint): any {
    return this.http.post(this.url, complaint);
  }

  getAllComplainList(): any {
    return this.http.get(this.url);
  }

  deleteComplain(complainId): any {

    return this.http.delete(this.url + complainId);
  }

  updateComplain(complaint, complainId): any {
    return this.http.put(this.url + complainId, complaint);
  }

  getcomplainById(complainId): any {
    return this.http.get(this.url + complainId);
  }



}