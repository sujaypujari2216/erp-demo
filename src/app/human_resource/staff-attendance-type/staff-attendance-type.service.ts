import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffAttendanceTypeService {

  constructor(private http: HttpClient) { }

  url = 'http://yamistha.cloudjiffy.net/staff attendance type/';


  save(Dto): any {
    return this.http.post(this.url, Dto);
  }

  get(): any {
    return this.http.get(this.url);
  }

  delete(headId): any {
    return this.http.delete(this.url + headId);
  }

  update(Dto, headId): any {
    return this.http.put(this.url + headId, Dto);
  }

  getById(headId): any {
    return this.http.get(this.url + headId);
  }
}
