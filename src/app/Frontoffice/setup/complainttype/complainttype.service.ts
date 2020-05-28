import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplainttypeService {
  url = `http://yamistha.cloudjiffy.net/complaint-type/`;

  constructor(private http: HttpClient) { }

  save(complaintType): any {
    return this.http.post(this.url, complaintType);
  }

  getList(): any {
    return this.http.get(this.url);
  }

  delete(Id): any {
    return this.http.delete(this.url + Id);
  }

  update(Dto, Id): any {
    return this.http.put(this.url + Id, Dto);
  }

  getById(Id): any {
    return this.http.get(this.url + Id);
  }
}
