import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdmissionformService {
  url = `http://yamistha.cloudjiffy.net/api/student/`;

  constructor(private http: HttpClient) { }

  addadmisssionform(studentDto): any {
    return this.http.post(this.url, studentDto);
  }

  getadmissionformList(): any {
    return this.http.get(this.url);
  }

  deleteadmissionform(AdmId): any {
    return this.http.delete(this.url + AdmId);
  }

  updateadmissionform(studentDto, AdmId): any {
    return this.http.put(this.url + AdmId, studentDto);
  }

  getadmissionformById(AdmId): any {
    return this.http.get(this.url + AdmId);
  }
}