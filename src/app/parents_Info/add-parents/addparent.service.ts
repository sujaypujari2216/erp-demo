import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddparentService {
  url = `http://yamistha.cloudjiffy.net/student/`;

  constructor(private http: HttpClient) { }

  addparent(studentDto): any {
    return this.http.post(this.url, studentDto);
  }

  getparentdetailList(): any {
    return this.http.get(this.url);
  }

  deleteparent(ParId): any {
    return this.http.delete(this.url + ParId);
  }

  updateparentinfo(studentDto, ParId): any {
    return this.http.put(this.url + ParId, studentDto);
  }

  getparentById(ParId): any {
    return this.http.get(this.url + ParId);
  }
  }