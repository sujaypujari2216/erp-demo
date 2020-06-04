import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitorsPerposeService {

  url = `http://yamistha.cloudjiffy.net/visitor-purpose/`;

  constructor(private http: HttpClient) { }

  save(visitorsPurpose): any {
    return this.http.post(this.url, visitorsPurpose);
  }

  getpurposeList(): any {
    return this.http.get(this.url);
  }

  delete(Id): any {
    return this.http.delete(this.url + Id);
  }

  update(visitorsPurpose, Id): any {
    return this.http.put(this.url + Id, visitorsPurpose);
  }

  getById(Id): any {
    return this.http.get(this.url + Id);
  }
}
