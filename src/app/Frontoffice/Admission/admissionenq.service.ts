
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AdmissionenqService {
  url = `http://yamistha.cloudjiffy.net/enquiry/`;

  constructor(private http: HttpClient) { }

  save(enquiry): any {
    return this.http.post(this.url, enquiry);
  }

  getList(): any {
    return this.http.get(this.url);
  }

  delete(Id): any {

    console.log(this.url + Id);
    return this.http.delete(this.url + Id);
  }

  update(enquiry, Id): any {
    return this.http.put(this.url + Id, enquiry);
  }

  getById(Id): any {
    return this.http.get(this.url + Id);
  }
}
