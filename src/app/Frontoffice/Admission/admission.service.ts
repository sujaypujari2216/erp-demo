import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  url = `http://yamistha.cloudjiffy.net/enquiry/`;

  constructor(private http: HttpClient) { }

  save(enquiry): any {
    return this.http.post(this.url, enquiry);
  }

  getenqList(): any {
    return this.http.get(this.url);
  }

  deleteenq(EnqId): any {

    return this.http.delete(this.url + EnqId);
  }

  update(enquiry, EnqId): any {
    return this.http.put(this.url + EnqId, enquiry);
  }

  getById(EnqId): any {
    return this.http.get(this.url + EnqId);
  }
}

